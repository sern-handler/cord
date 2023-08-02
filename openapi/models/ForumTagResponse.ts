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
 * @interface ForumTagResponse
 */
export interface ForumTagResponse {
    /**
     * 
     * @type {any}
     * @memberof ForumTagResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForumTagResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForumTagResponse
     */
    moderated: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForumTagResponse
     */
    emojiId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForumTagResponse
     */
    emojiName?: any | null;
}

/**
 * Check if a given object implements the ForumTagResponse interface.
 */
export function instanceOfForumTagResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "moderated" in value;

    return isInstance;
}

export function ForumTagResponseFromJSON(json: any): ForumTagResponse {
    return ForumTagResponseFromJSONTyped(json, false);
}

export function ForumTagResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForumTagResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'moderated': json['moderated'],
        'emojiId': !exists(json, 'emoji_id') ? undefined : json['emoji_id'],
        'emojiName': !exists(json, 'emoji_name') ? undefined : json['emoji_name'],
    };
}

export function ForumTagResponseToJSON(value?: ForumTagResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'moderated': value.moderated,
        'emoji_id': value.emojiId,
        'emoji_name': value.emojiName,
    };
}

