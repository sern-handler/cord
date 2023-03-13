import { fromEvent, map, merge, concatMap, tap, pipe, of, OperatorFunction, filter, delay, Subject, share, interval, take, concat, BehaviorSubject, defer } from 'rxjs';
import WebSocket from 'ws'
import * as J from 'fp-ts/Json'
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as fp from 'fp-ts/function'
import { Options } from './index.js';
import { filterMap } from './internal/tools.js';


export enum GatewayOpcodes {
   /*
    * An event was dispatched
    */
  Dispatch,
   /*
    * A bidirectional opcode to maintain an active gateway connection.
    * Fired periodically by the client, or fired by the gateway to request an immediate heartbeat from the client.
    */
  Heartbeat,
   /*
    * Starts a new session during the initial handshake
    */
  Identify,
   /*
    * Update the client's presence
    */
  PresenceUpdate,
   /*
    * Used to join/leave or move between voice channels
    */
  VoiceStateUpdate,
   /*
    * Resume a previous session that was disconnected
    */
  Resume = 6,
   /*
    * You should attempt to reconnect and resume immediately
    */
  Reconnect,
   /*
    * Request information about offline guild members in a large guild
    */
  RequestGuildMembers,
   /*
    * The session has been invalidated. You should reconnect and identify/resume accordingly
    */
  InvalidSession,
   /*
    * Sent immediately after connecting, contains the heartbeat_interval to use
   */
  Hello,
 /*
  * Sent in response to receiving a heartbeat to acknowledge that it has been received
  */
  HeartbeatAck,
}

export interface Hello { 
    t: null,
    s: null,
    op: GatewayOpcodes.Hello,
    d: { heartbeat_interval: number }
}
export interface Heartbeat {
    t: string | null;
    op: GatewayOpcodes.Heartbeat;
    d?: number | null;
    s: number | null;
}

interface CoreDispatch {
    t: string  |null; 
    d: unknown;
    op: GatewayOpcodes.Dispatch;
    s: number | null;
}
export interface ReadyDispatch extends CoreDispatch {
    t: "READY";
    d: {
        v: number;
        user : any;
        guilds: any[];
        session_id: string;
        resume_gateway_url: string;
        shard?: [number,number];
        application: any
    }
}
type Dispatch =
    | ReadyDispatch;
type Payload = 
    | Hello 
    | Heartbeat
    | Identify
    | Resume
    | Dispatch;


export interface Identify {
    op: GatewayOpcodes.Identify
    t: null,
    s: null,
    d : {
      "token": string;
      "intents": number; //intents
      "properties": {
        "os": string;
        "browser": string;
        "device": string;
       } 
    };
    "compress"?: boolean;
    "large_threshold"?: number;
    "shard"?: [number, number];
    "presence"?: {
        "activities": { name: string; type: number }[],
        "status": "dnd";
        "since"?: number;
        "afk": false;
    }
}

export interface Resume {
    "t" : null,
    "op": GatewayOpcodes.Resume,
    "d": {
        "token": string; 
        "session_id": string;
        "seq": number 
    };
    s: null;
}
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


const jitter = (heartbeat_interval: number): number => heartbeat_interval * Math.random();

const makeAorta = (ws: WebSocket.WebSocket) => (payload: Payload) => ws.send(JSON.stringify(payload))
const makeStartPump = (aorta: Aorta, hs: BehaviorSubject<Hello|null>): OperatorFunction<Payload, Payload> =>
    pipe(
      concatMap(pload => {
         if(pload.op === GatewayOpcodes.Hello) {
            return of(pload).pipe(
                  delay(jitter(pload.d.heartbeat_interval)),
                  tap(() => {
                      aorta({ op: GatewayOpcodes.Heartbeat, d:null, t:null, s:null })
                      hs.next(pload)
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

function makeResumeManager() {

}

function dispatchOpcodes(
    payload: Payload,
    gatewayReconnectSetter : BehaviorSubject<O.Option<string>>,
    aorta: Aorta,
) {
    switch(payload.op){
       case GatewayOpcodes.Dispatch: { 
          switch(payload.t) {
            case "READY" : {
               gatewayReconnectSetter.next(O.some(payload.d.resume_gateway_url)) 
            } break;
            case null : {

            } break;
          }
       } break;
       case GatewayOpcodes.Resume : {

       } break;
       //https://discord.com/developers/docs/topics/gateway#heartbeat-requests
       case GatewayOpcodes.Heartbeat: {
        aorta({ op: GatewayOpcodes.Heartbeat, t: null, s: null })
       }
    }

}

export const createHeart = (
    ws: WebSocket.WebSocket,
    options: Options
) => {
     const identifyPump = new Subject<never>(); 
     const hello = new BehaviorSubject<Hello|null>(null);
     const sequence = new BehaviorSubject<number|null>(null);
     const startHeart$ = fromEvent(ws, 'on');
     const onError$ = fromEvent(ws, 'error').pipe(tap(console.error));
     const onDeath$ = fromEvent(ws, 'close').pipe(tap(console.info));
     const messageStream$ = handleMessages$(ws);
     const aorta = makeAorta(ws);

     const startPump = messageStream$.pipe(
         makeStartPump(aorta, hello),
         tap(() => identifyPump.complete()));

     const heartbeat$ = defer(() => interval(hello.value?.d.heartbeat_interval)).pipe(
         tap(() => {
             aorta({ op: GatewayOpcodes.Heartbeat, d: sequence.getValue(), t: null, s: null })
         }),
     );
        
    return {
        //ensures bloodStream$ recieves mesages after identification (op 2)
        bloodStream$: concat(
            identifyPump,
            messageStream$.pipe(tap((e) => {
                if(e.s !== null) {
                    sequence.next(e.s);
                } else {
                    console.debug('sequence number null')
                }
            }))
        ),
        start: () => {
            identifyPump.subscribe({
                complete: () => {
                    fp.pipe(options, optionsToIdentify, aorta);
                }, 
                error: console.error,
            });
            
            return merge(
                startHeart$,
                concat(startPump, heartbeat$),
                onError$,
                onDeath$
            );
        }
    }
}
    


