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
 * @interface MessageResponse
 */
export interface MessageResponse {
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    content: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    channelId: any | null;
    /**
     * 
     * @type {UserResponse}
     * @memberof MessageResponse
     */
    author: UserResponse;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    attachments: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    embeds: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    mentions: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    mentionRoles: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    pinned: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    mentionEveryone: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    tts: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    timestamp: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    editedTimestamp?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    flags: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    components: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    activity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    application?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    applicationId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    interaction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    nonce?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    webhookId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    messageReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    thread?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    mentionChannels?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    stickers?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    stickerItems?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    roleSubscriptionData?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    position?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    reactions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessageResponse
     */
    referencedMessage?: any | null;
}

/**
 * Check if a given object implements the MessageResponse interface.
 */
export function instanceOfMessageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "channelId" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "attachments" in value;
    isInstance = isInstance && "embeds" in value;
    isInstance = isInstance && "mentions" in value;
    isInstance = isInstance && "mentionRoles" in value;
    isInstance = isInstance && "pinned" in value;
    isInstance = isInstance && "mentionEveryone" in value;
    isInstance = isInstance && "tts" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "components" in value;

    return isInstance;
}

export function MessageResponseFromJSON(json: any): MessageResponse {
    return MessageResponseFromJSONTyped(json, false);
}

export function MessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'content': json['content'],
        'channelId': json['channel_id'],
        'author': UserResponseFromJSON(json['author']),
        'attachments': json['attachments'],
        'embeds': json['embeds'],
        'mentions': json['mentions'],
        'mentionRoles': json['mention_roles'],
        'pinned': json['pinned'],
        'mentionEveryone': json['mention_everyone'],
        'tts': json['tts'],
        'timestamp': json['timestamp'],
        'editedTimestamp': !exists(json, 'edited_timestamp') ? undefined : json['edited_timestamp'],
        'flags': json['flags'],
        'components': json['components'],
        'activity': !exists(json, 'activity') ? undefined : json['activity'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'applicationId': !exists(json, 'application_id') ? undefined : json['application_id'],
        'interaction': !exists(json, 'interaction') ? undefined : json['interaction'],
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'webhookId': !exists(json, 'webhook_id') ? undefined : json['webhook_id'],
        'messageReference': !exists(json, 'message_reference') ? undefined : json['message_reference'],
        'thread': !exists(json, 'thread') ? undefined : json['thread'],
        'mentionChannels': !exists(json, 'mention_channels') ? undefined : json['mention_channels'],
        'stickers': !exists(json, 'stickers') ? undefined : json['stickers'],
        'stickerItems': !exists(json, 'sticker_items') ? undefined : json['sticker_items'],
        'roleSubscriptionData': !exists(json, 'role_subscription_data') ? undefined : json['role_subscription_data'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'reactions': !exists(json, 'reactions') ? undefined : json['reactions'],
        'referencedMessage': !exists(json, 'referenced_message') ? undefined : json['referenced_message'],
    };
}

export function MessageResponseToJSON(value?: MessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'content': value.content,
        'channel_id': value.channelId,
        'author': UserResponseToJSON(value.author),
        'attachments': value.attachments,
        'embeds': value.embeds,
        'mentions': value.mentions,
        'mention_roles': value.mentionRoles,
        'pinned': value.pinned,
        'mention_everyone': value.mentionEveryone,
        'tts': value.tts,
        'timestamp': value.timestamp,
        'edited_timestamp': value.editedTimestamp,
        'flags': value.flags,
        'components': value.components,
        'activity': value.activity,
        'application': value.application,
        'application_id': value.applicationId,
        'interaction': value.interaction,
        'nonce': value.nonce,
        'webhook_id': value.webhookId,
        'message_reference': value.messageReference,
        'thread': value.thread,
        'mention_channels': value.mentionChannels,
        'stickers': value.stickers,
        'sticker_items': value.stickerItems,
        'role_subscription_data': value.roleSubscriptionData,
        'position': value.position,
        'reactions': value.reactions,
        'referenced_message': value.referencedMessage,
    };
}

