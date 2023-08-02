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
 * @interface SetChannelPermissionOverwriteRequest
 */
export interface SetChannelPermissionOverwriteRequest {
    /**
     * 
     * @type {any}
     * @memberof SetChannelPermissionOverwriteRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SetChannelPermissionOverwriteRequest
     */
    allow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SetChannelPermissionOverwriteRequest
     */
    deny?: any | null;
}

/**
 * Check if a given object implements the SetChannelPermissionOverwriteRequest interface.
 */
export function instanceOfSetChannelPermissionOverwriteRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SetChannelPermissionOverwriteRequestFromJSON(json: any): SetChannelPermissionOverwriteRequest {
    return SetChannelPermissionOverwriteRequestFromJSONTyped(json, false);
}

export function SetChannelPermissionOverwriteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetChannelPermissionOverwriteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'allow': !exists(json, 'allow') ? undefined : json['allow'],
        'deny': !exists(json, 'deny') ? undefined : json['deny'],
    };
}

export function SetChannelPermissionOverwriteRequestToJSON(value?: SetChannelPermissionOverwriteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'allow': value.allow,
        'deny': value.deny,
    };
}

