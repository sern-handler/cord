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

