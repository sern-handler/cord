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
 * @interface ActionRow
 */
export interface ActionRow {
    /**
     * 
     * @type {any}
     * @memberof ActionRow
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionRow
     */
    components: any | null;
}

/**
 * Check if a given object implements the ActionRow interface.
 */
export function instanceOfActionRow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "components" in value;

    return isInstance;
}

export function ActionRowFromJSON(json: any): ActionRow {
    return ActionRowFromJSONTyped(json, false);
}

export function ActionRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'components': json['components'],
    };
}

export function ActionRowToJSON(value?: ActionRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'components': value.components,
    };
}
