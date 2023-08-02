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
 * @interface VoiceScheduledEventCreateRequest
 */
export interface VoiceScheduledEventCreateRequest {
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    scheduledStartTime: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    scheduledEndTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    privacyLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    entityType: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VoiceScheduledEventCreateRequest
     */
    entityMetadata?: any | null;
}

/**
 * Check if a given object implements the VoiceScheduledEventCreateRequest interface.
 */
export function instanceOfVoiceScheduledEventCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scheduledStartTime" in value;
    isInstance = isInstance && "privacyLevel" in value;
    isInstance = isInstance && "entityType" in value;

    return isInstance;
}

export function VoiceScheduledEventCreateRequestFromJSON(json: any): VoiceScheduledEventCreateRequest {
    return VoiceScheduledEventCreateRequestFromJSONTyped(json, false);
}

export function VoiceScheduledEventCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VoiceScheduledEventCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'scheduledStartTime': json['scheduled_start_time'],
        'scheduledEndTime': !exists(json, 'scheduled_end_time') ? undefined : json['scheduled_end_time'],
        'privacyLevel': json['privacy_level'],
        'entityType': json['entity_type'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'entityMetadata': !exists(json, 'entity_metadata') ? undefined : json['entity_metadata'],
    };
}

export function VoiceScheduledEventCreateRequestToJSON(value?: VoiceScheduledEventCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'image': value.image,
        'scheduled_start_time': value.scheduledStartTime,
        'scheduled_end_time': value.scheduledEndTime,
        'privacy_level': value.privacyLevel,
        'entity_type': value.entityType,
        'channel_id': value.channelId,
        'entity_metadata': value.entityMetadata,
    };
}

