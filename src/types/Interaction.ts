/**
 * The type of interaction this request is.
 * __@PURE__
 */
export enum InteractionType {
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