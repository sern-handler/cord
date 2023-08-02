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
 * @interface SetGuildMfaLevelRequest
 */
export interface SetGuildMfaLevelRequest {
    /**
     * 
     * @type {any}
     * @memberof SetGuildMfaLevelRequest
     */
    level: any | null;
}

/**
 * Check if a given object implements the SetGuildMfaLevelRequest interface.
 */
export function instanceOfSetGuildMfaLevelRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "level" in value;

    return isInstance;
}

export function SetGuildMfaLevelRequestFromJSON(json: any): SetGuildMfaLevelRequest {
    return SetGuildMfaLevelRequestFromJSONTyped(json, false);
}

export function SetGuildMfaLevelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetGuildMfaLevelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': json['level'],
    };
}

export function SetGuildMfaLevelRequestToJSON(value?: SetGuildMfaLevelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
    };
}
