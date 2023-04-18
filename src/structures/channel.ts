import { Item, Snowflake } from "./common";
import * as O from 'fp-ts/Option'
import * as U from './user'
import { Id, nullableSnowflakeToId } from "./id";
import * as fp from 'fp-ts/function'
import * as A from 'fp-ts/Array'
import { From } from "../types/parseable";
export enum ChannelType {
	/**
	 * A text channel within a guild
	 */
	GuildText,
	/**
	 * A direct message between users
	 */
	DM,
	/**
	 * A voice channel within a guild
	 */
	GuildVoice,
	/**
	 * A direct message between multiple users
	 */
	GroupDM,
	/**
	 * An organizational category that contains up to 50 channels
	 *
	 * See https://support.discord.com/hc/articles/115001580171
	 */
	GuildCategory,
	/**
	 * A channel that users can follow and crosspost into their own guild
	 *
	 * See https://support.discord.com/hc/articles/360032008192
	 */
	GuildAnnouncement,
	/**
	 * A temporary sub-channel within a Guild Announcement channel
	 */
	AnnouncementThread = 10,
	/**
	 * A temporary sub-channel within a Guild Text or Guild Forum channel
	 */
	PublicThread,
	/**
	 * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
	 */
	PrivateThread,
	/**
	 * A voice channel for hosting events with an audience
	 *
	 * See https://support.discord.com/hc/articles/1500005513722
	 */
	GuildStageVoice,
	/**
	 * The channel in a Student Hub containing the listed servers
	 *
	 * See https://support.discord.com/hc/articles/4406046651927
	 */
	GuildDirectory,
	/**
	 * A channel that can only contain threads
	 */
	GuildForum,

	// EVERYTHING BELOW THIS LINE SHOULD BE OLD NAMES FOR RENAMED ENUM MEMBERS //

	/**
	 * A channel that users can follow and crosspost into their own guild
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#GuildAnnouncement}
	 *
	 * See https://support.discord.com/hc/articles/360032008192
	 */
	GuildNews = 5,
	/**
	 * A temporary sub-channel within a Guild Announcement channel
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#AnnouncementThread}
	 */
	GuildNewsThread = 10,
	/**
	 * A temporary sub-channel within a Guild Text channel
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#PublicThread}
	 */
	GuildPublicThread = 11,
	/**
	 * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#PrivateThread}
	 */
	GuildPrivateThread = 12,
}

export interface RawChannel extends Item {
    type: ChannelType
    name?: string | null;
    guild_id?: Snowflake//	the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
    position?:	number// sorting position of the channel
    //permission_overwrites?:	array of overwrite objects	explicit permission overwrites for members and roles
    topic?:	string	//the channel topic (0-4096 characters for GUILD_FORUM channels, 0-1024 characters for all others)
    nsfw?:	boolean	//whether the channel is nsfw
    last_message_id?:	Snowflake//	the id of the last message sent in this channel (or thread for GUILD_FORUM channels) (may not point to an existing or valid message or thread)
    bitrate?: number	//the bitrate (in bits) of the voice channel
    user_limit?: number	//integer	the user limit of the voice channel
    rate_limit_per_user?: number //*	integer	amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
    recipients?: U.RawUser[] //	array of user objects	the recipients of the DM
    icon?:	string	//icon hash of the group DM
    owner_id?:	Snowflake//	id of the creator of the group DM or thread
    application_id?:	Snowflake//	application id of the group DM creator if it is bot-created
    managed?:	boolean//	for group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
    parent_id?:	Snowflake// ?Snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
    last_pin_timestamp?: string	//?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
    rtc_region?:	string	// ?string voice region id for the voice channel, automatic when set to null
    video_quality_mode?: number//	the camera video quality mode of the voice channel, 1 when not present
    message_count?: number //**	integer	number of messages (not including the initial message or deleted messages) in a thread.
    member_count?: number	//integer	an approximate count of users in a thread, stops counting at 50
    //thread_metadata?: 	a thread metadata object	thread-specific fields not needed by other channels
    //member?:	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
    default_auto_archive_duration?: number //	integer	default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
    permissions?:   string//	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction
    flags?: number //	integer	channel flags combined as a bitfield
    total_message_sent?: number //integer	number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
    //available_tags?	array of tag objects	the set of tags that can be used in a GUILD_FORUM channel
    applied_tags?: Snowflake[]	//array of snowflakes	the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel
    //default_reaction_emoji?	?default reaction object	the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel
    default_thread_rate_limit_per_user?: number//	the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
    default_sort_order?: number//	?integer	the default sort order type used to order posts in GUILD_FORUM channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
    default_forum_layout?: number //	integer	the default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
}
export interface CoreChannel {
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
    parentId:	O.Option<Snowflake>// ?Snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
    lastPinTimestamp: O.Option<string>	//?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
    rtcRegion:	O.Option<string>	// ?string voice region id for the voice channel, automatic when set to null
    videoQualityMode: O.Option<number>//	the camera video quality mode of the voice channel, 1 when not present
    messageCount: O.Option<number> //**	integer	number of messages (not including the initial message or deleted messages) in a thread.
    memberCount: O.Option<number>//integer	an approximate count of users in a thread, stops counting at 50
    //thread_metadata?: 	a thread metadata object	thread-specific fields not needed by other channels
    //member?:	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
    defaultAutoArchiveDuration: O.Option<number> //	integer	default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
    permissions: O.Option<string>//	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction
    flags: O.Option<number> //	integer	channel flags combined as a bitfield
    totalMessageSent: O.Option<number> //integer	number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
    //available_tags?	array of tag objects	the set of tags that can be used in a GUILD_FORUM channel
    appliedTags?: O.Option<Id[]>	//array of snowflakes	the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM channel
    //default_reaction_emoji?	?default reaction object	the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel
    defaultThreadRateLimitPerUser: O.Option<number>//	the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
    defaultSortOrder: O.Option<number>//	?integer	the default sort order type used to order posts in GUILD_FORUM channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
    defaultForumLayout: O.Option<number> //	integer	the default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin

}


interface GuildTextChannel extends CoreChannel {
    type: ChannelType.GuildText
    name: O.Some<string>
    
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

export function from(r: RawChannel): CoreChannel {
   return {
     type: r.type,
     name: O.fromNullable(r.name),
     guildId: nullableSnowflakeToId(r.guild_id),
     position:	O.fromNullable(r.position),
    //permission_overwrites?:	array of overwrite objects	explicit permission overwrites for members and roles
     topic: O.fromNullable(r.topic),
     nsfw: O.fromNullable(r.nsfw),
     lastMessageId: nullableSnowflakeToId(r.last_message_id),
     bitrate: O.fromNullable(r.bitrate),	
     userLimit: O.fromNullable(r.user_limit),	
     rateLimitPerUser: O.fromNullable(r.rate_limit_per_user), 
     recipients: O.fromNullable(r.recipients?.map(U.Parseable.from)), 
     icon: O.fromNullable(r.icon),	
     ownerId: nullableSnowflakeToId(r.owner_id),
     applicationId: nullableSnowflakeToId(r.application_id),
     managed:	O.fromNullable(r.managed),
     parentId:	O.fromNullable(r.parent_id),
     lastPinTimestamp: O.fromNullable(r.last_pin_timestamp),
     rtcRegion:	O.fromNullable(r.rtc_region),
     videoQualityMode: O.fromNullable(r.video_quality_mode),
     messageCount: O.fromNullable(r.message_count),
     memberCount: O.fromNullable(r.member_count),
     //thread_metadata?: 	a thread metadata object	thread-specific fields not needed by other channels,
     //member?:	a thread member object	,
     defaultAutoArchiveDuration: O.fromNullable(r.default_auto_archive_duration) ,
     permissions: O.fromNullable(r.permissions),
     flags: O.fromNullable(r.flags) ,
     totalMessageSent: O.fromNullable(r.total_message_sent),
     //available_tags?	,
     appliedTags: fp.pipe(r.applied_tags, O.fromNullable, O.map(A.map(s => new Id(s))) ), 
     //default_reaction_emoji?	?default reaction object	,
     defaultThreadRateLimitPerUser: O.fromNullable(r.default_thread_rate_limit_per_user),
     defaultSortOrder: O.fromNullable(r.default_sort_order),//	?integer	
     defaultForumLayout: O.fromNullable(r.default_forum_layout),
   }
}

//TODO: work on type predicates and more specific types

export const Parseable : From<RawChannel, CoreChannel> = {
    from
}
