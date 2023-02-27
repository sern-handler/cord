export enum GuildEndpoints {
  CustomEmoji = 'GET /emojis/{emoji.id}.{format}',
  GuildIcon = 'GET /icons/{guild.id}/{guild.icon}.{format}',
  GuildSplash = 'GET /splashes/{guild.id}/{guild.splash}.{format}',
  GuildDiscoverySplash = 'GET /discovery-splashes/{guild.id}/{guild.discovery_splash}.{format}',
  GuildBanner = 'GET /banners/{guild.id}/{guild.banner}.{format}',
  UserBanner = 'GET /banners/{user.id}/{user.banner}.{format}',
  DefaultUserBanner = 'GET /embed/avatars/{user.discriminator}.{format}',
}

export enum UserEndpoints {
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
