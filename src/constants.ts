import { link } from "./tools.js";

export const baseApiUrl = link(version => `https://discord.com/api/v${version}`);
export const CDN_URL = 'https://cdn.discordapp.com';
export const WS_URL = 'wss://gateway.discord.gg/'
export const gatewayUrl = link(version => `${WS_URL}/?v=${version}&encoding=json`);
