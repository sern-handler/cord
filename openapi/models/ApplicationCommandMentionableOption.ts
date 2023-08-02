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
 * @interface ApplicationCommandMentionableOption
 */
export interface ApplicationCommandMentionableOption {
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandMentionableOption
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandMentionableOption
     */
    name: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandMentionableOption
     */
    nameLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandMentionableOption
     */
    description: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationCommandMentionableOption
     */
    descriptionLocalizations?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationCommandMentionableOption
     */
    required?: any | null;
}

/**
 * Check if a given object implements the ApplicationCommandMentionableOption interface.
 */
export function instanceOfApplicationCommandMentionableOption(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function ApplicationCommandMentionableOptionFromJSON(json: any): ApplicationCommandMentionableOption {
    return ApplicationCommandMentionableOptionFromJSONTyped(json, false);
}

export function ApplicationCommandMentionableOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationCommandMentionableOption {
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
    };
}

export function ApplicationCommandMentionableOptionToJSON(value?: ApplicationCommandMentionableOption | null): any {
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
    };
}
