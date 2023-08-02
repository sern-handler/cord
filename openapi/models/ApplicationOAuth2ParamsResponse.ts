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
 * @interface ApplicationOAuth2ParamsResponse
 */
export interface ApplicationOAuth2ParamsResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationOAuth2ParamsResponse
     */
    scopes: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationOAuth2ParamsResponse
     */
    permissions: any | null;
}

/**
 * Check if a given object implements the ApplicationOAuth2ParamsResponse interface.
 */
export function instanceOfApplicationOAuth2ParamsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "scopes" in value;
    isInstance = isInstance && "permissions" in value;

    return isInstance;
}

export function ApplicationOAuth2ParamsResponseFromJSON(json: any): ApplicationOAuth2ParamsResponse {
    return ApplicationOAuth2ParamsResponseFromJSONTyped(json, false);
}

export function ApplicationOAuth2ParamsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationOAuth2ParamsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scopes': json['scopes'],
        'permissions': json['permissions'],
    };
}

export function ApplicationOAuth2ParamsResponseToJSON(value?: ApplicationOAuth2ParamsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scopes': value.scopes,
        'permissions': value.permissions,
    };
}

