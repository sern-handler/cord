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


const fetcher = Fetcher.for<paths>()


export const makeClient = async (options : Options) => {
    fetcher.configure({
      baseUrl: 'https://discord.com/api/v10/',
      init: {
        headers: {
        },
      },
      use: []// middlewares
    })
//  const rest = new DefaultApi( new Configuration({ 
//     headers: {
//        'Authorization': 'Bot '+options.token
//     }
//  }));

  //const gatewayBotUrl = new BehaviorSubject<O.Option<string>>(O.none);
  //const gatewayBotPayload = new BehaviorSubject<O.Option<GetGatewayBot>>(O.none);
  // const cacheUrl = (payload:GetGatewayBot):TE.TaskEither<Error, GetGatewayBot> => {
  // gatewayBotUrl.next(O.some(payload.url));
  //  return TE.right(payload);
  // }

  // const cacheGatewayPayload = (payload: GetGatewayBot) : TE.TaskEither<Error, GetGatewayBot> => {
  //  gatewayBotPayload.next(O.some(payload));
  //  return TE.right(payload)
  // }
  //@ts-ignore
  const response = await rest.getBotGateway()

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




