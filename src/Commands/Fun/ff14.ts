import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { Command } from '@interfaces';

class Ff14Command implements Command {
    public name = 'ff14';
    public description = 'Final Fantasy XIV!';

    public async run(interaction: CommandInteraction) {
        const embed = new MessageEmbed()
            .setDescription('Did you know that the critically acclaimed MMORPG Final Fantasy XIV has a free trial, and includes the entirety of A Realm Reborn AND the award-winning Heavensward expansion up to level 60 with no restrictions on playtime? Sign up, and enjoy Eorzea today!');

        const message = await interaction.reply({ embeds: [embed], fetchReply: true });
        if (message instanceof Message) {
            message.react('<:panda_love:847381820113944616>');
        }
    }
}

export default new Ff14Command();