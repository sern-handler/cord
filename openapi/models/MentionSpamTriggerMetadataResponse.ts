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
 * @interface MentionSpamTriggerMetadataResponse
 */
export interface MentionSpamTriggerMetadataResponse {
    /**
     * 
     * @type {any}
     * @memberof MentionSpamTriggerMetadataResponse
     */
    mentionTotalLimit: any | null;
}

/**
 * Check if a given object implements the MentionSpamTriggerMetadataResponse interface.
 */
export function instanceOfMentionSpamTriggerMetadataResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mentionTotalLimit" in value;

    return isInstance;
}

export function MentionSpamTriggerMetadataResponseFromJSON(json: any): MentionSpamTriggerMetadataResponse {
    return MentionSpamTriggerMetadataResponseFromJSONTyped(json, false);
}

export function MentionSpamTriggerMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MentionSpamTriggerMetadataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mentionTotalLimit': json['mention_total_limit'],
    };
}

export function MentionSpamTriggerMetadataResponseToJSON(value?: MentionSpamTriggerMetadataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mention_total_limit': value.mentionTotalLimit,
    };
}
