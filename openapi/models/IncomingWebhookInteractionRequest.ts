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
 * @interface IncomingWebhookInteractionRequest
 */
export interface IncomingWebhookInteractionRequest {
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    content?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    embeds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    allowedMentions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    components?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    attachments?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    tts?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncomingWebhookInteractionRequest
     */
    flags?: any | null;
}

/**
 * Check if a given object implements the IncomingWebhookInteractionRequest interface.
 */
export function instanceOfIncomingWebhookInteractionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IncomingWebhookInteractionRequestFromJSON(json: any): IncomingWebhookInteractionRequest {
    return IncomingWebhookInteractionRequestFromJSONTyped(json, false);
}

export function IncomingWebhookInteractionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingWebhookInteractionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'embeds': !exists(json, 'embeds') ? undefined : json['embeds'],
        'allowedMentions': !exists(json, 'allowed_mentions') ? undefined : json['allowed_mentions'],
        'components': !exists(json, 'components') ? undefined : json['components'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'tts': !exists(json, 'tts') ? undefined : json['tts'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
    };
}

export function IncomingWebhookInteractionRequestToJSON(value?: IncomingWebhookInteractionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'embeds': value.embeds,
        'allowed_mentions': value.allowedMentions,
        'components': value.components,
        'attachments': value.attachments,
        'tts': value.tts,
        'flags': value.flags,
    };
}
