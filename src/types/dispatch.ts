import { APIApplication, APIGuild, APIMessage, APIUnavailableGuild, APIUser, GatewayGuildCreateDispatch, GatewayGuildCreateDispatchData, GatewayMessageEventExtraFields } from "discord-api-types/v10";
import { RawMessage } from "../structures/message";
import * as U from '../structures/user';
export enum GatewayOpcodes {
   /*
    * An event was dispatched
    */
  Dispatch,
   /*
    * A bidirectional opcode to maintain an active gateway connection. Fired periodically by the client, or fired by the gateway to request an immediate heartbeat from the client. */
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

export interface HeartbeatAck {
    t: null;
    op: GatewayOpcodes.HeartbeatAck;
    d: null;
    s: null;
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
        user : APIUser; //client user
        guilds: APIUnavailableGuild[];
        session_id: string;
        resume_gateway_url: string;
        shard?: [number,number];
        application: APIApplication 
    }
}


export interface MessageCreateDispatch extends CoreDispatch {
    t: "MESSAGE_CREATE",
    d: APIMessage & GatewayMessageEventExtraFields;
}
export interface GuildCreateDispatch extends CoreDispatch {
    t: "GUILD_CREATE";
    d: GatewayGuildCreateDispatchData
}
export type Dispatch =
    | ReadyDispatch
    | MessageCreateDispatch;
export type Payload = 
    | Hello 
    | Heartbeat
    | Identify
    | HeartbeatAck
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


