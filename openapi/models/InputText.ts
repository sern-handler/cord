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
 * @interface InputText
 */
export interface InputText {
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    type: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    customId: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    style: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    label: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    value?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    placeholder?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    required?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    minLength?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InputText
     */
    maxLength?: any | null;
}

/**
 * Check if a given object implements the InputText interface.
 */
export function instanceOfInputText(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "customId" in value;
    isInstance = isInstance && "style" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function InputTextFromJSON(json: any): InputText {
    return InputTextFromJSONTyped(json, false);
}

export function InputTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): InputText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'customId': json['custom_id'],
        'style': json['style'],
        'label': json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'minLength': !exists(json, 'min_length') ? undefined : json['min_length'],
        'maxLength': !exists(json, 'max_length') ? undefined : json['max_length'],
    };
}

export function InputTextToJSON(value?: InputText | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'custom_id': value.customId,
        'style': value.style,
        'label': value.label,
        'value': value.value,
        'placeholder': value.placeholder,
        'required': value.required,
        'min_length': value.minLength,
        'max_length': value.maxLength,
    };
}

