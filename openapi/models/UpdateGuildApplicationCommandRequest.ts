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
 * @interface UpdateGuildApplicationCommandRequest
 */
export interface UpdateGuildApplicationCommandRequest {
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    name?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    description?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    descriptionLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    options?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    defaultMemberPermissions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildApplicationCommandRequest
     */
    dmPermission?: any | null;
}

/**
 * Check if a given object implements the UpdateGuildApplicationCommandRequest interface.
 */
export function instanceOfUpdateGuildApplicationCommandRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGuildApplicationCommandRequestFromJSON(json: any): UpdateGuildApplicationCommandRequest {
    return UpdateGuildApplicationCommandRequestFromJSONTyped(json, false);
}

export function UpdateGuildApplicationCommandRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGuildApplicationCommandRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'descriptionLocalizations': !exists(json, 'description_localizations') ? undefined : json['description_localizations'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'defaultMemberPermissions': !exists(json, 'default_member_permissions') ? undefined : json['default_member_permissions'],
        'dmPermission': !exists(json, 'dm_permission') ? undefined : json['dm_permission'],
    };
}

export function UpdateGuildApplicationCommandRequestToJSON(value?: UpdateGuildApplicationCommandRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'name_localizations': value.nameLocalizations,
        'description': value.description,
        'description_localizations': value.descriptionLocalizations,
        'options': value.options,
        'default_member_permissions': value.defaultMemberPermissions,
        'dm_permission': value.dmPermission,
    };
}

