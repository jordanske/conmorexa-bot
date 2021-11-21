
import { ClientEvents, CommandInteraction, Message } from 'discord.js';
import { Event } from '@interfaces';
import Client from '@client';

class InteractionCreateEvent implements Event {
    public name: keyof ClientEvents = 'interactionCreate';

    public run(interaction: CommandInteraction) {
        try {
            if (interaction.isButton()) {
                if (interaction.customId == 'remove_error') {
                    if (interaction.message instanceof Message) {
                        interaction.message.delete();
                    }
                }
                return;
            }

            if (!interaction.isCommand()) return;

            const command = Client.commands.get(interaction.commandName) || Client.aliases.get(interaction.commandName);
            if (!command) return;

            command.run(interaction);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new InteractionCreateEvent();