import { APIBaseInteraction, InteractionType } from 'discord-api-types/v10'
import { Item, LocaleString } from '../common';
import { Id } from '../id';
import * as O from 'fp-ts/Option'
import { User } from '../user';
import { CoreMessage } from '../message/message';

interface CoreInteraction<Type, Data> {
    id: Id,
    /**
      * ID of the application this interaction is for
      */
    applicationId: Id;
    /**
     * The type of interaction
     */
    type: Type;
    /**
     * The command data payload
     */
    data: O.Option<Data>;
    /**
     * The guild it was sent from
     */
    guildId: O.Option<Id>;
    /**
     * The channel it was sent from
     */
    channel?: Partial<APIChannel> & Pick<APIChannel, 'id' | 'type'>;
    /**
     * The id of the channel it was sent from
     *
     * @deprecated Use {@apilink APIBaseInteraction#channel} instead
     */
    channelId: O.Option<Id>;
    /**
     * Guild member data for the invoking user, including permissions
     *
     * **This is only sent when an interaction is invoked in a guild**
     */
    //member?: APIInteractionGuildMember;
    /**
     * User object for the invoking user, if invoked in a DM
     */
    user: O.Option<User>;
    /**
     * A continuation token for responding to the interaction
     */
    token: string;
    /**
     * Read-only property, always `1`
     */
    version: 1;
    /**
     * For components, the message they were attached to
     */
    message: O.Option<CoreMessage>;
    /**
     * Bitwise set of permissions the app or bot has within the channel the interaction was sent from
     */
    app_permissions?: Permissions;
    /**
     * The selected language of the invoking user
     */
    locale: LocaleString;
    /**
     * The guild's preferred locale, if invoked in a guild
     */
    guild_locale?: LocaleString;
}
