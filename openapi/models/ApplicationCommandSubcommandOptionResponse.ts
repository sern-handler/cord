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
 * @interface ApplicationCommandSubcommandOptionResponse
 */
export interface ApplicationCommandSubcommandOptionResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    nameLocalized?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    description: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    descriptionLocalized?: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    descriptionLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    required?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandOptionResponse
     */
    options?: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandSubcommandOptionResponse interface.
 */
export function instanceOfApplicationCommandSubcommandOptionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function ApplicationCommandSubcommandOptionResponseFromJSON(json: any): ApplicationCommandSubcommandOptionResponse {
    return ApplicationCommandSubcommandOptionResponseFromJSONTyped(json, false);
}

export function ApplicationCommandSubcommandOptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandSubcommandOptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
        'nameLocalized': !exists(json, 'name_localized') ? undefined : json['name_localized'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'description': json['description'],
        'descriptionLocalized': !exists(json, 'description_localized') ? undefined : json['description_localized'],
        'descriptionLocalizations': !exists(json, 'description_localizations') ? undefined : json['description_localizations'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function ApplicationCommandSubcommandOptionResponseToJSON(value?: ApplicationCommandSubcommandOptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'name_localized': value.nameLocalized,
        'name_localizations': value.nameLocalizations,
        'description': value.description,
        'description_localized': value.descriptionLocalized,
        'description_localizations': value.descriptionLocalizations,
        'required': value.required,
        'options': value.options,
    };
}

