import { DISCORD_EPOCH } from '../constants.js';
import type { Snowflake } from './common.js';
import * as assert from 'node:assert'


// https://discord.com/developers/docs/reference#snowflakes
export class Id {
  snowflake: bigint;
  constructor(value: Snowflake) {
    this.snowflake = BigInt(value)
    assert.ok(this.snowflake >= 4194304, "Snowflake too small")
  }


  public asUnixTimestamp(): number {
    const milliseconds = this.snowflake >> 22n
    return Number(milliseconds) + DISCORD_EPOCH;
  }

  public asDate(): Date {
    return new Date(this.asUnixTimestamp());
  }

  public internalWorkerId(){
    return Number(this.snowflake & 4063232n) >> 17;
  }

  public internalProcessId() {
    return Number(this.snowflake & BigInt(0x1f000)) >> 12;
  }

  public increment(){
    return this.snowflake & BigInt(0xfff);
  }

}
