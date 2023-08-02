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
 * @interface MessageAttachmentRequest
 */
export interface MessageAttachmentRequest {
    /**
     * 
     * @type {any}
     * @memberof MessageAttachmentRequest
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageAttachmentRequest
     */
    filename?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageAttachmentRequest
     */
    description?: any | null;
}

/**
 * Check if a given object implements the MessageAttachmentRequest interface.
 */
export function instanceOfMessageAttachmentRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function MessageAttachmentRequestFromJSON(json: any): MessageAttachmentRequest {
    return MessageAttachmentRequestFromJSONTyped(json, false);
}

export function MessageAttachmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageAttachmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function MessageAttachmentRequestToJSON(value?: MessageAttachmentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'filename': value.filename,
        'description': value.description,
    };
}

