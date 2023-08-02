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
 * @interface ApplicationCommandSubcommandGroupOption
 */
export interface ApplicationCommandSubcommandGroupOption {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    name: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    description: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    descriptionLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    required?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandSubcommandGroupOption
     */
    options?: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandSubcommandGroupOption interface.
 */
export function instanceOfApplicationCommandSubcommandGroupOption(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function ApplicationCommandSubcommandGroupOptionFromJSON(json: any): ApplicationCommandSubcommandGroupOption {
    return ApplicationCommandSubcommandGroupOptionFromJSONTyped(json, false);
}

export function ApplicationCommandSubcommandGroupOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandSubcommandGroupOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
        'nameLocalizations': !exists(json, 'name_localizations') ? undefined : json['name_localizations'],
        'description': json['description'],
        'descriptionLocalizations': !exists(json, 'description_localizations') ? undefined : json['description_localizations'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function ApplicationCommandSubcommandGroupOptionToJSON(value?: ApplicationCommandSubcommandGroupOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'name_localizations': value.nameLocalizations,
        'description': value.description,
        'description_localizations': value.descriptionLocalizations,
        'required': value.required,
        'options': value.options,
    };
}
