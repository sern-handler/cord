export interface RestOptions {
  token_type: TokenType;
  token: string;
  version?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface RequestOptions {
  body?: unknown;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: Record<string, string>;
  integrity?: string;
  keepalive?: boolean;
  method?: HttpVerb;
  signal?: AbortSignal | null;
  window?: null;
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
  token: string;
}