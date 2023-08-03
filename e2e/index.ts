import { makeClient } from '../src/index.js'
import { EOL } from 'node:os'
import { existsSync, readFileSync } from 'fs';
import { GatewayIntentBits, GenericBotIntents } from '../src/constants.js';
import { map, take } from 'rxjs';
//import * as MessageCreate from '../src/structures/message/gateway/MESSAGE_CREATE.js'
//import * as Ready from '../src/structures/ready.js'
function load<T extends object>(struct: Struct<T>, path: string = '.env', inject: boolean = true): T {
  const out: T = {} as never;

  if (!existsSync(path)) {
    throw new Error(`Cannot read contents of '${path}': File does not exist`)
  }

  const file = readFileSync(path);
  const lines = file.toString().split(EOL);

  const raw: Record<string, string> = {};

  for (const line of lines) {
    const [key, value] = [line.split('=')[0], line.split('=').slice(1).join('=')] as [string, string];

    let real_value = value;

    try {
      real_value = JSON.stringify(JSON.parse(value));
    } catch {
      void real_value;
    }

    raw[key] = value 
  }

  for (const key in struct) {
    if (!(key in raw)) {
      throw new Error(`Cannot map key '${key}': Key does not exist`);
    }

    // safety(as): assertion above guarantees string
    out[key] = struct[key](raw[key] as string)
  }

  if (inject) {
    Object.assign(process.env, out);
  }

  return out;
}

export type Struct<T extends object> = {
  [P in keyof T]: (str: string) => T[P];
}
load({ DISCORD_TOKEN: (e) => e })

const bot = await makeClient({
    token: process.env.DISCORD_TOKEN!,
    identify: {
        intents: GenericBotIntents | GatewayIntentBits.MessageContent
    }
});

bot.login()

bot.on('READY').pipe(take(1)).subscribe(console.log)
//bot.on('MESSAGE_CREATE').pipe(
        //map(MessageCreate.Parseable.from)
    //)
    //.subscribe(console.log)




