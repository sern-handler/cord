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
import type { EntityMetadataExternalResponse } from './EntityMetadataExternalResponse';
import {
    EntityMetadataExternalResponseFromJSON,
    EntityMetadataExternalResponseFromJSONTyped,
    EntityMetadataExternalResponseToJSON,
} from './EntityMetadataExternalResponse';

/**
 * 
 * @export
 * @interface ExternalScheduledEventResponse
 */
export interface ExternalScheduledEventResponse {
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    guildId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    creatorId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    creator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    image?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    scheduledStartTime: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    scheduledEndTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    status: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    entityType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    entityId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    userCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    privacyLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalScheduledEventResponse
     */
    userRsvp?: any | null;
    /**
     * 
     * @type {EntityMetadataExternalResponse}
     * @memberof ExternalScheduledEventResponse
     */
    entityMetadata: EntityMetadataExternalResponse;
}

/**
 * Check if a given object implements the ExternalScheduledEventResponse interface.
 */
export function instanceOfExternalScheduledEventResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "guildId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scheduledStartTime" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "privacyLevel" in value;
    isInstance = isInstance && "entityMetadata" in value;

    return isInstance;
}

export function ExternalScheduledEventResponseFromJSON(json: any): ExternalScheduledEventResponse {
    return ExternalScheduledEventResponseFromJSONTyped(json, false);
}

export function ExternalScheduledEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalScheduledEventResponse {
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
        'entityMetadata': EntityMetadataExternalResponseFromJSON(json['entity_metadata']),
    };
}

export function ExternalScheduledEventResponseToJSON(value?: ExternalScheduledEventResponse | null): any {
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
        'entity_metadata': EntityMetadataExternalResponseToJSON(value.entityMetadata),
    };
}
