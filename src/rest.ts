import type { TokenType } from './structures/common';
import * as TE from 'fp-ts/TaskEither';
import * as J from 'fp-ts/Json';
import * as E from 'fp-ts/Either'
import type { Endpoint, HttpVerb, Inject, Path } from './tools';
import { inject_path } from './tools';
import { pipe } from 'fp-ts/lib/function';
import { baseApiUrl } from './constants.js'
export interface RestOptions {
  token_type: TokenType;
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
  constructor(private options: RestOptions) {}

  public request<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T>,
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
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
    
    const processedOptions = { ...options, method, body: body.right } as RequestInit;
    return TE.tryCatch(
        () => fetch(baseApiUrl(10) + inject_path(e, inject), processedOptions), 
        (error) => new Error(String(error))      
    );
  }
}
