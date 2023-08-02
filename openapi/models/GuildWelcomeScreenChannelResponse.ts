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
 * @interface GuildWelcomeScreenChannelResponse
 */
export interface GuildWelcomeScreenChannelResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildWelcomeScreenChannelResponse
     */
    channelId: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWelcomeScreenChannelResponse
     */
    description: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWelcomeScreenChannelResponse
     */
    emojiId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWelcomeScreenChannelResponse
     */
    emojiName?: any | null;
}

/**
 * Check if a given object implements the GuildWelcomeScreenChannelResponse interface.
 */
export function instanceOfGuildWelcomeScreenChannelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelId" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function GuildWelcomeScreenChannelResponseFromJSON(json: any): GuildWelcomeScreenChannelResponse {
    return GuildWelcomeScreenChannelResponseFromJSONTyped(json, false);
}

export function GuildWelcomeScreenChannelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildWelcomeScreenChannelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': json['channel_id'],
        'description': json['description'],
        'emojiId': !exists(json, 'emoji_id') ? undefined : json['emoji_id'],
        'emojiName': !exists(json, 'emoji_name') ? undefined : json['emoji_name'],
    };
}

export function GuildWelcomeScreenChannelResponseToJSON(value?: GuildWelcomeScreenChannelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'description': value.description,
        'emoji_id': value.emojiId,
        'emoji_name': value.emojiName,
    };
}

