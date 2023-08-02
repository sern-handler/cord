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
 * @interface ConnectedAccountGuildResponse
 */
export interface ConnectedAccountGuildResponse {
    /**
     * 
     * @type {any}
     * @memberof ConnectedAccountGuildResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConnectedAccountGuildResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConnectedAccountGuildResponse
     */
    icon?: any | null;
}

/**
 * Check if a given object implements the ConnectedAccountGuildResponse interface.
 */
export function instanceOfConnectedAccountGuildResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ConnectedAccountGuildResponseFromJSON(json: any): ConnectedAccountGuildResponse {
    return ConnectedAccountGuildResponseFromJSONTyped(json, false);
}

export function ConnectedAccountGuildResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectedAccountGuildResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function ConnectedAccountGuildResponseToJSON(value?: ConnectedAccountGuildResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'icon': value.icon,
    };
}

