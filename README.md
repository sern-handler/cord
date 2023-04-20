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



# Architecture

## Install size
I realize the install size could be a little chunky, but thats okay. Since @sern/cord supports `ESM` only, treeshaking is easy. I've included rxjs and fp-ts as dependencies. Everything is treeshakable, and most applications will shave a good chunk of extra bundle code.

## Data 
Following discord-api-types, I create serncord's datastructure wrapped in Option<T>, helper classes, and more. The structures should have no side effects and external IO. Unsure about the full implementation yet. Type classes? only functions? Trait inspired?
Each discord api data structure comes included with (names subject to change)
- a Parseable object, API -> Serncord structure 
- a Stringable object. Serncord structure -> string (json) 
- REST functions, which will be able to make REST calls relating to the discord structure
- Semigroups
    - [a good introduction](https://dev.to/gcanti/getting-started-with-fp-ts-semigroup-2mf7)

## Gateway
I realize some of the API structures are different: Gateway objects add extra fields for some reason. Each data structure's semigroup will solve the data structure's variances among gateway events!
serncord supports websocket dispatch bots at the moment. Gateway is automatically handled with rxjs and the api for this is similar to event emitter. 
If serverless support were handled in the future, gateway obviously isnt needed.

## Caching
Developers should have full control over caching. serncord will provide interfaces and or functions to help create caches.
More to come

## Organization
TODO
