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
 * @interface KeywordTriggerMetadataResponse
 */
export interface KeywordTriggerMetadataResponse {
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadataResponse
     */
    keywordFilter: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadataResponse
     */
    regexPatterns: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordTriggerMetadataResponse
     */
    allowList: any | null;
}

/**
 * Check if a given object implements the KeywordTriggerMetadataResponse interface.
 */
export function instanceOfKeywordTriggerMetadataResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keywordFilter" in value;
    isInstance = isInstance && "regexPatterns" in value;
    isInstance = isInstance && "allowList" in value;

    return isInstance;
}

export function KeywordTriggerMetadataResponseFromJSON(json: any): KeywordTriggerMetadataResponse {
    return KeywordTriggerMetadataResponseFromJSONTyped(json, false);
}

export function KeywordTriggerMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordTriggerMetadataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keywordFilter': json['keyword_filter'],
        'regexPatterns': json['regex_patterns'],
        'allowList': json['allow_list'],
    };
}

export function KeywordTriggerMetadataResponseToJSON(value?: KeywordTriggerMetadataResponse | null): any {
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

