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
 * @interface GuildRoleResponse
 */
export interface GuildRoleResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    permissions: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    position: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    color: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    hoist: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    managed: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    mentionable: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    icon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    unicodeEmoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildRoleResponse
     */
    tags?: any | null;
}

/**
 * Check if a given object implements the GuildRoleResponse interface.
 */
export function instanceOfGuildRoleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "position" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "hoist" in value;
    isInstance = isInstance && "managed" in value;
    isInstance = isInstance && "mentionable" in value;

    return isInstance;
}

export function GuildRoleResponseFromJSON(json: any): GuildRoleResponse {
    return GuildRoleResponseFromJSONTyped(json, false);
}

export function GuildRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildRoleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'permissions': json['permissions'],
        'position': json['position'],
        'color': json['color'],
        'hoist': json['hoist'],
        'managed': json['managed'],
        'mentionable': json['mentionable'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'unicodeEmoji': !exists(json, 'unicode_emoji') ? undefined : json['unicode_emoji'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function GuildRoleResponseToJSON(value?: GuildRoleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'permissions': value.permissions,
        'position': value.position,
        'color': value.color,
        'hoist': value.hoist,
        'managed': value.managed,
        'mentionable': value.mentionable,
        'icon': value.icon,
        'unicode_emoji': value.unicodeEmoji,
        'tags': value.tags,
    };
}
