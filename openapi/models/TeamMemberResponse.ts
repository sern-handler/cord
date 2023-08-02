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
import type { UserResponse } from './UserResponse';
import {
    UserResponseFromJSON,
    UserResponseFromJSONTyped,
    UserResponseToJSON,
} from './UserResponse';

/**
 * 
 * @export
 * @interface TeamMemberResponse
 */
export interface TeamMemberResponse {
    /**
     * 
     * @type {UserResponse}
     * @memberof TeamMemberResponse
     */
    user: UserResponse;
    /**
     * 
     * @type {any}
     * @memberof TeamMemberResponse
     */
    teamId: any | null;
    /**
     * 
     * @type {any}
     * @memberof TeamMemberResponse
     */
    membershipState: any | null;
    /**
     * 
     * @type {any}
     * @memberof TeamMemberResponse
     */
    permissions: any | null;
}

/**
 * Check if a given object implements the TeamMemberResponse interface.
 */
export function instanceOfTeamMemberResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "teamId" in value;
    isInstance = isInstance && "membershipState" in value;
    isInstance = isInstance && "permissions" in value;

    return isInstance;
}

export function TeamMemberResponseFromJSON(json: any): TeamMemberResponse {
    return TeamMemberResponseFromJSONTyped(json, false);
}

export function TeamMemberResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamMemberResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserResponseFromJSON(json['user']),
        'teamId': json['team_id'],
        'membershipState': json['membership_state'],
        'permissions': json['permissions'],
    };
}

export function TeamMemberResponseToJSON(value?: TeamMemberResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserResponseToJSON(value.user),
        'team_id': value.teamId,
        'membership_state': value.membershipState,
        'permissions': value.permissions,
    };
}
