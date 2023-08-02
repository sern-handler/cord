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
 * @interface KeywordUpsertRequest
 */
export interface KeywordUpsertRequest {
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    eventType: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    actions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    enabled?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    exemptRoles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    exemptChannels?: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    triggerType: any | null;
    /**
     * 
     * @type {any}
     * @memberof KeywordUpsertRequest
     */
    triggerMetadata?: any | null;
}

/**
 * Check if a given object implements the KeywordUpsertRequest interface.
 */
export function instanceOfKeywordUpsertRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "eventType" in value;
    isInstance = isInstance && "triggerType" in value;

    return isInstance;
}

export function KeywordUpsertRequestFromJSON(json: any): KeywordUpsertRequest {
    return KeywordUpsertRequestFromJSONTyped(json, false);
}

export function KeywordUpsertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordUpsertRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'eventType': json['event_type'],
        'actions': !exists(json, 'actions') ? undefined : json['actions'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'exemptRoles': !exists(json, 'exempt_roles') ? undefined : json['exempt_roles'],
        'exemptChannels': !exists(json, 'exempt_channels') ? undefined : json['exempt_channels'],
        'triggerType': json['trigger_type'],
        'triggerMetadata': !exists(json, 'trigger_metadata') ? undefined : json['trigger_metadata'],
    };
}

export function KeywordUpsertRequestToJSON(value?: KeywordUpsertRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'event_type': value.eventType,
        'actions': value.actions,
        'enabled': value.enabled,
        'exempt_roles': value.exemptRoles,
        'exempt_channels': value.exemptChannels,
        'trigger_type': value.triggerType,
        'trigger_metadata': value.triggerMetadata,
    };
}
