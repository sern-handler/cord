export enum Endpoints {
  CustomEmoji = 'GET /emojis/{emoji.id}.{format}',
  GuildIcon = 'GET /icons/{guild.id}/{guild.icon}.{format}',
  GuildSplash = 'GET /splashes/{guild.id}/{guild.splash}.{format}',
  GuildDiscoverySplash = 'GET /discovery-splashes/{guild.id}/{guild.discovery_splash}.{format}',
  GuildBanner = 'GET /banners/{guild.id}/{guild.banner}.{format}',
  UserBanner = 'GET /banners/{user.id}/{user.banner}.{format}',
  DefaultUserBanner = 'GET /embed/avatars/{user.discriminator}.{format}',
}
