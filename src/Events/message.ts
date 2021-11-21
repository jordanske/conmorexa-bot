import { ClientEvents, Message, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { Event } from '@interfaces';
import { delay } from '@helpers';

class messageEvent implements Event {
    public name: keyof ClientEvents = 'messageCreate';

    public async run(message: Message) {
        if (message.author.bot || !message.guild) {
            return;
        }

        // console.log('MESSAGE: ', message);
        console.log(`${message.author.username} wrote ${message.content}`);
        const channel = message.channel;
        if (!channel.isThread()) {
            return;
        }

        await channel.sendTyping();

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('remove_error')
                    .setLabel('Remove message')
                    .setStyle('PRIMARY')
        );
        
        const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Unknown action')
            .setDescription(`"${message.content}" Lorem Ipsum Dolor Sit Amet`);


        const reply = await message.reply({
            embeds: [embed],
            components: [row]
        });
        message.delete();

        // reply.delete();

        /*channel.send({
            content: "Thanks!",
        });*/
    }
}

export default new messageEvent();