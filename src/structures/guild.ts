import type { Snowflake } from './common';
export interface RawIntegration {
  id: Snowflake;
}



export enum Endpoints {
   CreateGuild = "POST /guilds",
   GetGuild = "GET /guilds/{guild.id}",
   GetGuildPreview = "GET /guilds/{guild.id}/preview",
   Modify = "PATCH /guilds/{guild.id}",
   DeleteGuild = "DELETE /guilds/{guild.id}" ,
   GetGuildChannels = "GET /guilds/{guild.id}/channels",
   CreateGuildChannel = "POST /guilds/{guild.id}/channels",
   ModifyGuildChannelPositions = "PATCH /guilds/{guild.id}/channels",
   ListActiveGuildThreads = "GET /guilds/{guild.id}/threads/active",
   GetGuildMember = "GET /guilds/{guild.id}/members/{user.id}",
   ListGuildMember = "GET /guilds/{guild.id}/members",
   SearchGuildMembers = "GET /guilds/{guild.id}/members/search",
   AddGuildMember = "PUT /guilds/{guild.id}/members/{user.id}",
   ModifyGuildMember = "PATCH /guilds/{guild.id}/members/{user.id}",
   /**
   *  Modifies the current member in a guild.
   *  Returns a 200 with the updated member object on success.
   *  Fires a Guild Member Update Gateway event.
   */
   ModifyCurrentMember = "PATCH /guilds/{guild.id}/members/@me",
}
