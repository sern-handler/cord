import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import * as O from 'fp-ts/Option'
import { Rest } from './rest.js';
import { createHeart, GatewayOpcodes } from './websocket.js'
import { WebSocket } from 'ws'
import { BehaviorSubject, filter } from 'rxjs';
import { makeWSUrl } from './internal/tools.js';
import * as User from './structures/user.js';


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

  const gatewayBotUrl = new BehaviorSubject<O.Option<string>>(O.none);
  const gatewayBotPayload = new BehaviorSubject<O.Option<GetGatewayBot>>(O.none);
  const cacheUrl = (payload:GetGatewayBot):TE.TaskEither<Error, GetGatewayBot> => {
    gatewayBotUrl.next(O.some(payload.url));
    return TE.right(payload);
  }

  const cacheGatewayPayload = (payload: GetGatewayBot) : TE.TaskEither<Error, GetGatewayBot> => {
    gatewayBotPayload.next(O.some(payload));
    return TE.right(payload)
  }

  /*
   * @NeedsRefactor
   * Caches the url received from gateway/bot and also its payload.
   * Also caches the Gateway Bot Payload and then returns the full url
   * for a websocket's first 
   * */
  const url = await pipe(
      rest.request("GET /gateway/bot") as TE.TaskEither<Error, GetGatewayBot>,
      TE.chainFirst(cacheUrl),
      TE.chainFirst(cacheGatewayPayload),
      TE.map(p => makeWSUrl(p.url, 10, 'json')),
      TE.getOrElse((e) => { throw e }),
    )();
  const ws = new WebSocket(url, { perMessageDeflate: false });
  const heart = createHeart(ws, options);
  return {
    on:(name: string) => {
        return heart.bloodStream$
            .pipe(
                filter(m => m.op === GatewayOpcodes.Dispatch && m.t === name)
            )
    },
    login: () => heart.start().subscribe({ error: console.error }),
    clientUser: () => rest.request(User.Endpoints.GetCurrentUser) as TE.TaskEither<Error, User.RawUser>
  };
};




