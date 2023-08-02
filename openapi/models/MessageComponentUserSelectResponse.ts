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
 * @interface MessageComponentUserSelectResponse
 */
export interface MessageComponentUserSelectResponse {
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    customId: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    placeholder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    minValues?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    maxValues?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageComponentUserSelectResponse
     */
    disabled?: any | null;
}

/**
 * Check if a given object implements the MessageComponentUserSelectResponse interface.
 */
export function instanceOfMessageComponentUserSelectResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "customId" in value;

    return isInstance;
}

export function MessageComponentUserSelectResponseFromJSON(json: any): MessageComponentUserSelectResponse {
    return MessageComponentUserSelectResponseFromJSONTyped(json, false);
}

export function MessageComponentUserSelectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageComponentUserSelectResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'customId': json['custom_id'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'minValues': !exists(json, 'min_values') ? undefined : json['min_values'],
        'maxValues': !exists(json, 'max_values') ? undefined : json['max_values'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
    };
}

export function MessageComponentUserSelectResponseToJSON(value?: MessageComponentUserSelectResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'custom_id': value.customId,
        'placeholder': value.placeholder,
        'min_values': value.minValues,
        'max_values': value.maxValues,
        'disabled': value.disabled,
    };
}
