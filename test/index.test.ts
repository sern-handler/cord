import { describe, expect, it } from 'vitest'
import { link } from '../src/internal/tools'
describe('link generator', () => {
    
    it("should make version x api base link", () => {
        const version = [7,8,9,10];
        for(const v of version) {
            const discordAPILink = link(v => `https://discord.com/api/v${v}`);
            expect(discordAPILink(v)).toBe(`https://discord.com/api/v${v}`)
        }
    })

})
