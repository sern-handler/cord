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
 * @interface RichEmbedVideo
 */
export interface RichEmbedVideo {
    /**
     * 
     * @type {any}
     * @memberof RichEmbedVideo
     */
    url?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbedVideo
     */
    width?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RichEmbedVideo
     */
    height?: any | null;
}

/**
 * Check if a given object implements the RichEmbedVideo interface.
 */
export function instanceOfRichEmbedVideo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RichEmbedVideoFromJSON(json: any): RichEmbedVideo {
    return RichEmbedVideoFromJSONTyped(json, false);
}

export function RichEmbedVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RichEmbedVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function RichEmbedVideoToJSON(value?: RichEmbedVideo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'width': value.width,
        'height': value.height,
    };
}

