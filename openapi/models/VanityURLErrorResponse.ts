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
 * @interface VanityURLErrorResponse
 */
export interface VanityURLErrorResponse {
    /**
     * 
     * @type {any}
     * @memberof VanityURLErrorResponse
     */
    message: any | null;
    /**
     * 
     * @type {any}
     * @memberof VanityURLErrorResponse
     */
    code: any | null;
}

/**
 * Check if a given object implements the VanityURLErrorResponse interface.
 */
export function instanceOfVanityURLErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function VanityURLErrorResponseFromJSON(json: any): VanityURLErrorResponse {
    return VanityURLErrorResponseFromJSONTyped(json, false);
}

export function VanityURLErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VanityURLErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'code': json['code'],
    };
}

export function VanityURLErrorResponseToJSON(value?: VanityURLErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'code': value.code,
    };
}

