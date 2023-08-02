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
 * @interface UserGuildOnboardingResponse
 */
export interface UserGuildOnboardingResponse {
    /**
     * 
     * @type {any}
     * @memberof UserGuildOnboardingResponse
     */
    guildId: any | null;
    /**
     * 
     * @type {any}
     * @memberof UserGuildOnboardingResponse
     */
    prompts: any | null;
    /**
     * 
     * @type {any}
     * @memberof UserGuildOnboardingResponse
     */
    defaultChannelIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof UserGuildOnboardingResponse
     */
    enabled: any | null;
}

/**
 * Check if a given object implements the UserGuildOnboardingResponse interface.
 */
export function instanceOfUserGuildOnboardingResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "guildId" in value;
    isInstance = isInstance && "prompts" in value;
    isInstance = isInstance && "defaultChannelIds" in value;
    isInstance = isInstance && "enabled" in value;

    return isInstance;
}

export function UserGuildOnboardingResponseFromJSON(json: any): UserGuildOnboardingResponse {
    return UserGuildOnboardingResponseFromJSONTyped(json, false);
}

export function UserGuildOnboardingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGuildOnboardingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guildId': json['guild_id'],
        'prompts': json['prompts'],
        'defaultChannelIds': json['default_channel_ids'],
        'enabled': json['enabled'],
    };
}

export function UserGuildOnboardingResponseToJSON(value?: UserGuildOnboardingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guild_id': value.guildId,
        'prompts': value.prompts,
        'default_channel_ids': value.defaultChannelIds,
        'enabled': value.enabled,
    };
}

