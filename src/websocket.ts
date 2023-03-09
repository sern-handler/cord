import { fromEvent, map, merge, concatMap, Observable, tap, pipe, of, OperatorFunction, filter, delay, Subject, share, interval, take, concat, MonoTypeOperatorFunction,  BehaviorSubject, defer } from 'rxjs';
import WebSocket from 'ws'
import * as J from 'fp-ts/Json'
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as fp from 'fp-ts/function'
import { Options } from './index.js';


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
export enum GatewayCloseEventCode {
  UnknownError = 4000,
  UnknownOpCode = 4001,
  DecodeError = 4002,
  NotAuthenticated = 4003,
  AuthenticationFailed = 4004,
  AlreadyAuthenticated = 4005,
  InvalidSeq = 4007,
  Ratelimited = 4008,
  SessionTimedOut = 4009,
  InvalidShard = 4010,
  ShardingRequired = 4011,
  InvalidApiVersion = 4012,
  InvalidIntents = 4013,
  DisallowedIntents = 4014,
}

export enum VoiceOpCode {
  Identify = 0,
  SelectProtocol = 1,
  Ready = 2,
  Heartbeat = 3,
  SessionDescription = 4,
  Speaking = 5,
  HeartbeatAck = 6,
  Resume = 7,
  Hello = 8,
  Resumed = 9,
  ClientDisconnect = 13,
}

export enum VoiceCloseEventCode {
  UnknownOpCode = 4001,
  FailedToDecodePayload = 4002,
  NotAuthenticated = 4003,
  AuthenticationFailed = 4004,
  AlreadyAuthenticated = 4005,
  SessionNoLongerValid = 4006,
  SessionTimeout = 4009,
  ServerNotFound = 4011,
  UnknownProtocol = 4012,
  Disconnected = 4014,
  VoiceServerCrashed = 4015,
  UnknownEncryptionMode = 4016,
}

export enum HttpResponseCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  NotModified = 304,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  TooManyRequests = 429,
  GatewayUnavailable = 502,
  // ServerError = 5xx
}


export enum RpcErrorCode {
  UnknownError = 1000,
  InvalidPayload = 4000,
  InvalidCommand = 4002,
  InvalidGuild = 4003,
  InvalidEvent = 4004,
  InvalidChannel = 4005,
  InvalidPermissions = 4006,
  InvalidClientId = 4007,
  InvalidOrigin = 4008,
  InvalidToken = 4009,
  InvalidUser = 4010,
  OAuth2Error = 5000,
  SelectChannelTimedOut = 5001,
  GetGuildTimedOut = 5002,
  SelectVoiceForceRequired = 5003,
  CaptureShortcutAlreadyListening = 5004,
}

export enum RpcCloseEventCode {
  InvalidClientId = 4000,
  InvalidOrigin = 4001,
  Ratelimited = 4002,
  TokenRevoked = 4003,
  InvalidVersion = 4004,
  InvalidEncoding = 4005,
}
export interface Hello { 
    t: null,
    s: null,
    op: GatewayOpcodes.Hello,
    d: { heartbeat_interval: number }
}
export interface Heartbeat {
    t: number | null;
    op: GatewayOpcodes.Heartbeat;
    d?: number | null;
    s?: number | null;
}


type Payload = 
    | Hello 
    | Heartbeat
    | Identify;


export interface Identify {
    op: GatewayOpcodes.Identify
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

//Creates a multicasted websocket connection
//ie: multiple streams share the same source (websocket connection).
export const handleMessages$ = (
    ws: WebSocket.WebSocket
) => {
   const onmessage$ = fromEvent<MessageEvent>(ws, 'message')
    .pipe(
        map(we => J.parse(we.data as string) as E.Either<unknown,Payload>),
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


function tapOnce<T>(fn: (v: T) => any): MonoTypeOperatorFunction<T> {
  return (source$: Observable<T>) => {
    const sharedSource$ = source$.pipe(share());
    const tapped$ = sharedSource$.pipe(
      tap(fn),
      take(1)
    );

    return concat(tapped$, sharedSource$);
  };
}

function optionsToIdentify(options: Options): Identify {
    const processedProperties = fp.pipe(
        options.identify.properties,
        O.fromNullable,
        O.getOrElse(() => ({ os: 'sern', browser: 'sern', device: 'sern' }))
    );
    return {
        op: GatewayOpcodes.Identify,
        d : {
           token: options.token,
           intents: options.identify.intents,
           properties : processedProperties 
        }
    }
}

export const createHeart = (
    ws: WebSocket.WebSocket,
    options: Options
) => {
     const identifyPump = new Subject<void>(); 
     const hello = new BehaviorSubject<Hello|null>(null);
     const sequence = new BehaviorSubject<number|null>(null);
     const startHeart$ = fromEvent(ws, 'on');
     const onError$ = fromEvent(ws, 'error').pipe(tap(console.error));
     const onDeath$ = fromEvent(ws, 'close').pipe(tap(console.info));
     const messageStream$ = handleMessages$(ws).pipe(filter(E.isRight), map(r => r.right))

     const aorta = makeAorta(ws);

     const startPump = messageStream$.pipe(
         makeStartPump(aorta, hello),
         tap(() => identifyPump.complete()));

     const heartbeat$ = defer(() => interval(hello.value?.d.heartbeat_interval)).pipe(
         tap(() => {
             aorta( { op: GatewayOpcodes.Heartbeat, d: sequence.getValue() });
             console.log(process.memoryUsage().heapUsed)
         }),
     );
         
    return {
        bloodStream$: messageStream$,
        start: () => {
            identifyPump.subscribe({
                complete: () => {
                    fp.pipe(options, optionsToIdentify, aorta);
                    sequence.next(1);
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
    


