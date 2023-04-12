import { describe, expect, it } from 'vitest'
import { link } from '../src/internal/tools'
import { Id } from '../src/structures/id'
describe('link generator', () => {
    it("should make version x api base link", () => {
        const version = [7,8,9,10];
        for(const v of version) {
            const discordAPILink = link(v => `https://discord.com/api/v${v}`);
            expect(discordAPILink(v)).toBe(`https://discord.com/api/v${v}`)
        }
    })

})

describe('Id', () => {
    it("should decode a snowflake properly", () => {
        const id = new Id("182326315813306368")
        expect(id.asUnixTimestamp).toBe(1463540381149)
        expect(id.snowflake).toBe(BigInt("182326315813306368"))
        expect(id.asDate.toISOString()).toBe("2016-05-18T02:59:41.149Z")
        expect(id.internalWorkerId).toBe(1)
        expect(id.internalProcessId).toBe(0)
    })
    it("should implementIterable", () => {
        const [timestampMs, workerId, pid, inc ] = new Id("504698587221852172")
        expect(timestampMs).toBe(1540399920040)
        expect(workerId).toBe(0)
        expect(pid).toBe(0)
        expect(inc).toBe(12)
    })
})
