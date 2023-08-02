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
 * @interface UpdateOnboardingPromptRequest
 */
export interface UpdateOnboardingPromptRequest {
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    title: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    options: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    singleSelect?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    required?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    inOnboarding?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UpdateOnboardingPromptRequest
     */
    id: any | null;
}

/**
 * Check if a given object implements the UpdateOnboardingPromptRequest interface.
 */
export function instanceOfUpdateOnboardingPromptRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "options" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UpdateOnboardingPromptRequestFromJSON(json: any): UpdateOnboardingPromptRequest {
    return UpdateOnboardingPromptRequestFromJSONTyped(json, false);
}

export function UpdateOnboardingPromptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOnboardingPromptRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'options': json['options'],
        'singleSelect': !exists(json, 'single_select') ? undefined : json['single_select'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'inOnboarding': !exists(json, 'in_onboarding') ? undefined : json['in_onboarding'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': json['id'],
    };
}

export function UpdateOnboardingPromptRequestToJSON(value?: UpdateOnboardingPromptRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'options': value.options,
        'single_select': value.singleSelect,
        'required': value.required,
        'in_onboarding': value.inOnboarding,
        'type': value.type,
        'id': value.id,
    };
}

