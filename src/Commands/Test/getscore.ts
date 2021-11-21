import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { TestService } from '@services';
import { Command } from '@interfaces';

class GetscoreCommand implements Command {
    public name = 'getscore';
    public description = 'TEST getscore';

    public async run(interaction: CommandInteraction) {
        interaction.reply(`Score is ${TestService.getScore()}`);
    }
}

export default new GetscoreCommand();