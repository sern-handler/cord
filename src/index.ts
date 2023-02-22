import { webSocket } from 'rxjs/webSocket'

/**
 * The type of interaction this request is.
 * __@PURE__
 */
enum InteractionType {
  /**
   * A ping.
   */
  PING = 1,
  /**
   * A command invocation.
   */
  APPLICATION_COMMAND = 2,
  /**
   * Usage of a message's component.
   */
  MESSAGE_COMPONENT = 3,
  /**
   * An interaction sent when an application command option is filled out.
   */
  APPLICATION_COMMAND_AUTOCOMPLETE = 4,
  /**
   * An interaction sent when a modal is submitted.
   */
  MODAL_SUBMIT = 5,
}
/**
 * The type of component
 * __@PURE__
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
enum MessageComponentTypes {
  ACTION_ROW = 1,
  BUTTON = 2,
  STRING_SELECT = 3,
  INPUT_TEXT = 4,
  USER_SELECT = 5,
  ROLE_SELECT = 6,
  MENTIONABLE_SELECT = 7,
  CHANNEL_SELECT = 8,
}

/**
* The type of response that is being sent.
*/
enum InteractionResponseType {
 /**
  * Acknowledge a `PING`.
  */
 PONG = 1,
 /**
  * Respond with a message, showing the user's input.
  */
 CHANNEL_MESSAGE_WITH_SOURCE = 4,
 /**
  * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
  */
 DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
 /**
  * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
  */
 DEFERRED_UPDATE_MESSAGE = 6,
 /**
  * Edit the message the component was attached to.
  */
 UPDATE_MESSAGE = 7,
 /*
  * Callback for an app to define the results to the user.
  */
 APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
 /*
  * Respond with a modal.
  */
 MODAL = 9,
}

interface Options {
  token : string
}
/**
 {
  "op": 2,
  "d": {
    "token": "my_token",
    "properties": {
      "os": "linux",
      "browser": "disco",
      "device": "disco"
    },
    "compress": true,
    "large_threshold": 250,
    "shard": [0, 1],
    "presence": {
      "activities": [{
        "name": "Cards Against Humanity",
        "type": 0
      }],
      "status": "dnd",
      "since": 91879201,
      "afk": false
    },
    // This intent represents 1 << 0 for GUILDS, 1 << 1 for GUILD_MEMBERS, and 1 << 2 for GUILD_BANS
    // This connection will only receive the events defined in those three intents
    "intents": 7
  }
}
**/


const link = (f: (v: string) => string ) => (v: string) => f(v);

const discordLink = link(version => `https://discord.com/api/v${version}`);

const wssGatewayLink = link(version => `wss://gateway.discord.gg/?v=${version}&encoding=json`)

export const Client = (o : Options) => {


}



