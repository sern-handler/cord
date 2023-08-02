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
 * @interface UpdateGuildChannelRequestPartial
 */
export interface UpdateGuildChannelRequestPartial {
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    position?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    topic?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    bitrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    userLimit?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    nsfw?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    rateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    parentId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    permissionOverwrites?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    rtcRegion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    videoQualityMode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    defaultAutoArchiveDuration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    defaultReactionEmoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    defaultThreadRateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    defaultSortOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    defaultForumLayout?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    flags?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildChannelRequestPartial
     */
    availableTags?: any | null;
}

/**
 * Check if a given object implements the UpdateGuildChannelRequestPartial interface.
 */
export function instanceOfUpdateGuildChannelRequestPartial(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGuildChannelRequestPartialFromJSON(json: any): UpdateGuildChannelRequestPartial {
    return UpdateGuildChannelRequestPartialFromJSONTyped(json, false);
}

export function UpdateGuildChannelRequestPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGuildChannelRequestPartial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'userLimit': !exists(json, 'user_limit') ? undefined : json['user_limit'],
        'nsfw': !exists(json, 'nsfw') ? undefined : json['nsfw'],
        'rateLimitPerUser': !exists(json, 'rate_limit_per_user') ? undefined : json['rate_limit_per_user'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'permissionOverwrites': !exists(json, 'permission_overwrites') ? undefined : json['permission_overwrites'],
        'rtcRegion': !exists(json, 'rtc_region') ? undefined : json['rtc_region'],
        'videoQualityMode': !exists(json, 'video_quality_mode') ? undefined : json['video_quality_mode'],
        'defaultAutoArchiveDuration': !exists(json, 'default_auto_archive_duration') ? undefined : json['default_auto_archive_duration'],
        'defaultReactionEmoji': !exists(json, 'default_reaction_emoji') ? undefined : json['default_reaction_emoji'],
        'defaultThreadRateLimitPerUser': !exists(json, 'default_thread_rate_limit_per_user') ? undefined : json['default_thread_rate_limit_per_user'],
        'defaultSortOrder': !exists(json, 'default_sort_order') ? undefined : json['default_sort_order'],
        'defaultForumLayout': !exists(json, 'default_forum_layout') ? undefined : json['default_forum_layout'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
        'availableTags': !exists(json, 'available_tags') ? undefined : json['available_tags'],
    };
}

export function UpdateGuildChannelRequestPartialToJSON(value?: UpdateGuildChannelRequestPartial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'position': value.position,
        'topic': value.topic,
        'bitrate': value.bitrate,
        'user_limit': value.userLimit,
        'nsfw': value.nsfw,
        'rate_limit_per_user': value.rateLimitPerUser,
        'parent_id': value.parentId,
        'permission_overwrites': value.permissionOverwrites,
        'rtc_region': value.rtcRegion,
        'video_quality_mode': value.videoQualityMode,
        'default_auto_archive_duration': value.defaultAutoArchiveDuration,
        'default_reaction_emoji': value.defaultReactionEmoji,
        'default_thread_rate_limit_per_user': value.defaultThreadRateLimitPerUser,
        'default_sort_order': value.defaultSortOrder,
        'default_forum_layout': value.defaultForumLayout,
        'flags': value.flags,
        'available_tags': value.availableTags,
    };
}
