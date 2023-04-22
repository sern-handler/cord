import { 
    Snowflake,
    APIGuild,
    GuildVerificationLevel,
    GuildDefaultMessageNotifications,
    GuildExplicitContentFilter,
    GuildFeature,
    GuildMFALevel,
    GuildSystemChannelFlags,
    GuildPremiumTier,
    APIGuildWelcomeScreen,
    GuildNSFWLevel,
    GuildHubType,
    Permissions 
} from "discord-api-types/v10"
import { Id, nullableSnowflakeToId } from "../id";
import * as O from 'fp-ts/Option';
import { id } from "../common";
import { From1 } from "../../types/parseable";

export interface RawIntegration {
  id: Snowflake;
}

export interface CoreGuild {
    id: Id;
    /**
     * Icon hash, returned when in the template object
     *
     * See https://discord.com/developers/docs/reference#image-formatting
     */
    iconHash: O.Option<string>;
     /**
     * Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
     *
     * See https://discord.com/developers/docs/reference#image-formatting
     */
    discoverySplash: O.Option<string> ;
    ownerId: Id;
    afkChannelId: O.Option<Id>;
    
    /**
     * `true` if the user is the owner of the guild
     *
     * **This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**
     */
    owner: O.Option<boolean>;
    
    /**
     * Total permissions for the user in the guild (excludes overrides)
     *
     * **This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**
     *
     * See https://en.wikipedia.org/wiki/Bit_field
     */
    permissions: O.Option<Permissions>;
    /**
     * Voice region id for the guild
     *
     * See https://discord.com/developers/docs/resources/voice#voice-region-object
     * @deprecated This field has been deprecated in favor of `rtc_region` on the channel.
     */
    region: string;
    /**
     * afk timeout in seconds, can be set to: `60`, `300`, `900`, `1800`, `3600`
     */
    afkTimeout: 60 | 300 | 900 | 1800 | 3600;
    /**
     * `true` if the guild widget is enabled
     */
    widgetEnabled?: boolean;
    /**
     * The channel id that the widget will generate an invite to, or `null` if set to no invite
     */
    widgetChannelId: O.Option<Id>;
    /**
     * Verification level required for the guild
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verificationLevel: GuildVerificationLevel;
    defaultMessageNotifications: GuildDefaultMessageNotifications;
    explicitContentFilter: GuildExplicitContentFilter;
    /**
     * Roles in the guild
     *
     * See https://discord.com/developers/docs/topics/permissions#role-object
     */
    //roles: APIRole[]; TODO :  CoreRole
    /**
     * Custom guild emojis
     *
     * See https://discord.com/developers/docs/resources/emoji#emoji-object
     */
    //emojis: APIEmoji[]; //TODO: CoreEmoji
    /**
     * Enabled guild features
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-guild-features
     */
    features: GuildFeature[];
    /**
     * Required MFA level for the guild
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
     */
    mfaLevel: GuildMFALevel;
    /**
     * Application id of the guild creator if it is bot-created
     */
    applicationId: O.Option<Id>;
    /**
     * The id of the channel where guild notices such as welcome messages and boost events are posted
     */
    systemChannelid: O.Option<Id>;
    /**
     * System channel flags
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
     */
    systemChannelFlags: GuildSystemChannelFlags;
    /**
     * The id of the channel where Community guilds can display rules and/or guidelines
     */
    rulesChannelId: O.Option<Id>;
    /**
     * The maximum number of presences for the guild (`null` is always returned, apart from the largest of guilds)
     */
    maxPresences: O.Option<number>;
    /**
     * The maximum number of members for the guild
     */
    maxMembers: O.Option<number>;
    /**
     * The vanity url code for the guild
     */
    vanityUrlCode: O.Option<string>;
    /**
     * The description for the guild
     */
    description: O.Option<string>;
    /**
     * Banner hash
     *
     * See https://discord.com/developers/docs/reference#image-formatting
     */
    banner: O.Option<string>;
    /**
     * Premium tier (Server Boost level)
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premiumTier: GuildPremiumTier;
   /**
     * The number of boosts this guild currently has
     */
    premiumSubscriptionCount: O.Option<number>;
    /**
     * The preferred locale of a Community guild; used in guild discovery and notices from Discord; defaults to "en-US"
     *
     * @default "en-US"
     */
    preferredLocale: string;
    /**
     * The id of the channel where admins and moderators of Community guilds receive notices from Discord
     */
    publicUpdatesChannelId: O.Option<Id>;
    /**
     * The maximum amount of users in a video channel
     */
    maxVideoChannelUsers: O.Option<number>;
    /**
     * The maximum amount of users in a stage video channel
     */
    maxStageVideoChannelUsers: O.Option<number>;
    /**
     * Approximate number of members in this guild,
     * returned from the `GET /guilds/<id>` and `/users/@me/guilds` (OAuth2) endpoints when `with_counts` is `true`
     */
    approximateMemberCount: O.Option<number>;
    /**
     * Approximate number of non-offline members in this guild,
     * returned from the `GET /guilds/<id>` and `/users/@me/guilds` (OAuth2) endpoints when `with_counts` is `true`
     */
    approximatePresenceCount: O.Option<number>;
    /**
     * The welcome screen of a Community guild, shown to new members
     *
     * Returned in the invite object
     */
    welcomeScreen: O.Option<APIGuildWelcomeScreen>;
    /**
     * The nsfw level of the guild
     *
     * See https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfwLevel: GuildNSFWLevel;
    /**
     * Custom guild stickers
     *
     * See https://discord.com/developers/docs/resources/sticker#sticker-object
     */
    //stickers: APISticker[]; TODO: CoreSticker
    /**
     * Whether the guild has the boost progress bar enabled.
     */
    premiumProgressBarEnabled: boolean;
    /**
     * The type of Student Hub the guild is
     */
    hubType: O.Option<GuildHubType>;
}


function from(r: APIGuild): CoreGuild {
    return {
        id: id(r),
        iconHash: O.fromNullable(r.icon_hash),
        discoverySplash: O.fromNullable(r.discovery_splash),
        ownerId: new Id(r.owner_id),
        afkChannelId: nullableSnowflakeToId(r.afk_channel_id),
        permissions: O.fromNullable(r.permissions),
        owner: O.fromNullable(r.owner),
        region: r.region,
        afkTimeout: r.afk_timeout,
        widgetChannelId: nullableSnowflakeToId(r.widget_channel_id),
        verificationLevel: r.verification_level,
        mfaLevel: r.mfa_level,
        defaultMessageNotifications: r.default_message_notifications,
        applicationId: nullableSnowflakeToId(r.application_id),
         /**
         * Explicit content filter level
         *
         * See https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
         */
        explicitContentFilter: r.explicit_content_filter,
        //roles: APIRole[] TODO :  CoreRole,
        //emojis: APIEmoji[] //TODO: CoreEmoji,
        features: r.features,
        systemChannelid: nullableSnowflakeToId(r.system_channel_id),
        rulesChannelId: nullableSnowflakeToId(r.rules_channel_id),
        maxPresences: O.fromNullable(r.max_presences),
        maxMembers: O.fromNullable(r.max_members),
        vanityUrlCode: O.fromNullable(r.vanity_url_code),
        description: O.fromNullable(r.description),
        banner: O.fromNullable(r.banner),
        premiumSubscriptionCount: O.fromNullable(r.premium_subscription_count),
        preferredLocale: r.preferred_locale,
        publicUpdatesChannelId: nullableSnowflakeToId(r.public_updates_channel_id),
        maxVideoChannelUsers: O.fromNullable(r.max_stage_video_channel_users),
        maxStageVideoChannelUsers: O.fromNullable(r.max_stage_video_channel_users),
        approximateMemberCount: O.fromNullable(r.approximate_member_count),
        approximatePresenceCount: O.fromNullable(r.approximate_presence_count),
        welcomeScreen: O.fromNullable(r.welcome_screen),
        premiumProgressBarEnabled: r.premium_progress_bar_enabled,
        hubType: O.fromNullable(r.hub_type),
        systemChannelFlags: r.system_channel_flags,
        nsfwLevel: r.nsfw_level,
        premiumTier: r.premium_tier
    }

}
export const Parseable : From1<APIGuild, CoreGuild> = {
    from
}

export enum Endpoints {
   CreateGuild = "POST /guilds",
   GetGuild = "GET /guilds/{guild.id}",
   GetGuildPreview = "GET /guilds/{guild.id}/preview",
   Modify = "PATCH /guilds/{guild.id}",
   DeleteGuild = "DELETE /guilds/{guild.id}" ,
   GetGuildChannels = "GET /guilds/{guild.id}/channels",
   CreateGuildChannel = "POST /guilds/{guild.id}/channels",
   ModifyGuildChannelPositions = "PATCH /guilds/{guild.id}/channels",
   ListActiveGuildThreads = "GET /guilds/{guild.id}/threads/active",
   GetGuildMember = "GET /guilds/{guild.id}/members/{user.id}",
   ListGuildMember = "GET /guilds/{guild.id}/members",
   SearchGuildMembers = "GET /guilds/{guild.id}/members/search",
   AddGuildMember = "PUT /guilds/{guild.id}/members/{user.id}",
   ModifyGuildMember = "PATCH /guilds/{guild.id}/members/{user.id}",
   /**
   *  Modifies the current member in a guild.
   *  Returns a 200 with the updated member object on success.
   *  Fires a Guild Member Update Gateway event.
   */
   ModifyCurrentMember = "PATCH /guilds/{guild.id}/members/@me",
}
