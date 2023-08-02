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
 * @interface WelcomeMessageResponse
 */
export interface WelcomeMessageResponse {
    /**
     * 
     * @type {any}
     * @memberof WelcomeMessageResponse
     */
    authorIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof WelcomeMessageResponse
     */
    message: any | null;
}

/**
 * Check if a given object implements the WelcomeMessageResponse interface.
 */
export function instanceOfWelcomeMessageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "authorIds" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function WelcomeMessageResponseFromJSON(json: any): WelcomeMessageResponse {
    return WelcomeMessageResponseFromJSONTyped(json, false);
}

export function WelcomeMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorIds': json['author_ids'],
        'message': json['message'],
    };
}

export function WelcomeMessageResponseToJSON(value?: WelcomeMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author_ids': value.authorIds,
        'message': value.message,
    };
}
