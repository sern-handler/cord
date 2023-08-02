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
 * @interface GuildTemplateChannelResponse
 */
export interface GuildTemplateChannelResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    position?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    topic?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    bitrate: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    userLimit: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    nsfw: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    rateLimitPerUser: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    parentId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    defaultAutoArchiveDuration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    permissionOverwrites: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    availableTags?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    template: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    defaultReactionEmoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    defaultThreadRateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    defaultSortOrder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    defaultForumLayout?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    iconEmoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateChannelResponse
     */
    themeColor?: any | null;
}

/**
 * Check if a given object implements the GuildTemplateChannelResponse interface.
 */
export function instanceOfGuildTemplateChannelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "bitrate" in value;
    isInstance = isInstance && "userLimit" in value;
    isInstance = isInstance && "nsfw" in value;
    isInstance = isInstance && "rateLimitPerUser" in value;
    isInstance = isInstance && "permissionOverwrites" in value;
    isInstance = isInstance && "template" in value;

    return isInstance;
}

export function GuildTemplateChannelResponseFromJSON(json: any): GuildTemplateChannelResponse {
    return GuildTemplateChannelResponseFromJSONTyped(json, false);
}

export function GuildTemplateChannelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildTemplateChannelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'bitrate': json['bitrate'],
        'userLimit': json['user_limit'],
        'nsfw': json['nsfw'],
        'rateLimitPerUser': json['rate_limit_per_user'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'defaultAutoArchiveDuration': !exists(json, 'default_auto_archive_duration') ? undefined : json['default_auto_archive_duration'],
        'permissionOverwrites': json['permission_overwrites'],
        'availableTags': !exists(json, 'available_tags') ? undefined : json['available_tags'],
        'template': json['template'],
        'defaultReactionEmoji': !exists(json, 'default_reaction_emoji') ? undefined : json['default_reaction_emoji'],
        'defaultThreadRateLimitPerUser': !exists(json, 'default_thread_rate_limit_per_user') ? undefined : json['default_thread_rate_limit_per_user'],
        'defaultSortOrder': !exists(json, 'default_sort_order') ? undefined : json['default_sort_order'],
        'defaultForumLayout': !exists(json, 'default_forum_layout') ? undefined : json['default_forum_layout'],
        'iconEmoji': !exists(json, 'icon_emoji') ? undefined : json['icon_emoji'],
        'themeColor': !exists(json, 'theme_color') ? undefined : json['theme_color'],
    };
}

export function GuildTemplateChannelResponseToJSON(value?: GuildTemplateChannelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'name': value.name,
        'position': value.position,
        'topic': value.topic,
        'bitrate': value.bitrate,
        'user_limit': value.userLimit,
        'nsfw': value.nsfw,
        'rate_limit_per_user': value.rateLimitPerUser,
        'parent_id': value.parentId,
        'default_auto_archive_duration': value.defaultAutoArchiveDuration,
        'permission_overwrites': value.permissionOverwrites,
        'available_tags': value.availableTags,
        'template': value.template,
        'default_reaction_emoji': value.defaultReactionEmoji,
        'default_thread_rate_limit_per_user': value.defaultThreadRateLimitPerUser,
        'default_sort_order': value.defaultSortOrder,
        'default_forum_layout': value.defaultForumLayout,
        'icon_emoji': value.iconEmoji,
        'theme_color': value.themeColor,
    };
}
