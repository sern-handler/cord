import * as M from './message'
import * as U from '../user'
import * as O from 'fp-ts/Option'
import { APIMessage, GatewayMessageCreateDispatchData, GatewayMessageEventExtraFields } from 'discord-api-types/v10';
interface CoreMessageCreate extends M.CoreMessage {
    guildId: string;
    //member: APIGuildMember; //TODO -> APIGuildMember -> CoreGuildMember
    
}   




function from(r: GatewayMessageCreateDispatchData): CoreMessageCreate {
    return {
        

    } satisfies CoreMessageCreate

}
