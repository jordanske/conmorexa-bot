import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { stripIndent } from 'common-tags';
import { delay } from '@helpers';
import { Command } from '@interfaces';
import { ConfigService } from '@services';
import { Cache } from '@models/Cache';

class RenderchessCommand implements Command {
    public name = 'renderchess';
    public description = 'TEST render chessboard';

    public async run(interaction: CommandInteraction) {
        
        /*const chessData = await Cache.getCached('chess-test-data', {
            thread_id: 0,
            players: {
                white: 0,
                black: 0,
            }
        });

        console.log(chessData);
        
        interaction.reply('test 1');
        return;*/

        const url = ConfigService.get('chess.boardimage_url');

        interaction.reply({ embeds: [new MessageEmbed()
            .setImage(url + 'rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR.png')] });
        await delay(2000);
        interaction.editReply({ embeds: [new MessageEmbed()
            .setImage(url + 'rnbqkbnrpppppppp883P48PPP1PPPPRNBQKBNR-d2d4.png')] });
        await delay(2000);
        interaction.editReply({ embeds: [new MessageEmbed()
            .setImage(url + 'rnbqkbnrppp1pppp83p43P48PPP1PPPPRNBQKBNR-d7d5.png')] });
        /*const embed = new MessageEmbed()
            .setDescription(stripIndent`
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
        `);
        const embed2 = new MessageEmbed()
            .setDescription(stripIndent`
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
                :white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square:
                :black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square:
        `);

        
        interaction.reply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        await delay(500);
        interaction.editReply({ embeds: [embed] });
        await delay(500);
        interaction.editReply({ embeds: [embed2] });
        */
    }
}

export default new RenderchessCommand();