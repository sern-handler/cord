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
 * @interface WebhookSourceChannelResponse
 */
export interface WebhookSourceChannelResponse {
    /**
     * 
     * @type {any}
     * @memberof WebhookSourceChannelResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSourceChannelResponse
     */
    name: any | null;
}

/**
 * Check if a given object implements the WebhookSourceChannelResponse interface.
 */
export function instanceOfWebhookSourceChannelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function WebhookSourceChannelResponseFromJSON(json: any): WebhookSourceChannelResponse {
    return WebhookSourceChannelResponseFromJSONTyped(json, false);
}

export function WebhookSourceChannelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookSourceChannelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function WebhookSourceChannelResponseToJSON(value?: WebhookSourceChannelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

