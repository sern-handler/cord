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
 * @interface ApplicationCommandResponse
 */
export interface ApplicationCommandResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    applicationId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    version: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    defaultMemberPermissions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    nameLocalized?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandResponse
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    description: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    descriptionLocalized?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandResponse
     */
    descriptionLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    guildId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    dmPermission?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    options?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandResponse
     */
    nsfw?: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandResponse interface.
 */
export function instanceOfApplicationCommandResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "applicationId" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function ApplicationCommandResponseFromJSON(json: any): ApplicationCommandResponse {
    return ApplicationCommandResponseFromJSONTyped(json, false);
}

export function ApplicationCommandResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'applicationId': json['application_id'],
        'version': json['version'],
        'defaultMemberPermissions': !exists(json, 'default_member_permissions') ? undefined : json['default_member_permissions'],
        'type': json['type'],
        'name': json['name'],
        'nameLocalized': !exists(json, 'name_localized') ? undefined : json['name_localized'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'description': json['description'],
        'descriptionLocalized': !exists(json, 'description_localized') ? undefined : json['description_localized'],
        'descriptionLocalizations': !exists(json, 'description_localizations') ? undefined : json['description_localizations'],
        'guildId': !exists(json, 'guild_id') ? undefined : json['guild_id'],
        'dmPermission': !exists(json, 'dm_permission') ? undefined : json['dm_permission'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'nsfw': !exists(json, 'nsfw') ? undefined : json['nsfw'],
    };
}

export function ApplicationCommandResponseToJSON(value?: ApplicationCommandResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'application_id': value.applicationId,
        'version': value.version,
        'default_member_permissions': value.defaultMemberPermissions,
        'type': value.type,
        'name': value.name,
        'name_localized': value.nameLocalized,
        'name_localizations': value.nameLocalizations,
        'description': value.description,
        'description_localized': value.descriptionLocalized,
        'description_localizations': value.descriptionLocalizations,
        'guild_id': value.guildId,
        'dm_permission': value.dmPermission,
        'options': value.options,
        'nsfw': value.nsfw,
    };
}

