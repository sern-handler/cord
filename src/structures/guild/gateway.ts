import { GatewayGuildCreateDispatchData, GatewayPresenceUpdate, GatewayVoiceState } from "discord-api-types/v10";
import * as C from '../channel'
import * as  O from 'fp-ts/Option'
import * as G from './guild'
import { From1 } from "../../types/parseable";
interface CoreGuildCreate extends G.CoreGuild {
    /**
     * When this guild was joined at
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     */
    joinedAt: string;
    /**
     * `true` if this is considered a large guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     */
    large: boolean;
    /**
     * `true` if this guild is unavailable due to an outage
     */
    unavailable: O.Option<boolean>;
    /**
     * Total number of members in this guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     */
    memberCount: number;
    /**
     * States of members currently in voice channels; lacks the `guild_id` key
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/resources/voice#voice-state-object
     */
    voiceStates: Omit<GatewayVoiceState, 'guild_id'>[];
    /**
     * Users in the guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/resources/guild#guild-member-object
     */
    //members: APIGuildMember[]; TODO 
    /**
     * Channels in the guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/resources/channel#channel-object
     */
    channels: C.CoreChannel[];
    /**
     * Threads in the guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/resources/channel#channel-object
     */
    threads: C.CoreChannel[];
    /**
     * Presences of the members in the guild, will only include non-offline members if the size is greater than `large_threshold`
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/topics/gateway-events#presence-update
     */
    presences: GatewayPresenceUpdate[];
    /**
     * The stage instances in the guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * See https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
     */
    // stage_instances: APIStageInstance[]; TODO
    /**
     * The scheduled events in the guild
     *
     * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
     *
     * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object
     */
    //guild_scheduled_events: APIGuildScheduledEvent[]; TODO

}

function from(r: GatewayGuildCreateDispatchData) : CoreGuildCreate {
    const coreGuild = G.Parseable.from(r)
    return {
        joinedAt: r.joined_at,
        large: r.large,
        unavailable: O.fromNullable(r.unavailable),
        memberCount: r.member_count,
        voiceStates: [], //TODO,
        channels: r.threads.map(C.Parseable.from), 
        threads: r.threads.map(C.Parseable.from),
        presences: [],
        ...coreGuild 
    } 
}

export const Parseable : From1<GatewayGuildCreateDispatchData, CoreGuildCreate> = {
    from
}
