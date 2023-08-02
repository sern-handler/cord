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
 * @interface MessageAllowedMentionsRequest
 */
export interface MessageAllowedMentionsRequest {
    /**
     * 
     * @type {any}
     * @memberof MessageAllowedMentionsRequest
     */
    parse?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageAllowedMentionsRequest
     */
    users?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageAllowedMentionsRequest
     */
    roles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageAllowedMentionsRequest
     */
    repliedUser?: any | null;
}

/**
 * Check if a given object implements the MessageAllowedMentionsRequest interface.
 */
export function instanceOfMessageAllowedMentionsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageAllowedMentionsRequestFromJSON(json: any): MessageAllowedMentionsRequest {
    return MessageAllowedMentionsRequestFromJSONTyped(json, false);
}

export function MessageAllowedMentionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageAllowedMentionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parse': !exists(json, 'parse') ? undefined : json['parse'],
        'users': !exists(json, 'users') ? undefined : json['users'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'repliedUser': !exists(json, 'replied_user') ? undefined : json['replied_user'],
    };
}

export function MessageAllowedMentionsRequestToJSON(value?: MessageAllowedMentionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parse': value.parse,
        'users': value.users,
        'roles': value.roles,
        'replied_user': value.repliedUser,
    };
}

