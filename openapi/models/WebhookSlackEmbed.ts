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
 * @interface WebhookSlackEmbed
 */
export interface WebhookSlackEmbed {
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    title?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    titleLink?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    text?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    color?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    ts?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    pretext?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    footer?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    footerIcon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    authorName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    authorLink?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    authorIcon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    imageUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    thumbUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof WebhookSlackEmbed
     */
    fields?: any | null;
}

/**
 * Check if a given object implements the WebhookSlackEmbed interface.
 */
export function instanceOfWebhookSlackEmbed(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookSlackEmbedFromJSON(json: any): WebhookSlackEmbed {
    return WebhookSlackEmbedFromJSONTyped(json, false);
}

export function WebhookSlackEmbedFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookSlackEmbed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'titleLink': !exists(json, 'title_link') ? undefined : json['title_link'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'ts': !exists(json, 'ts') ? undefined : json['ts'],
        'pretext': !exists(json, 'pretext') ? undefined : json['pretext'],
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'footerIcon': !exists(json, 'footer_icon') ? undefined : json['footer_icon'],
        'authorName': !exists(json, 'author_name') ? undefined : json['author_name'],
        'authorLink': !exists(json, 'author_link') ? undefined : json['author_link'],
        'authorIcon': !exists(json, 'author_icon') ? undefined : json['author_icon'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'thumbUrl': !exists(json, 'thumb_url') ? undefined : json['thumb_url'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
    };
}

export function WebhookSlackEmbedToJSON(value?: WebhookSlackEmbed | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'title_link': value.titleLink,
        'text': value.text,
        'color': value.color,
        'ts': value.ts,
        'pretext': value.pretext,
        'footer': value.footer,
        'footer_icon': value.footerIcon,
        'author_name': value.authorName,
        'author_link': value.authorLink,
        'author_icon': value.authorIcon,
        'image_url': value.imageUrl,
        'thumb_url': value.thumbUrl,
        'fields': value.fields,
    };
}
