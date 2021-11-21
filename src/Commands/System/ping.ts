import { CommandInteraction } from 'discord.js';
import { Command } from '@interfaces';
import Client from '@client';

class PingCommand implements Command {
    public name = 'ping';
    public description = 'Replies with Pong v2!';

    public async run(interaction: CommandInteraction) {
        interaction.reply(`Pong! (${Client.ws.ping}ms)`);
    }
}

export default new PingCommand();