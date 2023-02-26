import { link } from "./tools.js";

export const baseApiUrl = link(version => `https://discord.com/api/v${version}`);
export const CDN_URL = 'https://cdn.discordapp.com';
