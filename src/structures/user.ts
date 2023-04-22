import type { RawApplicationRoleConnectionMetadata } from './application.js';
import { Item, id } from './common.js';
import type { RawIntegration } from './guild/guild.js';
import { Id } from './id.js';
import type { From1 } from '../types/parseable.js';
import * as O from 'fp-ts/Option';
import * as fp from 'fp-ts/function'
import { APIUser } from 'discord-api-types/v10';

//export interface RawUser extends Item {
//  username: string;
//  discriminator: string;
//  avatar?: string;
//  bot?: boolean;
//  system?: boolean;
//  mfa_enabled?: boolean;
//  banner?: string;
//  accent_color?: number;
//  locale?: string;
//  verified?: boolean;
//  email?: string;
//  flags?: number;
//  premium_type?: PremiumType;
//  public_flags?: number;
//}

//todo: turn into type classes
function from(u: APIUser): User {
    return {
        id: id(u),
        bot: Boolean(u.bot),
        system: Boolean(u.system),
        verified: Boolean(u.verified),
        email: O.fromNullable(u.email),
        username: u.username,
        discriminator: u.discriminator,
        avatar: u.avatar!, 
        banner: O.fromNullable(u.banner),
        accentColor: O.fromNullable(u.accent_color),
        get avatarUrl() {
            const base = "https://cdn.discordapp.com/avatars/"
            return fp.pipe(
                this.avatar,
                avatar => `${base}/${this.id}/${avatar}.png`
            )
        },
        get bannerUrl() {
            const base = "https://cdn.discordapp.com/banners/"
            return fp.pipe(
                this.banner,
                O.map(avatar => `${base}/${this.id}/${avatar}.png`)
            )
        },
        //mfaEnabled: u.mfa_enabled!,
        locale: O.fromNullable(u.locale),
        //verified: u.verified!,
        //premiumType: (u.premium_type!) as unknown as PremiumType,
        publicFlags: O.fromNullable(u.public_flags)
    }
}

export const Parseable: From1<APIUser, User> = {
    from
}

export interface User {
  id: Id;
  username: string;
  bot: boolean;
  verified: boolean
  system: boolean;
  discriminator: string;
  avatar: string; 
  avatarUrl: string; 
  banner: O.Option<string>;
  bannerUrl: O.Option<string>;
  accentColor: O.Option<number>,
  //mfaEnabled: boolean,
  locale: O.Option<string>,
  //verified: boolean,
  email: O.Option<string>,
  //premiumType: PremiumType,
  publicFlags: O.Option<number>
}

export enum UserFlag {
  DiscordEmployee = 1 << 0,
  DiscordPartner = 1 << 1,
  HypesquadEvents = 1 << 2,
  BugHunterLevel1 = 1 << 3,
  MfaSms = 1 << 4,
  PremiumPromoDismissed = 1 << 5,
  HypesquadHouseBravery = 1 << 6,
  HypesquadHouseBrilliance = 1 << 7,
  HypersquadHouseBrilliance = 1 << 8,
  EarlySupporter = 1 << 9,
  TeamPseudoUser = 1 << 10,
  InternalApplication = 1 << 11,
  System = 1 << 12,
  HasUnreadUrgentMessages = 1 << 13,
  BugHunterLevel2 = 1 << 14,
  UnderageDeleted = 1 << 15,
  VerifiedBot = 1 << 16,
  VerifiedBotDeveloper = 1 << 17,
  CertifiedModerator = 1 << 18,
  BotHttpInteractions = 1 << 19,
  Spammer = 1 << 20,
  DisablePremium = 1 << 21,
  ActiveDeveloper = 1 << 22,
  HighGlobalRateLimit = 1 << 33,
  Deleted = 1 << 34,
  DisableSuspiciousActivity = 1 << 35,
  SelfDeleted = 1 << 36,
  PremiumDiscriminator = 1 << 37,
  UsedDesktopClient = 1 << 38,
  UsedWebClient = 1 << 39,
  UsedMobileClient = 1 << 40,
  Disabled = 1 << 41,
  VerifiedEmail = 1 << 43,
  Quarantined = 1 << 44,
  Collaborator = 1 << 50,
  RestrictedCollaborator = 1 << 51,
}

export enum PremiumType {
  None,
  Classic,
  Nitro,
  Basic,
}
//todo: implement Parseable
export interface RawConnection extends Item {
  name: string;
  type: ConnectionService;
  revoked?: boolean;
  integrations?: Array<RawIntegration>;
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  two_way_link: boolean;
  visibility: ConnectionVisibility;
}

export enum ConnectionService {
  BattleNet = 'battlenet',
  Ebay = 'ebay',
  EpicGames = 'epicgames',
  Facebook = 'facebook',
  GitHub = 'github',
  Instagram = 'instagram',
  LeagueOfLegends = 'leagueoflegends',
  PayPal = 'paypal',
  PlayStation = 'playstation',
  Reddit = 'reddit',
  RiotGames = 'riotgames',
  Spotify = 'spotify',
  Steam = 'steam',
  TikTok = 'tiktok',
  Twitch = 'twitch',
  Twitter = 'twitter',
  XBox = 'xbox',
  YouTube = 'youtube',
}

export enum ConnectionVisibility {
  None,
  Everyone,
}

export interface RawApplicationRoleConnection {
  platform_name?: string;
  playform_username?: string;
  metadata?: RawApplicationRoleConnectionMetadata;
}

export enum Endpoints {
  GetCurrentUser = 'GET /users/@me',
  GetUser = 'GET /users/{user.id}',
  ModifyCurrentUser = 'PATCH /users/@me',
  GetCurrentUserGuilds = 'GET /users/@me/guilds',
  GetCurrentUserGuildMember = 'GET /users/@me/guilds/{guild.id}/member',
  LeaveGuild = '/users/@me/guilds/{guild.id}',
  CreateDm = 'POST /users/@me/channels',
  CreateGroupDm = 'POST /users/@me/channels',
  GetUserConnections = 'GET /users/@me/connections',
  GetUserApplicationRoleConnection = 'GET /users/@me/applications/{application.id}/role-connection',
  UpdateUserApplicationRoleConnection = 'PUT /users/@me/applications/{application.id}/role-connection',
}

