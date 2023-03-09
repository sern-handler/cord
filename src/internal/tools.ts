import { WS_URL } from "../constants.js";

export enum HttpVerb {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Patch = 'PATCH',
  Head = 'HEAD',
  Option = 'OPTIONS',
  Connect = 'CONNECT',
  Trace = 'TRACE',
  Copy = 'COPY',
  Link = 'LINK',
  Unlink = 'UNLINK',
  Purge = 'PURGE',
  Lock = 'LOCK',
  Unlock = 'UNLOCK',
  Propfind = 'PROPFIND',
  View = 'VIEW',
}

export type UrlParam<T> = T extends `{${string}}` ? T : never;
export type UrlParams<T extends string> =
  T extends `${infer L}{${infer U}}${infer R}`
    ? [UrlParam<`{${U}}`>, ...UrlParams<L>, ...UrlParams<R>]
    : T extends `{${infer U}}${infer R}`
    ? [UrlParam<`{${U}}`>, ...UrlParams<R>]
    : [];
type RemoveMethod<T> = T extends `${HttpVerb} /${infer U}` ? `/${U}` : T;
export type Inject<T extends Endpoint<Path> | Path> = Partial<
  Record<string, unknown>
> & {
  [K in UrlParams<RemoveMethod<T>>[number]]: unknown;
};
export type Path = `/${string}`;
export type Endpoint<T extends Path> = `${HttpVerb} ${T}`;

export function injectPath<T extends Path>(
  host: T,
  inject: Inject<T>
): string {
  return (
    host.replace(
      /\{.+?\}/g,
      (x) =>
        ([inject[x as never] as string, delete inject[x as never]] as const)[0]
    ) +
    '?' +
    Object.entries(inject)
      .filter(([k]) => !/\{.+?\}/g.test(k))
      .map(
        ([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(String(v))
      )
      .join('&')
  );
}

export const link = (f: (v: string) => string ) => (v: unknown): string => f(String(v));
export const gatewayUrl = link(version => `${WS_URL}/?v=${version}&encoding=json`);
export const baseApiUrl = link(version => `https://discord.com/api/v${version}`);
