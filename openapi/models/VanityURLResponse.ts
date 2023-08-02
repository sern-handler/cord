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
 * @interface VanityURLResponse
 */
export interface VanityURLResponse {
    /**
     * 
     * @type {any}
     * @memberof VanityURLResponse
     */
    code?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VanityURLResponse
     */
    uses: any | null;
    /**
     * 
     * @type {any}
     * @memberof VanityURLResponse
     */
    error?: any | null;
}

/**
 * Check if a given object implements the VanityURLResponse interface.
 */
export function instanceOfVanityURLResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uses" in value;

    return isInstance;
}

export function VanityURLResponseFromJSON(json: any): VanityURLResponse {
    return VanityURLResponseFromJSONTyped(json, false);
}

export function VanityURLResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VanityURLResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'uses': json['uses'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function VanityURLResponseToJSON(value?: VanityURLResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'uses': value.uses,
        'error': value.error,
    };
}
