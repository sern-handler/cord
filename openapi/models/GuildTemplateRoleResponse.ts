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
 * @interface GuildTemplateRoleResponse
 */
export interface GuildTemplateRoleResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    permissions: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    color: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    hoist: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    mentionable: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    icon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildTemplateRoleResponse
     */
    unicodeEmoji?: any | null;
}

/**
 * Check if a given object implements the GuildTemplateRoleResponse interface.
 */
export function instanceOfGuildTemplateRoleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "hoist" in value;
    isInstance = isInstance && "mentionable" in value;

    return isInstance;
}

export function GuildTemplateRoleResponseFromJSON(json: any): GuildTemplateRoleResponse {
    return GuildTemplateRoleResponseFromJSONTyped(json, false);
}

export function GuildTemplateRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildTemplateRoleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'permissions': json['permissions'],
        'color': json['color'],
        'hoist': json['hoist'],
        'mentionable': json['mentionable'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'unicodeEmoji': !exists(json, 'unicode_emoji') ? undefined : json['unicode_emoji'],
    };
}

export function GuildTemplateRoleResponseToJSON(value?: GuildTemplateRoleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'permissions': value.permissions,
        'color': value.color,
        'hoist': value.hoist,
        'mentionable': value.mentionable,
        'icon': value.icon,
        'unicode_emoji': value.unicodeEmoji,
    };
}

