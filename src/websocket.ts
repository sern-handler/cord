import { 
    fromEvent,
    map,
    merge,
    concatMap,
    tap,
    pipe,
    of,
    OperatorFunction,
    filter,
    delay,
    Subject,
    share,
    interval,
    take,
    concat,
    BehaviorSubject,
    defer,
    Observable,
    throwError,
    timeout,
    catchError 
} from 'rxjs';
import WebSocket from 'ws'
import * as J from 'fp-ts/Json'
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as fp from 'fp-ts/function'
import { Options } from './index.js';
import { filterMap } from './internal/tools.js';
import { GatewayOpcodes, Hello, Identify, Payload } from './types/dispatch'
import { Lazy } from 'fp-ts/function';
import * as T from 'fp-ts/Task'

//Creates a multicasted websocket connection
//ie: multiple streams share the same source (websocket connection).
export const handleMessages$ = (
    ws: WebSocket.WebSocket
) => {
  const onmessage$ = fromEvent<MessageEvent>(ws, 'message')
   .pipe(
       map(we => J.parse(we.data as string) as E.Either<unknown,Payload>),
       filterMap(),
       share()
   );
  return onmessage$;
}

type Aorta = (payload: Payload) => unknown

const HeartbeatSyncError = Error("Heartbeat out of sync: Hello event has not been recieved")

const jitter = (heartbeat_interval: number): number => heartbeat_interval * Math.random();

const makeAorta = (ws: WebSocket.WebSocket) => (payload: Payload) => ws.send(JSON.stringify(payload))

const makeStartPump = (aorta: Aorta, hs: BehaviorSubject<O.Option<Hello>>): OperatorFunction<Payload, Payload> =>
    pipe(
      concatMap(pload => {
         if(pload.op === GatewayOpcodes.Hello) {
            return of(pload).pipe(
                  delay(jitter(pload.d.heartbeat_interval)),
                  tap(() => {
                      aorta({ op: GatewayOpcodes.Heartbeat, d:null, t:null, s:null })
                      hs.next(O.some(pload))
                  }),
             );
         }
         throw Error("Heartbeat out of sync");
     }),
     take(1),
);


function optionsToIdentify(options: Options): Identify {
    const processedProperties = fp.pipe(
        options.identify.properties,
        O.fromNullable,
        O.getOrElse(() => ({ os: 'sern', browser: 'sern', device: 'sern' }))
    );
    return {
        t: null,
        s: null,
        op: GatewayOpcodes.Identify,
        d : {
           token: options.token,
           intents: options.identify.intents,
           properties : processedProperties 
        }
    }
}

const intoInterval = 
    O.match(
        () => throwError(() => HeartbeatSyncError),
        (rate: number) => of(rate).pipe(concatMap(() => interval(rate)))
    )


const maybeHeartBeat = O.map((payload: Hello) => payload.d.heartbeat_interval)

const heartbeatOrThrow =
    O.match(
        () => throwError(() => HeartbeatSyncError),
        (rate: number) => of(rate).pipe(timeout(rate)) 
    )


function createHeartbeat(rate: Lazy<O.Option<Hello>>, aorta: Aorta, sequenceSubject: BehaviorSubject<number|null>) {
    
   const interval = () => fp.pipe(rate(), maybeHeartBeat, intoInterval)
   return defer(interval).pipe(
     tap(() => { 
        aorta({ op: GatewayOpcodes.Heartbeat, d: sequenceSubject.getValue(), t: null, s: null })
     })
   )
}
export const createHeart = (
    ws: WebSocket.WebSocket,
    options: Options
) => {
     const identifyPump = new Subject<never>(); 
     const hello = new BehaviorSubject<O.Option<Hello>>(O.none);
     const sequence = new BehaviorSubject<number|null>(null);
     const startHeart$ = fromEvent(ws, 'on');
     const onError$: Observable<WebSocket.ErrorEvent> = fromEvent(ws, 'error').pipe(
         tap(console.error)
     );
     const onDeath$: Observable<WebSocket.CloseEvent> = fromEvent(ws, 'close').pipe(
         tap(console.info)
     );
     const messageStream$ = handleMessages$(ws);
     const aorta = makeAorta(ws);

     const startPump = messageStream$.pipe(
         makeStartPump(aorta, hello),
         tap(() => identifyPump.complete())
     );
     const heartbeat$ = createHeartbeat(() => hello.getValue(), aorta, sequence); 
     const timeout$ = messageStream$.pipe(
         filter(payload => payload.op === GatewayOpcodes.HeartbeatAck),
         concatMap(() => 
            fp.pipe(
               hello.value, 
               maybeHeartBeat,
               heartbeatOrThrow
         ).pipe(
            catchError((err, obs) => { 
                console.log(err);
                return obs
            })
         )),
         
     )
        
    return {
        //ensures bloodStream$ recieves mesages after identification (op 2)
        bloodStream$: concat(
            identifyPump,
            messageStream$.pipe(tap((e) => {
                if(e.s !== null) {
                    sequence.next(e.s);
                } else {
                    if(e.op === GatewayOpcodes.Dispatch) {
                        console.debug('sequence number null')
                    }
                }
            }))
        ),
        start: () => {
            identifyPump.subscribe({
                complete: () => {
                    fp.pipe(options, optionsToIdentify, aorta);
                } 
            });
            
            return merge(
                startHeart$,
                concat(startPump, merge(heartbeat$, timeout$)),
                onError$,
                onDeath$
            );
        }
    }
}
    


