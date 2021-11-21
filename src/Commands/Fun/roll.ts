import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { Command } from '@interfaces';

class RollCommand implements Command {
    public name = 'roll';
    public description = 'Roll!';
    public options = [
        option => option.setName('max').setDescription('Max number to roll'),
    ];

    public buildSlashCommand(commandBuilder: SlashCommandBuilder) {
        commandBuilder.addStringOption(option => option
            .setName('max')
            .setDescription('Max number to roll')
        );
    }

    public async run(interaction: CommandInteraction) {
        const max = interaction.options.get('max')?.value as number ?? 100;
        const num = Math.floor(Math.random() * max);
        const embed = new MessageEmbed()
            .setDescription(`Rolled ${num}!`);

        interaction.reply({ embeds: [embed] });
    }
}

export default new RollCommand();