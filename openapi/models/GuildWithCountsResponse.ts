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
 * @interface GuildWithCountsResponse
 */
export interface GuildWithCountsResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    icon?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    homeHeader?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    splash?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    discoverySplash?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    features: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    banner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    ownerId: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    applicationId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    region: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    afkChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    afkTimeout: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    systemChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    systemChannelFlags: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    widgetEnabled: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    widgetChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    verificationLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    roles: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    defaultMessageNotifications: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    mfaLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    explicitContentFilter: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    maxPresences?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    maxMembers?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    maxStageVideoChannelUsers?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    maxVideoChannelUsers?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    vanityUrlCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    premiumTier: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    premiumSubscriptionCount: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    preferredLocale: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    rulesChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    safetyAlertsChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    publicUpdatesChannelId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    premiumProgressBarEnabled: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    nsfw: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    nsfwLevel: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    emojis: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    stickers: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    approximateMemberCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof GuildWithCountsResponse
     */
    approximatePresenceCount?: any | null;
}

/**
 * Check if a given object implements the GuildWithCountsResponse interface.
 */
export function instanceOfGuildWithCountsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "features" in value;
    isInstance = isInstance && "ownerId" in value;
    isInstance = isInstance && "region" in value;
    isInstance = isInstance && "afkTimeout" in value;
    isInstance = isInstance && "systemChannelFlags" in value;
    isInstance = isInstance && "widgetEnabled" in value;
    isInstance = isInstance && "verificationLevel" in value;
    isInstance = isInstance && "roles" in value;
    isInstance = isInstance && "defaultMessageNotifications" in value;
    isInstance = isInstance && "mfaLevel" in value;
    isInstance = isInstance && "explicitContentFilter" in value;
    isInstance = isInstance && "premiumTier" in value;
    isInstance = isInstance && "premiumSubscriptionCount" in value;
    isInstance = isInstance && "preferredLocale" in value;
    isInstance = isInstance && "premiumProgressBarEnabled" in value;
    isInstance = isInstance && "nsfw" in value;
    isInstance = isInstance && "nsfwLevel" in value;
    isInstance = isInstance && "emojis" in value;
    isInstance = isInstance && "stickers" in value;

    return isInstance;
}

export function GuildWithCountsResponseFromJSON(json: any): GuildWithCountsResponse {
    return GuildWithCountsResponseFromJSONTyped(json, false);
}

export function GuildWithCountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuildWithCountsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'homeHeader': !exists(json, 'home_header') ? undefined : json['home_header'],
        'splash': !exists(json, 'splash') ? undefined : json['splash'],
        'discoverySplash': !exists(json, 'discovery_splash') ? undefined : json['discovery_splash'],
        'features': json['features'],
        'banner': !exists(json, 'banner') ? undefined : json['banner'],
        'ownerId': json['owner_id'],
        'applicationId': !exists(json, 'application_id') ? undefined : json['application_id'],
        'region': json['region'],
        'afkChannelId': !exists(json, 'afk_channel_id') ? undefined : json['afk_channel_id'],
        'afkTimeout': json['afk_timeout'],
        'systemChannelId': !exists(json, 'system_channel_id') ? undefined : json['system_channel_id'],
        'systemChannelFlags': json['system_channel_flags'],
        'widgetEnabled': json['widget_enabled'],
        'widgetChannelId': !exists(json, 'widget_channel_id') ? undefined : json['widget_channel_id'],
        'verificationLevel': json['verification_level'],
        'roles': json['roles'],
        'defaultMessageNotifications': json['default_message_notifications'],
        'mfaLevel': json['mfa_level'],
        'explicitContentFilter': json['explicit_content_filter'],
        'maxPresences': !exists(json, 'max_presences') ? undefined : json['max_presences'],
        'maxMembers': !exists(json, 'max_members') ? undefined : json['max_members'],
        'maxStageVideoChannelUsers': !exists(json, 'max_stage_video_channel_users') ? undefined : json['max_stage_video_channel_users'],
        'maxVideoChannelUsers': !exists(json, 'max_video_channel_users') ? undefined : json['max_video_channel_users'],
        'vanityUrlCode': !exists(json, 'vanity_url_code') ? undefined : json['vanity_url_code'],
        'premiumTier': json['premium_tier'],
        'premiumSubscriptionCount': json['premium_subscription_count'],
        'preferredLocale': json['preferred_locale'],
        'rulesChannelId': !exists(json, 'rules_channel_id') ? undefined : json['rules_channel_id'],
        'safetyAlertsChannelId': !exists(json, 'safety_alerts_channel_id') ? undefined : json['safety_alerts_channel_id'],
        'publicUpdatesChannelId': !exists(json, 'public_updates_channel_id') ? undefined : json['public_updates_channel_id'],
        'premiumProgressBarEnabled': json['premium_progress_bar_enabled'],
        'nsfw': json['nsfw'],
        'nsfwLevel': json['nsfw_level'],
        'emojis': json['emojis'],
        'stickers': json['stickers'],
        'approximateMemberCount': !exists(json, 'approximate_member_count') ? undefined : json['approximate_member_count'],
        'approximatePresenceCount': !exists(json, 'approximate_presence_count') ? undefined : json['approximate_presence_count'],
    };
}

export function GuildWithCountsResponseToJSON(value?: GuildWithCountsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'icon': value.icon,
        'description': value.description,
        'home_header': value.homeHeader,
        'splash': value.splash,
        'discovery_splash': value.discoverySplash,
        'features': value.features,
        'banner': value.banner,
        'owner_id': value.ownerId,
        'application_id': value.applicationId,
        'region': value.region,
        'afk_channel_id': value.afkChannelId,
        'afk_timeout': value.afkTimeout,
        'system_channel_id': value.systemChannelId,
        'system_channel_flags': value.systemChannelFlags,
        'widget_enabled': value.widgetEnabled,
        'widget_channel_id': value.widgetChannelId,
        'verification_level': value.verificationLevel,
        'roles': value.roles,
        'default_message_notifications': value.defaultMessageNotifications,
        'mfa_level': value.mfaLevel,
        'explicit_content_filter': value.explicitContentFilter,
        'max_presences': value.maxPresences,
        'max_members': value.maxMembers,
        'max_stage_video_channel_users': value.maxStageVideoChannelUsers,
        'max_video_channel_users': value.maxVideoChannelUsers,
        'vanity_url_code': value.vanityUrlCode,
        'premium_tier': value.premiumTier,
        'premium_subscription_count': value.premiumSubscriptionCount,
        'preferred_locale': value.preferredLocale,
        'rules_channel_id': value.rulesChannelId,
        'safety_alerts_channel_id': value.safetyAlertsChannelId,
        'public_updates_channel_id': value.publicUpdatesChannelId,
        'premium_progress_bar_enabled': value.premiumProgressBarEnabled,
        'nsfw': value.nsfw,
        'nsfw_level': value.nsfwLevel,
        'emojis': value.emojis,
        'stickers': value.stickers,
        'approximate_member_count': value.approximateMemberCount,
        'approximate_presence_count': value.approximatePresenceCount,
    };
}

