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
 * @interface RichEmbedAuthor
 */
export interface RichEmbedAuthor {
    /**
     * 
     * @type {any}
     * @memberof RichEmbedAuthor
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbedAuthor
     */
    url?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbedAuthor
     */
    iconUrl?: any | null;
}

/**
 * Check if a given object implements the RichEmbedAuthor interface.
 */
export function instanceOfRichEmbedAuthor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RichEmbedAuthorFromJSON(json: any): RichEmbedAuthor {
    return RichEmbedAuthorFromJSONTyped(json, false);
}

export function RichEmbedAuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RichEmbedAuthor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'iconUrl': !exists(json, 'icon_url') ? undefined : json['icon_url'],
    };
}

export function RichEmbedAuthorToJSON(value?: RichEmbedAuthor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'icon_url': value.iconUrl,
    };
}

