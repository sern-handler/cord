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
 * @interface ApplicationUserRoleConnectionResponse
 */
export interface ApplicationUserRoleConnectionResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationUserRoleConnectionResponse
     */
    platformName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationUserRoleConnectionResponse
     */
    platformUsername?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationUserRoleConnectionResponse
     */
    metadata?: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the ApplicationUserRoleConnectionResponse interface.
 */
export function instanceOfApplicationUserRoleConnectionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationUserRoleConnectionResponseFromJSON(json: any): ApplicationUserRoleConnectionResponse {
    return ApplicationUserRoleConnectionResponseFromJSONTyped(json, false);
}

export function ApplicationUserRoleConnectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserRoleConnectionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platformName': !exists(json, 'platform_name') ? undefined : json['platform_name'],
        'platformUsername': !exists(json, 'platform_username') ? undefined : json['platform_username'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ApplicationUserRoleConnectionResponseToJSON(value?: ApplicationUserRoleConnectionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform_name': value.platformName,
        'platform_username': value.platformUsername,
        'metadata': value.metadata,
    };
}

