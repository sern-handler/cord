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
 * @interface ApplicationCommandOptionIntegerChoiceResponse
 */
export interface ApplicationCommandOptionIntegerChoiceResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandOptionIntegerChoiceResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandOptionIntegerChoiceResponse
     */
    nameLocalized?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandOptionIntegerChoiceResponse
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandOptionIntegerChoiceResponse
     */
    value: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandOptionIntegerChoiceResponse interface.
 */
export function instanceOfApplicationCommandOptionIntegerChoiceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ApplicationCommandOptionIntegerChoiceResponseFromJSON(json: any): ApplicationCommandOptionIntegerChoiceResponse {
    return ApplicationCommandOptionIntegerChoiceResponseFromJSONTyped(json, false);
}

export function ApplicationCommandOptionIntegerChoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandOptionIntegerChoiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'nameLocalized': !exists(json, 'name_localized') ? undefined : json['name_localized'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'value': json['value'],
    };
}

export function ApplicationCommandOptionIntegerChoiceResponseToJSON(value?: ApplicationCommandOptionIntegerChoiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'name_localized': value.nameLocalized,
        'name_localizations': value.nameLocalizations,
        'value': value.value,
    };
}
