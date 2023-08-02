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
import type { FlagToChannelActionMetadataResponse } from './FlagToChannelActionMetadataResponse';
import {
    FlagToChannelActionMetadataResponseFromJSON,
    FlagToChannelActionMetadataResponseFromJSONTyped,
    FlagToChannelActionMetadataResponseToJSON,
} from './FlagToChannelActionMetadataResponse';

/**
 * 
 * @export
 * @interface FlagToChannelActionResponse
 */
export interface FlagToChannelActionResponse {
    /**
     * 
     * @type {any}
     * @memberof FlagToChannelActionResponse
     */
    type: any | null;
    /**
     * 
     * @type {FlagToChannelActionMetadataResponse}
     * @memberof FlagToChannelActionResponse
     */
    metadata: FlagToChannelActionMetadataResponse;
}

/**
 * Check if a given object implements the FlagToChannelActionResponse interface.
 */
export function instanceOfFlagToChannelActionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function FlagToChannelActionResponseFromJSON(json: any): FlagToChannelActionResponse {
    return FlagToChannelActionResponseFromJSONTyped(json, false);
}

export function FlagToChannelActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagToChannelActionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'metadata': FlagToChannelActionMetadataResponseFromJSON(json['metadata']),
    };
}

export function FlagToChannelActionResponseToJSON(value?: FlagToChannelActionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'metadata': FlagToChannelActionMetadataResponseToJSON(value.metadata),
    };
}
