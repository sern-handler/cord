import type { APIMessage, GatewayMessageCreateDispatch } from "discord-api-types/v10";
import type { CoreMessage } from "../structures/message/message";
import * as Id from "../structures/id";
//import * as U from "../user";
import * as O from 'fp-ts/Option'
//import * as C from '../channel'
import * as fp from 'fp-ts/function'

export function from(raw: APIMessage) : GatewayMessageCreateDispatch {
    
    return {
        content: raw.content,
        channel_id: Id.from(raw.channel_id),
        webhook_id: Id.fromMaybeSnowflake(raw.webhook_id),
        author: U.Parseable.from(raw.author),
        timestamp: raw.timestamp,
        editedTimestamp: O.fromNullable(raw.edited_timestamp),
        tts: raw.tts,
        mentionEveryone: raw.mention_everyone,
        mentions: raw.mentions.map(U.Parseable.from),
        nonce: O.fromNullable(raw.nonce),
        pinned: raw.pinned,
        type: raw.type,
        applicationId: Id.fromMaybeSnowflake(raw.application_id),
        flags: O.fromNullable(raw.flags),
        position: O.fromNullable(raw.position),
        thread: fp.pipe(O.fromNullable(raw.thread), O.map(C.Parseable.from))
    }
}


