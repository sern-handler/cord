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
import type { ModalInteractionCallbackData } from './ModalInteractionCallbackData';
import {
    ModalInteractionCallbackDataFromJSON,
    ModalInteractionCallbackDataFromJSONTyped,
    ModalInteractionCallbackDataToJSON,
} from './ModalInteractionCallbackData';

/**
 * 
 * @export
 * @interface ModalInteractionCallbackRequest
 */
export interface ModalInteractionCallbackRequest {
    /**
     * 
     * @type {any}
     * @memberof ModalInteractionCallbackRequest
     */
    type: any | null;
    /**
     * 
     * @type {ModalInteractionCallbackData}
     * @memberof ModalInteractionCallbackRequest
     */
    data: ModalInteractionCallbackData;
}

/**
 * Check if a given object implements the ModalInteractionCallbackRequest interface.
 */
export function instanceOfModalInteractionCallbackRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ModalInteractionCallbackRequestFromJSON(json: any): ModalInteractionCallbackRequest {
    return ModalInteractionCallbackRequestFromJSONTyped(json, false);
}

export function ModalInteractionCallbackRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModalInteractionCallbackRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'data': ModalInteractionCallbackDataFromJSON(json['data']),
    };
}

export function ModalInteractionCallbackRequestToJSON(value?: ModalInteractionCallbackRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'data': ModalInteractionCallbackDataToJSON(value.data),
    };
}
