/* tslint:disable */
/* eslint-disable */
/**
 * Discord HTTP API (Preview)
 * Preview of the Discord v10 HTTP API specification. See https://discord.com/developers/docs for more details.
 *
 * The version of the OpenAPI document: 10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GuildChannelResponse
 */
export interface GuildChannelResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    lastMessageId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    flags: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    lastPinTimestamp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    guildId: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    parentId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    rateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    bitrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    userLimit?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    rtcRegion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    videoQualityMode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    permissions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    topic?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    defaultAutoArchiveDuration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    defaultThreadRateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    position: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    permissionOverwrites?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    nsfw?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    availableTags?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    defaultReactionEmoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    defaultSortOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildChannelResponse
     */
    defaultForumLayout?: any | null;
}

/**
 * Check if a given object implements the GuildChannelResponse interface.
 */
export function instanceOfGuildChannelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "guildId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "position" in value;

    return isInstance;
}

export function GuildChannelResponseFromJSON(json: any): GuildChannelResponse {
    return GuildChannelResponseFromJSONTyped(json, false);
}

export function GuildChannelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildChannelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'lastMessageId': !exists(json, 'last_message_id') ? undefined : json['last_message_id'],
        'flags': json['flags'],
        'lastPinTimestamp': !exists(json, 'last_pin_timestamp') ? undefined : json['last_pin_timestamp'],
        'guildId': json['guild_id'],
        'name': json['name'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'rateLimitPerUser': !exists(json, 'rate_limit_per_user') ? undefined : json['rate_limit_per_user'],
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'userLimit': !exists(json, 'user_limit') ? undefined : json['user_limit'],
        'rtcRegion': !exists(json, 'rtc_region') ? undefined : json['rtc_region'],
        'videoQualityMode': !exists(json, 'video_quality_mode') ? undefined : json['video_quality_mode'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'defaultAutoArchiveDuration': !exists(json, 'default_auto_archive_duration') ? undefined : json['default_auto_archive_duration'],
        'defaultThreadRateLimitPerUser': !exists(json, 'default_thread_rate_limit_per_user') ? undefined : json['default_thread_rate_limit_per_user'],
        'position': json['position'],
        'permissionOverwrites': !exists(json, 'permission_overwrites') ? undefined : json['permission_overwrites'],
        'nsfw': !exists(json, 'nsfw') ? undefined : json['nsfw'],
        'availableTags': !exists(json, 'available_tags') ? undefined : json['available_tags'],
        'defaultReactionEmoji': !exists(json, 'default_reaction_emoji') ? undefined : json['default_reaction_emoji'],
        'defaultSortOrder': !exists(json, 'default_sort_order') ? undefined : json['default_sort_order'],
        'defaultForumLayout': !exists(json, 'default_forum_layout') ? undefined : json['default_forum_layout'],
    };
}

export function GuildChannelResponseToJSON(value?: GuildChannelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'last_message_id': value.lastMessageId,
        'flags': value.flags,
        'last_pin_timestamp': value.lastPinTimestamp,
        'guild_id': value.guildId,
        'name': value.name,
        'parent_id': value.parentId,
        'rate_limit_per_user': value.rateLimitPerUser,
        'bitrate': value.bitrate,
        'user_limit': value.userLimit,
        'rtc_region': value.rtcRegion,
        'video_quality_mode': value.videoQualityMode,
        'permissions': value.permissions,
        'topic': value.topic,
        'default_auto_archive_duration': value.defaultAutoArchiveDuration,
        'default_thread_rate_limit_per_user': value.defaultThreadRateLimitPerUser,
        'position': value.position,
        'permission_overwrites': value.permissionOverwrites,
        'nsfw': value.nsfw,
        'available_tags': value.availableTags,
        'default_reaction_emoji': value.defaultReactionEmoji,
        'default_sort_order': value.defaultSortOrder,
        'default_forum_layout': value.defaultForumLayout,
    };
}

