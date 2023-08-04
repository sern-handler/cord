import { createHeart } from './websocket.js'
import { WebSocket } from 'ws'
import { filter, map } from 'rxjs';
import { makeWSUrl } from './internal/tools.js';
import { Dispatch, GatewayOpcodes } from './types/dispatch.js';
import { Fetcher } from 'openapi-typescript-fetch'
import type { paths } from './schema.d.ts'

export interface GetGatewayBot {
    url: string;
    shards: number;
    session_start_limit: {
       total: number;
       remaining: number;
       reset_after: number;
       max_concurrency: number
    }
}

export interface Options {
  token : string;
  identify : {
    intents : number,
    properties?: {
        os: string;
        browser: string;
        device: string;
    }
  }
}




export const makeClient = async (options : Options) => {

   const fetcher = Fetcher.for<paths>()
   fetcher.configure({
     baseUrl: 'https://discord.com/api/v10/',
     init: {
       headers: {
           'Authorization': 'Bot '+options.token
       }
     }
  })

  const getGatewayBot = fetcher
       .path('/gateway/bot')
       .method('get')
       .create()


  const response = await getGatewayBot({})


  const ws = new WebSocket(makeWSUrl(response.url, 10, 'json'), { perMessageDeflate: false });
  const heart = createHeart(ws, options);
  return {
    on: (name: string) => {
        return heart.bloodStream$
            .pipe(
                filter(m => m.op === GatewayOpcodes.Dispatch && m.t === name),
                map(m => (m as Dispatch).d)
            ) 
    },
    login: () => heart.start().subscribe(),
  };
};




