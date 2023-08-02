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
 * @interface StageScheduledEventResponse
 */
export interface StageScheduledEventResponse {
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    guildId: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    creatorId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    creator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    scheduledStartTime: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    scheduledEndTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    status: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    entityType: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    entityId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    userCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    privacyLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    userRsvp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof StageScheduledEventResponse
     */
    entityMetadata?: any | null;
}

/**
 * Check if a given object implements the StageScheduledEventResponse interface.
 */
export function instanceOfStageScheduledEventResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "guildId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scheduledStartTime" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "privacyLevel" in value;

    return isInstance;
}

export function StageScheduledEventResponseFromJSON(json: any): StageScheduledEventResponse {
    return StageScheduledEventResponseFromJSONTyped(json, false);
}

export function StageScheduledEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageScheduledEventResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'guildId': json['guild_id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'creatorId': !exists(json, 'creator_id') ? undefined : json['creator_id'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'scheduledStartTime': json['scheduled_start_time'],
        'scheduledEndTime': !exists(json, 'scheduled_end_time') ? undefined : json['scheduled_end_time'],
        'status': json['status'],
        'entityType': json['entity_type'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'userCount': !exists(json, 'user_count') ? undefined : json['user_count'],
        'privacyLevel': json['privacy_level'],
        'userRsvp': !exists(json, 'user_rsvp') ? undefined : json['user_rsvp'],
        'entityMetadata': !exists(json, 'entity_metadata') ? undefined : json['entity_metadata'],
    };
}

export function StageScheduledEventResponseToJSON(value?: StageScheduledEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'guild_id': value.guildId,
        'name': value.name,
        'description': value.description,
        'channel_id': value.channelId,
        'creator_id': value.creatorId,
        'creator': value.creator,
        'image': value.image,
        'scheduled_start_time': value.scheduledStartTime,
        'scheduled_end_time': value.scheduledEndTime,
        'status': value.status,
        'entity_type': value.entityType,
        'entity_id': value.entityId,
        'user_count': value.userCount,
        'privacy_level': value.privacyLevel,
        'user_rsvp': value.userRsvp,
        'entity_metadata': value.entityMetadata,
    };
}
