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
 * @interface PrivateChannelRequestPartial
 */
export interface PrivateChannelRequestPartial {
    /**
     * 
     * @type {any}
     * @memberof PrivateChannelRequestPartial
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PrivateChannelRequestPartial
     */
    icon?: any | null;
}

/**
 * Check if a given object implements the PrivateChannelRequestPartial interface.
 */
export function instanceOfPrivateChannelRequestPartial(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrivateChannelRequestPartialFromJSON(json: any): PrivateChannelRequestPartial {
    return PrivateChannelRequestPartialFromJSONTyped(json, false);
}

export function PrivateChannelRequestPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivateChannelRequestPartial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function PrivateChannelRequestPartialToJSON(value?: PrivateChannelRequestPartial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'icon': value.icon,
    };
}

