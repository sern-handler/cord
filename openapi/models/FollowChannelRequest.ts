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
 * @interface FollowChannelRequest
 */
export interface FollowChannelRequest {
    /**
     * 
     * @type {any}
     * @memberof FollowChannelRequest
     */
    webhookChannelId: any | null;
}

/**
 * Check if a given object implements the FollowChannelRequest interface.
 */
export function instanceOfFollowChannelRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "webhookChannelId" in value;

    return isInstance;
}

export function FollowChannelRequestFromJSON(json: any): FollowChannelRequest {
    return FollowChannelRequestFromJSONTyped(json, false);
}

export function FollowChannelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowChannelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'webhookChannelId': json['webhook_channel_id'],
    };
}

export function FollowChannelRequestToJSON(value?: FollowChannelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'webhook_channel_id': value.webhookChannelId,
    };
}

