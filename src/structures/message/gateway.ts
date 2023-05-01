import * as M from './message'
import * as O from 'fp-ts/Option'
import { GatewayMessageCreateDispatchData } from 'discord-api-types/v10';
import { Id, nullableSnowflakeToId } from '../id';
import { From1 } from '../../types/parseable';
interface CoreMessageCreate extends M.CoreMessage {
    guildId: O.Option<Id>;
    //member: APIGuildMember; //TODO -> APIGuildMember -> CoreGuildMember
}   



function from(r: GatewayMessageCreateDispatchData): CoreMessageCreate {
    const coreMsg = M.Parseable.from(r);
    return {
        guildId: nullableSnowflakeToId(r.guild_id),
        //mentions: [], //why does api typings omit this?
        ...coreMsg
    } 

}

export const Parseable : From1<GatewayMessageCreateDispatchData, CoreMessageCreate> = {
    from
}
