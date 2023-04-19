import { ReadyDispatch } from "../types/dispatch";
import { CoreApplication } from "./application";
import * as O from 'fp-ts/Option'
import * as U from './user'
import * as A from './application'
import { APIUnavailableGuild } from "discord-api-types/v10";
import { From1 } from "../types/parseable";


interface CoreReadyDispatch {
    v: number;
    user : U.User; //client user
    guilds: APIUnavailableGuild[];
    sessionId: string;
    resumeGatewayUrl: string;
    shard: O.Option<[number,number]>;
    application: CoreApplication 


}

function from(r: ReadyDispatch['d']): CoreReadyDispatch {
    return {
        v: r.v,
        user: U.Parseable.from(r.user),
        guilds: r.guilds,
        sessionId: r.session_id,
        resumeGatewayUrl: r.resume_gateway_url,
        shard: O.fromNullable(r.shard),
        application: A.Parseable.from(r.application)
    }
}

export const Parseable : From1<ReadyDispatch['d'], CoreReadyDispatch> = {
    from,
}
