import { Snowflake } from "discord-api-types/v10";
import { Id } from "./id.js";


export interface Item {
  id: Snowflake;
}

export function id(item: Item): Id {
    return new Id(item.id)
}

export enum Locales {
  Indonesian = 'id',
  Danish = 'da',
  German = 'de',
  French = 'fr',
  Croatian = 'hr',
  Italian = 'it',
  Lithuanian = 'lt',
  Hungarian = 'hu',
  Dutch = 'nl',
  Norwegian = 'no',
  Polish = 'pl',
  Finnish = 'fi',
  Vietnamese = 'vi',
  Turkish = 'tr',
  Czech = 'cs',
  Greek = 'el',
  Bulgarian = 'bg',
  Russian = 'ru',
  Ukrainian = 'uk',
  Hindi = 'hi',
  Thai = 'th',
  Japanese = 'ja',
  Korean = 'ko',
  EnglishUk = 'en-GB',
  EnglishUs = 'en-US',
  Spanish = 'es-es',
  Portugese = 'pt-BR',
  Romanian = 'ro',
  Swedish = 'sv',
  ChineseChina = 'zh-CN',
  ChineseTaiwan = 'zh-TW',
}
export type LocaleString = `${Locales}`
export enum TokenType {
  User = 'Bearer',
  Bot = 'Bot',
}
