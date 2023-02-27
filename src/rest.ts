import { TokenType } from './structures/common';
import { Endpoint, Inject, Path } from './tools';
import { HttpVerb, injectPath } from './tools';
import * as TE from 'fp-ts/TaskEither'
import * as J from 'fp-ts/Json'
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function';
import { baseApiUrl } from './constants';
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
    const makeHeaders = (maybeHeaders: Record<string,string> | undefined) => pipe(maybeHeaders,
            O.fromNullable,
            O.map(header => ({
                ...header,
                authorization : (this.options.tokenType === TokenType.Bot ? 'Bot ' : '') + this.options.token,
                'content-Type': 'application/json',
                'user-agent': 'DiscordBot (https://github.com/sern-handler/cord, 0.0.1)',
            })),
            O.getOrElse(() => ({}) as Record<string,string>)
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

  public get<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public post<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response>  {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public put<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public delete<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response>  {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public patch<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public head<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public option<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint, 
      inject,
      options
    );
  }

  public connect<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint, 
      inject,
      options
    );
  }

  public trace<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public copy<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public link<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public unlink<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public purge<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
 ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public lock<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public unlock<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public propfind<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
    );
  }

  public view<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T> = {},
    options: RequestOptions = {}
  ): TE.TaskEither<Error,Response> {
    return this.request(
      endpoint,
      inject,
      options
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

