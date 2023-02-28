import { Rest } from './rest.js';
import { gatewayUrl } from './tools.js';

import type {} from '@'

interface Dependencies {
  rest: Rest;
}

interface GetGatewayBot {
  url: string;
  shards: number;
  session_start_limit: {
    total: number;
    remaining: number;
    reset_after: number;
    max_concurrency: number
  }
}


/**
 {
  "op": 2,
  "d": {
    "token": "my_token",
    "properties": {
      "os": "linux",
      "browser": "disco",
      "device": "disco"
    },
    "compress": true,
    "large_threshold": 250,
    "shard": [0, 1],
    "presence": {
      "activities": [{
        "name": "Cards Against Humanity",
        "type": 0
      }],
      "status": "dnd",
      "since": 91879201,
      "afk": false
    },
    // This intent represents 1 << 0 for GUILDS, 1 << 1 for GUILD_MEMBERS, and 1 << 2 for GUILD_BANS
    // This connection will only receive the events defined in those three intents
    "intents": 7
  }
}
**/


export const makeClient = (o: Options) => {
  const rest = new Rest({
    token: o.token
  });

  return {
    event: (name: string) => { throw 'unimplemented!' },
    login: () => {
      //for now until we implement login to websocket
      //{
      //     url: 'wss://gateway.discord.gg',
      //     shards: 1,
      //     session_start_limit: {
      //        total: 1000,
      //        remaining: 1000,
      //        reset_after: 0,
      //        max_concurrency: 1
      //    }
      // }
      const task = rest.request("GET /gateway/bot");
    }
  };
};