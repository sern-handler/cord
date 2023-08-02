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
 * @interface KeywordTriggerMetadata
 */
export interface KeywordTriggerMetadata {
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadata
     */
    keywordFilter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadata
     */
    regexPatterns?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadata
     */
    allowList?: any | null;
}

/**
 * Check if a given object implements the KeywordTriggerMetadata interface.
 */
export function instanceOfKeywordTriggerMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeywordTriggerMetadataFromJSON(json: any): KeywordTriggerMetadata {
    return KeywordTriggerMetadataFromJSONTyped(json, false);
}

export function KeywordTriggerMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordTriggerMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keywordFilter': !exists(json, 'keyword_filter') ? undefined : json['keyword_filter'],
        'regexPatterns': !exists(json, 'regex_patterns') ? undefined : json['regex_patterns'],
        'allowList': !exists(json, 'allow_list') ? undefined : json['allow_list'],
    };
}

export function KeywordTriggerMetadataToJSON(value?: KeywordTriggerMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'keyword_filter': value.keywordFilter,
        'regex_patterns': value.regexPatterns,
        'allow_list': value.allowList,
    };
}

