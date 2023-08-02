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
 * @interface MessageEmbedResponse
 */
export interface MessageEmbedResponse {
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    url?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    title?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    color?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    timestamp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    fields?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    author?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    provider?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    thumbnail?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    video?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageEmbedResponse
     */
    footer?: any | null;
}

/**
 * Check if a given object implements the MessageEmbedResponse interface.
 */
export function instanceOfMessageEmbedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MessageEmbedResponseFromJSON(json: any): MessageEmbedResponse {
    return MessageEmbedResponseFromJSONTyped(json, false);
}

export function MessageEmbedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageEmbedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : json['thumbnail'],
        'video': !exists(json, 'video') ? undefined : json['video'],
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
    };
}

export function MessageEmbedResponseToJSON(value?: MessageEmbedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'url': value.url,
        'title': value.title,
        'description': value.description,
        'color': value.color,
        'timestamp': value.timestamp,
        'fields': value.fields,
        'author': value.author,
        'provider': value.provider,
        'image': value.image,
        'thumbnail': value.thumbnail,
        'video': value.video,
        'footer': value.footer,
    };
}
