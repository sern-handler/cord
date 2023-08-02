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
 * @interface UpdateGuildWidgetSettingsRequest
 */
export interface UpdateGuildWidgetSettingsRequest {
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildWidgetSettingsRequest
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateGuildWidgetSettingsRequest
     */
    enabled?: any | null;
}

/**
 * Check if a given object implements the UpdateGuildWidgetSettingsRequest interface.
 */
export function instanceOfUpdateGuildWidgetSettingsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGuildWidgetSettingsRequestFromJSON(json: any): UpdateGuildWidgetSettingsRequest {
    return UpdateGuildWidgetSettingsRequestFromJSONTyped(json, false);
}

export function UpdateGuildWidgetSettingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGuildWidgetSettingsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function UpdateGuildWidgetSettingsRequestToJSON(value?: UpdateGuildWidgetSettingsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'enabled': value.enabled,
    };
}

