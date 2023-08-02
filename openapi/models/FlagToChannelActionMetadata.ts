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
 * @interface FlagToChannelActionMetadata
 */
export interface FlagToChannelActionMetadata {
    /**
     * 
     * @type {any}
     * @memberof FlagToChannelActionMetadata
     */
    channelId: any | null;
}

/**
 * Check if a given object implements the FlagToChannelActionMetadata interface.
 */
export function instanceOfFlagToChannelActionMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelId" in value;

    return isInstance;
}

export function FlagToChannelActionMetadataFromJSON(json: any): FlagToChannelActionMetadata {
    return FlagToChannelActionMetadataFromJSONTyped(json, false);
}

export function FlagToChannelActionMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagToChannelActionMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': json['channel_id'],
    };
}

export function FlagToChannelActionMetadataToJSON(value?: FlagToChannelActionMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
    };
}
