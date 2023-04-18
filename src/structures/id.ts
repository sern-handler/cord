import { DISCORD_EPOCH } from '../constants.js';
import * as assert from 'node:assert'
import * as O from 'fp-ts/Option'
import * as fp from 'fp-ts/function'
import { Snowflake } from 'discord-api-types/v10';
// https://discord.com/developers/docs/reference#snowflakes
export class Id implements Iterable<number> {
  snowflake: bigint;
  constructor(value: Snowflake) {
    this.snowflake = BigInt(value)
    assert.ok(this.snowflake >= 4194304, "Snowflake too small")
  }

  public get asUnixTimestamp(): number {
    const milliseconds = this.snowflake >> 22n
    return Number(milliseconds) + DISCORD_EPOCH;
  }

  public get asDate(): Date {
    return new Date(this.asUnixTimestamp);
  }

  public get internalWorkerId(){
    return Number(this.snowflake & 4063232n) >> 17;
  }

  public get internalProcessId() {
    return Number(this.snowflake & BigInt(0x1f000)) >> 12;
  }

  public get increment(){
    return Number(this.snowflake & BigInt(0xfff));
  }

  [Symbol.iterator]() {
    return ([this.asUnixTimestamp, this.internalWorkerId, this.internalProcessId, this.increment] as const).values()
  }

  toString() {
    return this.snowflake.toString()
  }

}

type MaybeSnowflakeToId = (s: Snowflake | null | undefined) => O.Option<Id>
export const nullableSnowflakeToId: MaybeSnowflakeToId = fp.flow(
    O.fromNullable,
    O.map(s  => new Id(s))
);
