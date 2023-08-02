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
 * @interface ResourceChannelResponse
 */
export interface ResourceChannelResponse {
    /**
     * 
     * @type {any}
     * @memberof ResourceChannelResponse
     */
    channelId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ResourceChannelResponse
     */
    title: any | null;
    /**
     * 
     * @type {any}
     * @memberof ResourceChannelResponse
     */
    emoji?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ResourceChannelResponse
     */
    icon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ResourceChannelResponse
     */
    description: any | null;
}

/**
 * Check if a given object implements the ResourceChannelResponse interface.
 */
export function instanceOfResourceChannelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function ResourceChannelResponseFromJSON(json: any): ResourceChannelResponse {
    return ResourceChannelResponseFromJSONTyped(json, false);
}

export function ResourceChannelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceChannelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': json['channel_id'],
        'title': json['title'],
        'emoji': !exists(json, 'emoji') ? undefined : json['emoji'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'description': json['description'],
    };
}

export function ResourceChannelResponseToJSON(value?: ResourceChannelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'title': value.title,
        'emoji': value.emoji,
        'icon': value.icon,
        'description': value.description,
    };
}

