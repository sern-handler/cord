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
import type { UserCommunicationDisabledActionMetadataResponse } from './UserCommunicationDisabledActionMetadataResponse';
import {
    UserCommunicationDisabledActionMetadataResponseFromJSON,
    UserCommunicationDisabledActionMetadataResponseFromJSONTyped,
    UserCommunicationDisabledActionMetadataResponseToJSON,
} from './UserCommunicationDisabledActionMetadataResponse';

/**
 * 
 * @export
 * @interface UserCommunicationDisabledActionResponse
 */
export interface UserCommunicationDisabledActionResponse {
    /**
     * 
     * @type {any}
     * @memberof UserCommunicationDisabledActionResponse
     */
    type: any | null;
    /**
     * 
     * @type {UserCommunicationDisabledActionMetadataResponse}
     * @memberof UserCommunicationDisabledActionResponse
     */
    metadata: UserCommunicationDisabledActionMetadataResponse;
}

/**
 * Check if a given object implements the UserCommunicationDisabledActionResponse interface.
 */
export function instanceOfUserCommunicationDisabledActionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function UserCommunicationDisabledActionResponseFromJSON(json: any): UserCommunicationDisabledActionResponse {
    return UserCommunicationDisabledActionResponseFromJSONTyped(json, false);
}

export function UserCommunicationDisabledActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCommunicationDisabledActionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'metadata': UserCommunicationDisabledActionMetadataResponseFromJSON(json['metadata']),
    };
}

export function UserCommunicationDisabledActionResponseToJSON(value?: UserCommunicationDisabledActionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'metadata': UserCommunicationDisabledActionMetadataResponseToJSON(value.metadata),
    };
}

