import { TokenType } from './structures/common.js';
import { Endpoint, Inject, Path } from './internal/tools.js';
import { HttpVerb, injectPath } from './internal/tools.js';
import * as TE from 'fp-ts/TaskEither'
import * as J from 'fp-ts/Json'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function';
import { baseApiUrl } from './internal/tools.js';
export interface RestOptions {
  tokenType?: TokenType;
  token: string;
  version?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface RequestOptions {
  body?: unknown;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
  integrity?: string;
  keepalive?: boolean;
  method?: HttpVerb;
  signal?: AbortSignal | null;
  window?: null;
}

export class Rest {
  private get host_url(): string {
    return baseApiUrl(this.options.version ?? 10) 
  }

  constructor(private options: RestOptions) {
    this.options.tokenType ||= TokenType.Bot;
    this.options.version ||= 10;
  }

  public request<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,unknown> {
     const safeJson = (o: unknown) => {
        if(typeof o === 'object') {
          return J.stringify(o)
        }
        return E.right(o)
    }
    const body = pipe(
        options.body,
        safeJson
    );

    if(E.isLeft(body)) {
        throw new Error("Invalid body provided : "+body)
    }

    const [method, e] = endpoint.split(' ') as [HttpVerb, T];
    const makeHeaders = (maybeHeaders: Record<string,string> | undefined) => pipe(
            maybeHeaders ?? {},
            header => ({
                ...header,
                authorization : (this.options.tokenType === TokenType.Bot ? 'Bot ' : '') + this.options.token,
                'content-Type': 'application/json',
                'user-agent': 'DiscordBot (https://github.com/sern-handler/cord, 0.0.1)',
            })           
        );

    const processedOptions = {
        ...options,
        method,
        body: body.right ,
        headers: makeHeaders(options.headers) 
    } as RequestInit; 

   return TE.tryCatch(
        () => 
            fetch(this.host_url+injectPath(e, inject), processedOptions)
            .then(res => {
                if (!res.ok) {
                 throw new Error(`fetch failed with status: ${res.status}`);
                }
                return res.json();
            }),
        E.toError
    );
  }

// USER ENDPOINTS
// should decouple this and use elsewhere
//  public getCurrentUser(): Promise<unknown> {
//    const res = this.get(User.Endpoints.GetCurrentUser);
//    return body;
//  }
//
//  public async getUser(id: string): Promise<unknown> {
//    const res = await this.get(User.Endpoints.GetUser, { '{user.id}': id });
//    const body: unknown = await res.json();
//    return body;
//  }
}

