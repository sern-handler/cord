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
 * @interface MessageEditRequestPartial
 */
export interface MessageEditRequestPartial {
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    content?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    embeds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    flags?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    allowedMentions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    stickerIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    components?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEditRequestPartial
     */
    attachments?: any | null;
}

/**
 * Check if a given object implements the MessageEditRequestPartial interface.
 */
export function instanceOfMessageEditRequestPartial(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageEditRequestPartialFromJSON(json: any): MessageEditRequestPartial {
    return MessageEditRequestPartialFromJSONTyped(json, false);
}

export function MessageEditRequestPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageEditRequestPartial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'embeds': !exists(json, 'embeds') ? undefined : json['embeds'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
        'allowedMentions': !exists(json, 'allowed_mentions') ? undefined : json['allowed_mentions'],
        'stickerIds': !exists(json, 'sticker_ids') ? undefined : json['sticker_ids'],
        'components': !exists(json, 'components') ? undefined : json['components'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
    };
}

export function MessageEditRequestPartialToJSON(value?: MessageEditRequestPartial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'embeds': value.embeds,
        'flags': value.flags,
        'allowed_mentions': value.allowedMentions,
        'sticker_ids': value.stickerIds,
        'components': value.components,
        'attachments': value.attachments,
    };
}

