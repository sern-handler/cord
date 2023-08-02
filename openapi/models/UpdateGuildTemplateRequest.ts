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
 * @interface UpdateGuildTemplateRequest
 */
export interface UpdateGuildTemplateRequest {
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildTemplateRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildTemplateRequest
     */
    description?: any | null;
}

/**
 * Check if a given object implements the UpdateGuildTemplateRequest interface.
 */
export function instanceOfUpdateGuildTemplateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGuildTemplateRequestFromJSON(json: any): UpdateGuildTemplateRequest {
    return UpdateGuildTemplateRequestFromJSONTyped(json, false);
}

export function UpdateGuildTemplateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGuildTemplateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function UpdateGuildTemplateRequestToJSON(value?: UpdateGuildTemplateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}
