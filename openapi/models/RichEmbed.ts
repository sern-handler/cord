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
 * @interface RichEmbed
 */
export interface RichEmbed {
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    url?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    title?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    color?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    timestamp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    author?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    thumbnail?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    footer?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    fields?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    provider?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbed
     */
    video?: any | null;
}

/**
 * Check if a given object implements the RichEmbed interface.
 */
export function instanceOfRichEmbed(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RichEmbedFromJSON(json: any): RichEmbed {
    return RichEmbedFromJSONTyped(json, false);
}

export function RichEmbedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RichEmbed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : json['thumbnail'],
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'video': !exists(json, 'video') ? undefined : json['video'],
    };
}

export function RichEmbedToJSON(value?: RichEmbed | null): any {
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
        'color': value.color,
        'timestamp': value.timestamp,
        'description': value.description,
        'author': value.author,
        'image': value.image,
        'thumbnail': value.thumbnail,
        'footer': value.footer,
        'fields': value.fields,
        'provider': value.provider,
        'video': value.video,
    };
}

