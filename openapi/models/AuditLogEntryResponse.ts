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
 * @interface AuditLogEntryResponse
 */
export interface AuditLogEntryResponse {
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    actionType: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    userId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    targetId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    changes?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AuditLogEntryResponse
     */
    options?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryResponse
     */
    reason?: any | null;
}

/**
 * Check if a given object implements the AuditLogEntryResponse interface.
 */
export function instanceOfAuditLogEntryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "actionType" in value;

    return isInstance;
}

export function AuditLogEntryResponseFromJSON(json: any): AuditLogEntryResponse {
    return AuditLogEntryResponseFromJSONTyped(json, false);
}

export function AuditLogEntryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLogEntryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'actionType': json['action_type'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'targetId': !exists(json, 'target_id') ? undefined : json['target_id'],
        'changes': !exists(json, 'changes') ? undefined : json['changes'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function AuditLogEntryResponseToJSON(value?: AuditLogEntryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'action_type': value.actionType,
        'user_id': value.userId,
        'target_id': value.targetId,
        'changes': value.changes,
        'options': value.options,
        'reason': value.reason,
    };
}
