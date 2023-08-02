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
 * @interface MessageComponentButtonResponse
 */
export interface MessageComponentButtonResponse {
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    customId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    style: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    label?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    disabled?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    emoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentButtonResponse
     */
    url?: any | null;
}

/**
 * Check if a given object implements the MessageComponentButtonResponse interface.
 */
export function instanceOfMessageComponentButtonResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "style" in value;

    return isInstance;
}

export function MessageComponentButtonResponseFromJSON(json: any): MessageComponentButtonResponse {
    return MessageComponentButtonResponseFromJSONTyped(json, false);
}

export function MessageComponentButtonResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageComponentButtonResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'customId': !exists(json, 'custom_id') ? undefined : json['custom_id'],
        'style': json['style'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'emoji': !exists(json, 'emoji') ? undefined : json['emoji'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function MessageComponentButtonResponseToJSON(value?: MessageComponentButtonResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'custom_id': value.customId,
        'style': value.style,
        'label': value.label,
        'disabled': value.disabled,
        'emoji': value.emoji,
        'url': value.url,
    };
}
