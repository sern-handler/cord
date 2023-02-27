import { RawIntegration } from "src/structures/Guild";
import { Item } from "src/common";

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

export enum NitroType {
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
  BattleNet = 'Battle.net',
  Ebay = 'eBay',
  EpicGames = 'EpicGames',
  Facebook = 'Facebook',
  GitHub = 'GitHub',
  Instagram = 'Instagram',
  LeagueOfLegends = 'League Of Legends',
  PayPal = 'PayPal',
  PlayStation = 'PlayStation',
  Reddit = 'Reddit',
  RiotGames = 'Riot Games',
  Spotify = 'Spotify',
  Steam = 'Steam',
  TikTok = 'Tiktok',
  Twitch = 'Twitch',
  Twitter = 'Twitter',
  XBox = 'Xbox',
  YouTube = 'YouTube',
}

export enum ConnectionVisibility {
  None,
  Everyone,
}