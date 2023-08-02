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
 * @interface InviteGuildResponse
 */
export interface InviteGuildResponse {
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    splash?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    banner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    icon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    features: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    verificationLevel?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    vanityUrlCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    nsfwLevel?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    nsfw?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InviteGuildResponse
     */
    premiumSubscriptionCount?: any | null;
}

/**
 * Check if a given object implements the InviteGuildResponse interface.
 */
export function instanceOfInviteGuildResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "features" in value;

    return isInstance;
}

export function InviteGuildResponseFromJSON(json: any): InviteGuildResponse {
    return InviteGuildResponseFromJSONTyped(json, false);
}

export function InviteGuildResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteGuildResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'splash': !exists(json, 'splash') ? undefined : json['splash'],
        'banner': !exists(json, 'banner') ? undefined : json['banner'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'features': json['features'],
        'verificationLevel': !exists(json, 'verification_level') ? undefined : json['verification_level'],
        'vanityUrlCode': !exists(json, 'vanity_url_code') ? undefined : json['vanity_url_code'],
        'nsfwLevel': !exists(json, 'nsfw_level') ? undefined : json['nsfw_level'],
        'nsfw': !exists(json, 'nsfw') ? undefined : json['nsfw'],
        'premiumSubscriptionCount': !exists(json, 'premium_subscription_count') ? undefined : json['premium_subscription_count'],
    };
}

export function InviteGuildResponseToJSON(value?: InviteGuildResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'splash': value.splash,
        'banner': value.banner,
        'description': value.description,
        'icon': value.icon,
        'features': value.features,
        'verification_level': value.verificationLevel,
        'vanity_url_code': value.vanityUrlCode,
        'nsfw_level': value.nsfwLevel,
        'nsfw': value.nsfw,
        'premium_subscription_count': value.premiumSubscriptionCount,
    };
}

