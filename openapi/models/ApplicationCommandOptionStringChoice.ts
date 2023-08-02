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
 * @interface ApplicationCommandOptionStringChoice
 */
export interface ApplicationCommandOptionStringChoice {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandOptionStringChoice
     */
    name: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandOptionStringChoice
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandOptionStringChoice
     */
    value: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandOptionStringChoice interface.
 */
export function instanceOfApplicationCommandOptionStringChoice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ApplicationCommandOptionStringChoiceFromJSON(json: any): ApplicationCommandOptionStringChoice {
    return ApplicationCommandOptionStringChoiceFromJSONTyped(json, false);
}

export function ApplicationCommandOptionStringChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandOptionStringChoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'value': json['value'],
    };
}

export function ApplicationCommandOptionStringChoiceToJSON(value?: ApplicationCommandOptionStringChoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'name_localizations': value.nameLocalizations,
        'value': value.value,
    };
}

