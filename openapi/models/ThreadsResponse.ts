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
 * @interface ThreadsResponse
 */
export interface ThreadsResponse {
    /**
     * 
     * @type {any}
     * @memberof ThreadsResponse
     */
    threads: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadsResponse
     */
    members: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadsResponse
     */
    hasMore?: any | null;
}

/**
 * Check if a given object implements the ThreadsResponse interface.
 */
export function instanceOfThreadsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "threads" in value;
    isInstance = isInstance && "members" in value;

    return isInstance;
}

export function ThreadsResponseFromJSON(json: any): ThreadsResponse {
    return ThreadsResponseFromJSONTyped(json, false);
}

export function ThreadsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'threads': json['threads'],
        'members': json['members'],
        'hasMore': !exists(json, 'has_more') ? undefined : json['has_more'],
    };
}

export function ThreadsResponseToJSON(value?: ThreadsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'threads': value.threads,
        'members': value.members,
        'has_more': value.hasMore,
    };
}

