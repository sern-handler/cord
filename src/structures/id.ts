import { DISCORD_EPOCH } from '../constants.js';
import type { Snowflake } from './common.js';
import * as assert from 'node:assert'


// https://discord.com/developers/docs/reference#snowflakes
export class Id implements Iterable<bigint | number> {
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
    return this.snowflake & BigInt(0xfff);
  }

  [Symbol.iterator]() {
    return [this.asUnixTimestamp, this.internalWorkerId, this.internalProcessId, this.increment].values()
  }

}
