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
 * @interface DefaultReactionEmojiResponse
 */
export interface DefaultReactionEmojiResponse {
    /**
     * 
     * @type {any}
     * @memberof DefaultReactionEmojiResponse
     */
    emojiId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DefaultReactionEmojiResponse
     */
    emojiName?: any | null;
}

/**
 * Check if a given object implements the DefaultReactionEmojiResponse interface.
 */
export function instanceOfDefaultReactionEmojiResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DefaultReactionEmojiResponseFromJSON(json: any): DefaultReactionEmojiResponse {
    return DefaultReactionEmojiResponseFromJSONTyped(json, false);
}

export function DefaultReactionEmojiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultReactionEmojiResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emojiId': !exists(json, 'emoji_id') ? undefined : json['emoji_id'],
        'emojiName': !exists(json, 'emoji_name') ? undefined : json['emoji_name'],
    };
}

export function DefaultReactionEmojiResponseToJSON(value?: DefaultReactionEmojiResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emoji_id': value.emojiId,
        'emoji_name': value.emojiName,
    };
}

