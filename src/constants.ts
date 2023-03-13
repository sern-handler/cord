export const CDN_URL = 'https://cdn.discordapp.com';
export const WS_URL = 'wss://gateway.discord.gg/'

/**
 * https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
export const enum GatewayIntentBits {
	Guilds = 1 << 0,
	GuildMembers = 1 << 1,
	GuildModeration = 1 << 2,
	/**
	 * @deprecated This is the old name for {@apilink GatewayIntentBits#GuildModeration}
	 */
	GuildBans = GuildModeration,
	GuildEmojisAndStickers = 1 << 3,
	GuildIntegrations = 1 << 4,
	GuildWebhooks = 1 << 5,
	GuildInvites = 1 << 6,
	GuildVoiceStates = 1 << 7,
	GuildPresences = 1 << 8,
	GuildMessages = 1 << 9,
	GuildMessageReactions = 1 << 10,
	GuildMessageTyping = 1 << 11,
	DirectMessages = 1 << 12,
	DirectMessageReactions = 1 << 13,
	DirectMessageTyping = 1 << 14,
	MessageContent = 1 << 15,
	GuildScheduledEvents = 1 << 16,
	AutoModerationConfiguration = 1 << 20,
	AutoModerationExecution = 1 << 21,
}
export const AllIntents = 131071 | GatewayIntentBits.AutoModerationExecution | GatewayIntentBits.AutoModerationConfiguration;
/**
 * Preset for intents:
 * GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages;
 */
export const GenericBotIntents = GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages;
/**
 * Preset for intents:
 * GatewayIntentBits.Guilds | GatewayIntentBits.GuildVoiceStates | GatewayIntentBits.GuildMessages
 */
export const MusicBotIntents = GatewayIntentBits.Guilds | GatewayIntentBits.GuildVoiceStates | GatewayIntentBits.GuildMessages;
/**
 * Preset for intents:
 * GatewayIntentBits.Guilds 
 * | GatewayIntentBits.GuildModeration 
 * | GatewayIntentBits.GuildInvites 
 * | GatewayIntentBits.GuildMessages
 * | GatewayIntentBits.MessageContent
 */
export const ModerationBotIntents = GatewayIntentBits.Guilds 
| GatewayIntentBits.GuildModeration 
| GatewayIntentBits.GuildInvites 
| GatewayIntentBits.GuildMessages
| GatewayIntentBits.MessageContent;

export enum GatewayCloseEventCode {
  UnknownError = 4000,
  UnknownOpCode = 4001,
  DecodeError = 4002,
  NotAuthenticated = 4003,
  AuthenticationFailed = 4004,
  AlreadyAuthenticated = 4005,
  InvalidSeq = 4007,
  Ratelimited = 4008,
  SessionTimedOut = 4009,
  InvalidShard = 4010,
  ShardingRequired = 4011,
  InvalidApiVersion = 4012,
  InvalidIntents = 4013,
  DisallowedIntents = 4014,
}

export enum VoiceOpCode {
  Identify = 0,
  SelectProtocol = 1,
  Ready = 2,
  Heartbeat = 3,
  SessionDescription = 4,
  Speaking = 5,
  HeartbeatAck = 6,
  Resume = 7,
  Hello = 8,
  Resumed = 9,
  ClientDisconnect = 13,
}

export enum VoiceCloseEventCode {
  UnknownOpCode = 4001,
  FailedToDecodePayload = 4002,
  NotAuthenticated = 4003,
  AuthenticationFailed = 4004,
  AlreadyAuthenticated = 4005,
  SessionNoLongerValid = 4006,
  SessionTimeout = 4009,
  ServerNotFound = 4011,
  UnknownProtocol = 4012,
  Disconnected = 4014,
  VoiceServerCrashed = 4015,
  UnknownEncryptionMode = 4016,
}

export enum HttpResponseCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  NotModified = 304,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  TooManyRequests = 429,
  GatewayUnavailable = 502,
  // ServerError = 5xx
}


export enum RpcErrorCode {
  UnknownError = 1000,
  InvalidPayload = 4000,
  InvalidCommand = 4002,
  InvalidGuild = 4003,
  InvalidEvent = 4004,
  InvalidChannel = 4005,
  InvalidPermissions = 4006,
  InvalidClientId = 4007,
  InvalidOrigin = 4008,
  InvalidToken = 4009,
  InvalidUser = 4010,
  OAuth2Error = 5000,
  SelectChannelTimedOut = 5001,
  GetGuildTimedOut = 5002,
  SelectVoiceForceRequired = 5003,
  CaptureShortcutAlreadyListening = 5004,
}

export enum RpcCloseEventCode {
  InvalidClientId = 4000,
  InvalidOrigin = 4001,
  Ratelimited = 4002,
  TokenRevoked = 4003,
  InvalidVersion = 4004,
  InvalidEncoding = 4005,

}

/**
 * The type of component
 * __@PURE__
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
enum MessageComponentTypes {
  ActionRow = 1,
  Button = 2,
  StringSelect = 3,
  InputText = 4,
  UserSelect = 5,
  RoleSelect = 6,
  MentionableSelect = 7,
  ChannelSelect = 8,
}

/**
 * The type of interaction this request is.
 * __@PURE__
 */
enum InteractionType {
  /**
   * A ping.
   */
  Ping = 1,
  /**
   * A command invocation.
   */
  ApplicationCommand = 2,
  /**
   * Usage of a message's component.
   */
  MessageComponent = 3,
  /**
   * An interaction sent when an application command option is filled out.
   */
  ApplicationCommandAutocomplete = 4,
  /**
   * An interaction sent when a modal is submitted.
   */
  ModalSubmit = 5,
}


/**
* The type of response that is being sent.
*/
enum InteractionResponseType {
 /**
  * Acknowledge a `PING`.
  */
 Pong = 1,
 /**
  * Respond with a message, showing the user's input.
  */
 ChannelMessageWithSource = 4,
 /**
  * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
  */
 DeferredChannelMessageWithSource = 5,
 /**
  * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
  */
 DeferredUpdateMessage = 6,
 /**
  * Edit the message the component was attached to.
  */
 UpdateMessage = 7,
 /*
  * Callback for an app to define the results to the user.
  */
 ApplicationCommandAutocompleteResult = 8,
 /*
  * Respond with a modal.
  */
 Modal = 9,
}


