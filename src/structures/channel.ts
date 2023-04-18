import { id } from "./common";
import * as O from 'fp-ts/Option'
import * as U from './user'
import { Id, nullableSnowflakeToId } from "./id";
import * as fp from 'fp-ts/function'
import * as A from 'fp-ts/Array'
import { From1 } from "../types/parseable";
import { APIChannel, APIGuildForumTag, APIReaction, APIThreadMember, APIThreadMetadata, ChannelType, Snowflake, ThreadAutoArchiveDuration } from "discord-api-types/v10";

export interface CoreChannel {
    id: Id,
    type: ChannelType;
    name: O.Option<string>;
    guildId: O.Option<Id>//	the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
    position:	O.Option<number>// sorting position of the channel
    //permission_overwrites?:	array of overwrite objects	explicit permission overwrites for members and roles
    topic: O.Option<string>	//the channel topic (0-4096 characters for GUILD_FORUM channels, 0-1024 characters for all others)
    nsfw: O.Option<boolean>	//whether the channel is nsfw
    lastMessageId: O.Option<Id>//	the id of the last message sent in this channel (or thread for GUILD_FORUM channels) (may not point to an existing or valid message or thread)
    bitrate: O.Option<number>	//the bitrate (in bits) of the voice channel
    userLimit: O.Option<number>	//integer	the user limit of the voice channel
    rateLimitPerUser: O.Option<number> //*	integer	amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
    recipients: O.Option<U.User[]> //	array of user objects	the recipients of the DM
    icon: O.Option<string>	//icon hash of the group DM
    ownerId:	O.Option<Id>//	id of the creator of the group DM or thread
    applicationId:O.Option<Id>//	application id of the group DM creator if it is bot-created
    managed:	O.Option<boolean>//	for group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
    parentId:	O.Option<Id>// ?Snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
    lastPinTimestamp: O.Option<string>	//?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
    rtcRegion:	O.Option<string>	// ?string voice region id for the voice channel, automatic when set to null
    videoQualityMode: O.Option<number>//	the camera video quality mode of the voice channel, 1 when not present
    messageCount: O.Option<number> //**	integer	number of messages (not including the initial message or deleted messages) in a thread.
    memberCount: O.Option<number>//integer	an approximate count of users in a thread, stops counting at 50
    threadMetadata: O.Option<CoreThreadMetadata>	
    member: O.Option<APIThreadMember> //	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
    defaultAutoArchiveDuration: O.Option<number> //	integer	default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
    permissions: O.Option<string>//	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction
    flags: O.Option<number> //	integer	channel flags combined as a bitfield
    totalMessageSent: O.Option<number> //integer	number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
    availableTags: O.Option<APIGuildForumTag[]>//	array of tag objects	the set of tags that can be used in a GUILD_FORUM channel
    appliedTags?: O.Option<Id[]>	//array of snowflakes	the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel
    defaultReactionEmoji: O.Option<APIReaction>;//	?default reaction object	the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel
    defaultThreadRateLimitPerUser: O.Option<number>//	the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
    defaultSortOrder: O.Option<number>//	?integer	the default sort order type used to order posts in GUILD_FORUM channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
    defaultForumLayout: O.Option<number> //	integer	the default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin

}
interface CoreThreadMetadata {
/**
     * Whether the thread is archived
     */
    archived: boolean;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
     */
    autoArchiveDuration: ThreadAutoArchiveDuration;
    /**
     * An ISO8601 timestamp when the thread's archive status was last changed, used for calculating recent activity
     */
    archiveTimestamp: string;
    /**
     * Whether the thread is locked; when a thread is locked, only users with `MANAGE_THREADS` can unarchive it
     */
    locked: O.Option<boolean>;
    /**
     * Whether non-moderators can add other non-moderators to the thread; only available on private threads
     */
    invitable: O.Option<boolean>;
    /**
     * Timestamp when the thread was created; only populated for threads created after 2022-01-09
     */
    createTimestamp: O.Option<string>;
}

function _apiThreadToCoreMetadata(a: APIThreadMetadata): CoreThreadMetadata  {
    return {
        archived: a.archived,
        locked: O.fromNullable(a.locked),
        invitable: O.fromNullable(a.invitable),
        createTimestamp: O.fromNullable(a.create_timestamp),
        archiveTimestamp: a.archive_timestamp,
        autoArchiveDuration: a.auto_archive_duration,
    }
}
const APIThreadMetadataToCore : From1<APIThreadMetadata, CoreThreadMetadata> = {
    from: _apiThreadToCoreMetadata
}


interface GuildTextChannel extends CoreChannel {
    type: ChannelType.GuildText
    name: O.Some<string>,
    bitrate: O.None
    
 }
interface DMChannel extends CoreChannel {
    type: ChannelType.DM
    name: O.None
 }
interface GuildVoiceChannel extends CoreChannel{
    type: ChannelType.GuildVoice
    name: O.Some<string>
 }
interface GroupDMChannel extends CoreChannel{
    type: ChannelType.GroupDM
 }
interface GuildCategoryChannel extends CoreChannel {
    type: ChannelType.GuildCategory
    name: O.Some<string>
 }
interface GuildAnnouncementChannel extends CoreChannel{
    type: ChannelType.GuildAnnouncement
    name: O.Some<string>
 }
interface AnnouncementThreadChannel extends CoreChannel{
    type: ChannelType.AnnouncementThread
 }
interface PublicThreadChannel extends CoreChannel{
    type: ChannelType.PublicThread
 }
interface PrivateThreadChannel extends CoreChannel{
    type: ChannelType.PrivateThread
 }
interface GuildStageVoiceChannel extends CoreChannel{
    type: ChannelType.GuildStageVoice
    name: O.Some<string>
 }
interface GuildDirectoryChannel extends CoreChannel{
    type: ChannelType.GuildDirectory
 }
interface GuildForumChannel extends CoreChannel{
    type: ChannelType.GuildForum
 }
export type AnyChannel =
    | GuildTextChannel
    | GuildForumChannel
    | GuildDirectoryChannel
    | GuildVoiceChannel
    | GuildAnnouncementChannel
    | AnnouncementThreadChannel
    | PublicThreadChannel
    | PrivateThreadChannel
    | GuildStageVoiceChannel
    | DMChannel
    | GroupDMChannel
    | GuildCategoryChannel

function from(r: APIChannel): CoreChannel {
   const r2 = r as any;
   return {
     type: r.type,
     name: O.fromNullable(r.name),
     flags: O.fromNullable(r.flags),
     id: id(r),
     guildId: nullableSnowflakeToId(r2.guild_id),
     position:	O.fromNullable(r2.position),
    //permission_overwrites?:	array of overwrite objects	explicit permission overwrites for members and roles
     topic: O.fromNullable(r2.topic),
     nsfw: O.fromNullable(r2.nsfw),
     lastMessageId: nullableSnowflakeToId(r2.last_message_id),
     bitrate: O.fromNullable(r2.bitrate),	
     userLimit: O.fromNullable(r2.user_limit),	
     rateLimitPerUser: O.fromNullable(r2.rate_limit_per_user), 
     recipients: O.fromNullable(r2.recipients?.map(U.Parseable.from)), 
     icon: O.fromNullable(r2.icon),	
     ownerId: nullableSnowflakeToId(r2.owner_id),
     applicationId: nullableSnowflakeToId(r2.application_id),
     managed:	O.fromNullable(r2.managed),
     parentId:	O.fromNullable(r2.parent_id),
     lastPinTimestamp: O.fromNullable(r2.last_pin_timestamp),
     rtcRegion:	O.fromNullable(r2.rtc_region),
     videoQualityMode: O.fromNullable(r2.video_quality_mode),
     messageCount: O.fromNullable(r2.message_count),
     memberCount: O.fromNullable(r2.member_count),
     threadMetadata:  fp.pipe(O.fromNullable(r2.thread_metadata), O.map(APIThreadMetadataToCore.from)),//a thread metadata object	thread-specific fields not needed by other channels,
     member: O.fromNullable(r2.member),//	a thread member object,
     defaultAutoArchiveDuration: O.fromNullable(r2.default_auto_archive_duration) ,
     permissions: O.fromNullable(r2.permissions),
     totalMessageSent: O.fromNullable(r2.total_message_sent),
     availableTags: O.fromNullable(r2.availible_tags),
     defaultReactionEmoji: O.fromNullable(r2.default_reaction_emoji),
     appliedTags: fp.pipe(r2.applied_tags, O.fromNullable, O.map(A.map(s => new Id(s as Snowflake))) ), 
     defaultThreadRateLimitPerUser: O.fromNullable(r2.default_thread_rate_limit_per_user),
     defaultSortOrder: O.fromNullable(r2.default_sort_order),//	?integer	
     defaultForumLayout: O.fromNullable(r2.default_forum_layout),
   }
}

//TODO: work on type predicates and more specific types

export const Parseable : From1<APIChannel, CoreChannel> = {
    from
}
