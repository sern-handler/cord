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
 * @interface ApplicationIncomingWebhookResponse
 */
export interface ApplicationIncomingWebhookResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    applicationId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    avatar?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    channelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    guildId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    user?: any | null;
}

/**
 * Check if a given object implements the ApplicationIncomingWebhookResponse interface.
 */
export function instanceOfApplicationIncomingWebhookResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ApplicationIncomingWebhookResponseFromJSON(json: any): ApplicationIncomingWebhookResponse {
    return ApplicationIncomingWebhookResponseFromJSONTyped(json, false);
}

export function ApplicationIncomingWebhookResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationIncomingWebhookResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationId': !exists(json, 'application_id') ? undefined : json['application_id'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'guildId': !exists(json, 'guild_id') ? undefined : json['guild_id'],
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ApplicationIncomingWebhookResponseToJSON(value?: ApplicationIncomingWebhookResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application_id': value.applicationId,
        'avatar': value.avatar,
        'channel_id': value.channelId,
        'guild_id': value.guildId,
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'user': value.user,
    };
}
