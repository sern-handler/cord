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
import type { BlockMessageActionMetadataResponse } from './BlockMessageActionMetadataResponse';
import {
    BlockMessageActionMetadataResponseFromJSON,
    BlockMessageActionMetadataResponseFromJSONTyped,
    BlockMessageActionMetadataResponseToJSON,
} from './BlockMessageActionMetadataResponse';

/**
 * 
 * @export
 * @interface BlockMessageActionResponse
 */
export interface BlockMessageActionResponse {
    /**
     * 
     * @type {any}
     * @memberof BlockMessageActionResponse
     */
    type: any | null;
    /**
     * 
     * @type {BlockMessageActionMetadataResponse}
     * @memberof BlockMessageActionResponse
     */
    metadata: BlockMessageActionMetadataResponse;
}

/**
 * Check if a given object implements the BlockMessageActionResponse interface.
 */
export function instanceOfBlockMessageActionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function BlockMessageActionResponseFromJSON(json: any): BlockMessageActionResponse {
    return BlockMessageActionResponseFromJSONTyped(json, false);
}

export function BlockMessageActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockMessageActionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'metadata': BlockMessageActionMetadataResponseFromJSON(json['metadata']),
    };
}

export function BlockMessageActionResponseToJSON(value?: BlockMessageActionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'metadata': BlockMessageActionMetadataResponseToJSON(value.metadata),
    };
}

