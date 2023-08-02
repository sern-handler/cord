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
 * @interface StageScheduledEventCreateRequest
 */
export interface StageScheduledEventCreateRequest {
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    scheduledStartTime: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    scheduledEndTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    privacyLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    entityType: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventCreateRequest
     */
    entityMetadata?: any | null;
}

/**
 * Check if a given object implements the StageScheduledEventCreateRequest interface.
 */
export function instanceOfStageScheduledEventCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scheduledStartTime" in value;
    isInstance = isInstance && "privacyLevel" in value;
    isInstance = isInstance && "entityType" in value;

    return isInstance;
}

export function StageScheduledEventCreateRequestFromJSON(json: any): StageScheduledEventCreateRequest {
    return StageScheduledEventCreateRequestFromJSONTyped(json, false);
}

export function StageScheduledEventCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageScheduledEventCreateRequest {
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

export function StageScheduledEventCreateRequestToJSON(value?: StageScheduledEventCreateRequest | null): any {
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

