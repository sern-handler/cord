import type { u16, u64 } from '@rqft/rust';
import { i64, u8 } from '@rqft/rust';
import type { Snowflake } from './common.js';

export class Id {
  constructor(private value: Snowflake) {}

  public asI64(): i64 {
    return i64(BigInt(this.value));
  }

  public asUnixTimestamp(): u64 {
    return this.asI64().shr(22).add(1420070400000);
  }

  public asDate(): Date {
    return new Date(this.asUnixTimestamp().into(Number));
  }

  public internalWorkerId(): u8 {
    return this.asI64().bitand(0x3e0000).shr(17).into(u8);
  }

  public internalProcessId(): u8 {
    return this.asI64().bitand(0x1f000).shr(12).into(u8);
  }

  public increment(): u16 {
    return this.asI64().bitand(0xfff);
  }
}
