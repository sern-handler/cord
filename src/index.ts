import * as fp from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { Rest } from './rest.js';
import { createHeart } from './websocket.js'
import { WebSocket } from 'ws'
import { filter, map } from 'rxjs';
import { makeWSUrl } from './internal/tools.js';
import { Dispatch, GatewayOpcodes } from './types/dispatch.js';


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
  const rest = new Rest({
    token: options.token
  });

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

  /*
   * @NeedsRefactor
   * Caches the url received from gateway/bot and also its payload.
   * Also caches the Gateway Bot Payload and then returns the full url
   * for a websocket's first 
   * */
  const url = await fp.pipe(
      rest.request("GET /gateway/bot") as TE.TaskEither<Error, GetGatewayBot>,
      TE.map(p => makeWSUrl(p.url, 10, 'json')),
      TE.getOrElse((e) => { throw e }),
    )();

  const ws = new WebSocket(url, { perMessageDeflate: false });
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




