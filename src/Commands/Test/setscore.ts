import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { TestService } from '@services';
import { Command } from '@interfaces';

class SetscoreCommand implements Command {
    public name = 'setscore';
    public description = 'TEST getscore';

    public buildSlashCommand(commandBuilder: SlashCommandBuilder) {
        commandBuilder.addStringOption(option => option
            .setName('score')
            .setDescription('Score to set')
            .setRequired(true)
        );
    }

    public async run(interaction: CommandInteraction) {
        const score = interaction.options.get('score').value as number;
        TestService.setScore(score);
        interaction.reply(`Score set to ${score}`);
    }
}

export default new SetscoreCommand();