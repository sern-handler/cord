import type { RawApplicationRoleConnectionMetadata } from './application.js';
import type { Item } from './common.js';
import type { RawIntegration } from './guild.js';

export interface RawUser extends Item {
  // id: Snowflake;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: PremiumType;
  public_flags?: number;
}
interface From<T> {
    from(value : T): From<T> 
}

interface Into<T> {
    into() : T
}

function id() {

}

function username() {

}

function discriminator() {

}

function avatar() {

}

function avatarUrl() {

}


// class User {
//  constructor(private raw: RawUser) {}
//  public get id(): Id {
//    return new Id(this.raw.id);
//  }
//
//  public get username(): string {
//    return this.raw.id;
//  }
//
//  public get discriminator(): string {
//    return this.raw.discriminator;
//  }
//
//  public get avatar(): Option<string> {
//    if (this.raw.avatar) {
//      return Some(this.raw.avatar);
//    }
//
//    return None;
//  }
//
//  public get avatarUrl(): Option<string> {
//    return unimplemented();
//  }
//}

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

export interface RawConnection extends Item {
  // id: Snowflake;
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

