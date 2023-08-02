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
import type { GithubUser } from './GithubUser';
import {
    GithubUserFromJSON,
    GithubUserFromJSONTyped,
    GithubUserToJSON,
} from './GithubUser';

/**
 * 
 * @export
 * @interface GithubComment
 */
export interface GithubComment {
    /**
     * 
     * @type {any}
     * @memberof GithubComment
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof GithubComment
     */
    htmlUrl: any | null;
    /**
     * 
     * @type {GithubUser}
     * @memberof GithubComment
     */
    user: GithubUser;
    /**
     * 
     * @type {any}
     * @memberof GithubComment
     */
    commitId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GithubComment
     */
    body: any | null;
}

/**
 * Check if a given object implements the GithubComment interface.
 */
export function instanceOfGithubComment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "htmlUrl" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "body" in value;

    return isInstance;
}

export function GithubCommentFromJSON(json: any): GithubComment {
    return GithubCommentFromJSONTyped(json, false);
}

export function GithubCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): GithubComment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'htmlUrl': json['html_url'],
        'user': GithubUserFromJSON(json['user']),
        'commitId': !exists(json, 'commit_id') ? undefined : json['commit_id'],
        'body': json['body'],
    };
}

export function GithubCommentToJSON(value?: GithubComment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'html_url': value.htmlUrl,
        'user': GithubUserToJSON(value.user),
        'commit_id': value.commitId,
        'body': value.body,
    };
}
