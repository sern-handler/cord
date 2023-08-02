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
 * @interface GithubAuthor
 */
export interface GithubAuthor {
    /**
     * 
     * @type {any}
     * @memberof GithubAuthor
     */
    username?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GithubAuthor
     */
    name: any | null;
}

/**
 * Check if a given object implements the GithubAuthor interface.
 */
export function instanceOfGithubAuthor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GithubAuthorFromJSON(json: any): GithubAuthor {
    return GithubAuthorFromJSONTyped(json, false);
}

export function GithubAuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GithubAuthor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'name': json['name'],
    };
}

export function GithubAuthorToJSON(value?: GithubAuthor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'name': value.name,
    };
}

