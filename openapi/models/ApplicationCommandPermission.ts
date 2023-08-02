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
 * @interface ApplicationCommandPermission
 */
export interface ApplicationCommandPermission {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandPermission
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandPermission
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandPermission
     */
    permission: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandPermission interface.
 */
export function instanceOfApplicationCommandPermission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "permission" in value;

    return isInstance;
}

export function ApplicationCommandPermissionFromJSON(json: any): ApplicationCommandPermission {
    return ApplicationCommandPermissionFromJSONTyped(json, false);
}

export function ApplicationCommandPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'permission': json['permission'],
    };
}

export function ApplicationCommandPermissionToJSON(value?: ApplicationCommandPermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'permission': value.permission,
    };
}
