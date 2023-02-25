import type { TokenType } from './structures/common';
import type { Endpoint, HttpVerb, Inject, Path } from './tools';
import { inject_path } from './tools';

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
  private get host_url(): string {
    return 'https://discord.com/api/v' + (this.options.version || 10);
  }

  constructor(private options: RestOptions) {}

  public async request<T extends Path>(
    endpoint: Endpoint<T>,
    inject: Inject<T>,
    options: RequestOptions = {}
  ): Promise<Response> {
    if (typeof options.body === 'object') {
      options.body = JSON.stringify(options.body);
    }

    const [method, e] = endpoint.split(' ') as [HttpVerb, T];

    options.method = method;

    return fetch(
      this.host_url + inject_path(e, inject),
      options as RequestInit
    );
  }
}
