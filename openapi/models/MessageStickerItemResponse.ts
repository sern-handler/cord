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
 * @interface MessageStickerItemResponse
 */
export interface MessageStickerItemResponse {
    /**
     * 
     * @type {any}
     * @memberof MessageStickerItemResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageStickerItemResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageStickerItemResponse
     */
    formatType: any | null;
}

/**
 * Check if a given object implements the MessageStickerItemResponse interface.
 */
export function instanceOfMessageStickerItemResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "formatType" in value;

    return isInstance;
}

export function MessageStickerItemResponseFromJSON(json: any): MessageStickerItemResponse {
    return MessageStickerItemResponseFromJSONTyped(json, false);
}

export function MessageStickerItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageStickerItemResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'formatType': json['format_type'],
    };
}

export function MessageStickerItemResponseToJSON(value?: MessageStickerItemResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'format_type': value.formatType,
    };
}
