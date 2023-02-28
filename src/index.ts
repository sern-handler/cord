import { Rest } from './rest.js';
import { gatewayUrl } from './tools.js';

interface Dependencies {
    rest: Rest;
}

interface GetGatewayBot {
    url: string;
    shards: number;
    session_start_limit: {
       total: number;
       remaining: number;
       reset_after: number;
       max_concurrency: number
    }
}
/**
 * The type of interaction this request is.
 * __@PURE__
 */
enum InteractionType {
  /**
   * A ping.
   */
  Ping = 1,
  /**
   * A command invocation.
   */
  ApplicationCommand = 2,
  /**
   * Usage of a message's component.
   */
  MessageComponent = 3,
  /**
   * An interaction sent when an application command option is filled out.
   */
  ApplicationCommandAutocomplete = 4,
  /**
   * An interaction sent when a modal is submitted.
   */
  ModalSubmit = 5,
}
/**
 * The type of component
 * __@PURE__
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
enum MessageComponentTypes {
  ActionRow = 1,
  Button = 2,
  StringSelect = 3,
  InputText = 4,
  UserSelect = 5,
  RoleSelect = 6,
  MentionableSelect = 7,
  ChannelSelect = 8,
}

/**
* The type of response that is being sent.
*/
enum InteractionResponseType {
 /**
  * Acknowledge a `PING`.
  */
 Pong = 1,
 /**
  * Respond with a message, showing the user's input.
  */
 ChannelMessageWithSource = 4,
 /**
  * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
  */
 DeferredChannelMessageWithSource = 5,
 /**
  * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
  */
 DeferredUpdateMessage = 6,
 /**
  * Edit the message the component was attached to.
  */
 UpdateMessage = 7,
 /*
  * Callback for an app to define the results to the user.
  */
 ApplicationCommandAutocompleteResult = 8,
 /*
  * Respond with a modal.
  */
 Modal = 9,
}

interface Options {
  token : string;
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


export const makeClient = (o : Options) => {
  const rest = new Rest({
    token: o.token
  });
 
  return {
    event: (name: string) => { throw 'unimplemented!' },
    login : () => {
        //for now until we implement login to websocket
  //{
  //     url: 'wss://gateway.discord.gg',
  //     shards: 1,
  //     session_start_limit: {
  //        total: 1000,
  //        remaining: 1000,
  //        reset_after: 0,
  //        max_concurrency: 1
  //    }
  // }
        const task = rest.request("GET /gateway/bot");
    }
  };
};


