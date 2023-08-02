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
 * @interface ThreadResponse
 */
export interface ThreadResponse {
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    lastMessageId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    flags: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    lastPinTimestamp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    guildId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    parentId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    rateLimitPerUser?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    bitrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    userLimit?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    rtcRegion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    videoQualityMode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    permissions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    ownerId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    threadMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    messageCount: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    memberCount: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    totalMessageSent: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    appliedTags?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ThreadResponse
     */
    member?: any | null;
}

/**
 * Check if a given object implements the ThreadResponse interface.
 */
export function instanceOfThreadResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "guildId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownerId" in value;
    isInstance = isInstance && "messageCount" in value;
    isInstance = isInstance && "memberCount" in value;
    isInstance = isInstance && "totalMessageSent" in value;

    return isInstance;
}

export function ThreadResponseFromJSON(json: any): ThreadResponse {
    return ThreadResponseFromJSONTyped(json, false);
}

export function ThreadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'lastMessageId': !exists(json, 'last_message_id') ? undefined : json['last_message_id'],
        'flags': json['flags'],
        'lastPinTimestamp': !exists(json, 'last_pin_timestamp') ? undefined : json['last_pin_timestamp'],
        'guildId': json['guild_id'],
        'name': json['name'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'rateLimitPerUser': !exists(json, 'rate_limit_per_user') ? undefined : json['rate_limit_per_user'],
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'userLimit': !exists(json, 'user_limit') ? undefined : json['user_limit'],
        'rtcRegion': !exists(json, 'rtc_region') ? undefined : json['rtc_region'],
        'videoQualityMode': !exists(json, 'video_quality_mode') ? undefined : json['video_quality_mode'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
        'ownerId': json['owner_id'],
        'threadMetadata': !exists(json, 'thread_metadata') ? undefined : json['thread_metadata'],
        'messageCount': json['message_count'],
        'memberCount': json['member_count'],
        'totalMessageSent': json['total_message_sent'],
        'appliedTags': !exists(json, 'applied_tags') ? undefined : json['applied_tags'],
        'member': !exists(json, 'member') ? undefined : json['member'],
    };
}

export function ThreadResponseToJSON(value?: ThreadResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'last_message_id': value.lastMessageId,
        'flags': value.flags,
        'last_pin_timestamp': value.lastPinTimestamp,
        'guild_id': value.guildId,
        'name': value.name,
        'parent_id': value.parentId,
        'rate_limit_per_user': value.rateLimitPerUser,
        'bitrate': value.bitrate,
        'user_limit': value.userLimit,
        'rtc_region': value.rtcRegion,
        'video_quality_mode': value.videoQualityMode,
        'permissions': value.permissions,
        'owner_id': value.ownerId,
        'thread_metadata': value.threadMetadata,
        'message_count': value.messageCount,
        'member_count': value.memberCount,
        'total_message_sent': value.totalMessageSent,
        'applied_tags': value.appliedTags,
        'member': value.member,
    };
}

