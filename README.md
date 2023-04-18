# Main goals

- [ ] better caching system. (if any)
    - discord.js caching can lead to bloated applications
    - cache is inconsistent at best
- [ ] lightweight
    - Should not be a huge dependency
- [ ] declarative
    - Many things in discord api can be expressed in a declarative matter using rxjs or something along those lines.
    - For example, editing embeds could prove easier if given a declarative interface
    - Another example are the reactive nature of websockets. Using rxjs, create composable and reusable streams of data
- [ ] Compatible with our framework (@sern/handler)
    - accomplishing the goal of cross library usability lets sern be a flexible choice for making bots
- [ ] Fault tolerant and easy sharding
    - due to the immutable nature of functional programming and nice error handling with the idea of "errors as values", error handling should be 
    easy and everything predictable
- [ ] API completeness
    - most libraries dont actually cover every corner of the discord api


# Testing
- Node v18.x.x 
- pnpm
- Ensure you have a .env file in root directory
    - DISCORD_TOKEN=yourtokenhere
- Build and watch with `pnpm run dev`
- Run test bot with `pnpm start`
