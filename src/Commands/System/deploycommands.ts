import { CommandInteraction, GuildMemberRoleManager, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Command } from '@interfaces';
import Client from '@client';

class DeployCommandsCommand implements Command {
    public name = 'deploycommands';
    public description = 'Deploy Commands';

    public async run(interaction: CommandInteraction) {
        if (!(interaction.member.roles instanceof GuildMemberRoleManager) || !interaction.member.roles.cache.some(role => role.name === 'Founder')) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor('#dc3545')
                        .setDescription('You have no access to this command'),
                ],
                ephemeral: true
            });
            return;
        }

        interaction.reply('Deploying commands...').then(() => {

            const commands = [];
            Client.commands.forEach(command => {
                const commandBuilder = new SlashCommandBuilder();
                commandBuilder.setName(command.name);
                if (command.description) {
                    commandBuilder.setDescription(command.description);
                }

                if (command.buildSlashCommand) {
                    command.buildSlashCommand(commandBuilder);
                }

                commands.push(commandBuilder.toJSON());
            });

            const { TOKEN, CLIENT_ID } = process.env;
            const rest = new REST({ version: '9' }).setToken(TOKEN);

            Client.guilds.fetch().then(guilds => {
                guilds.each(guild => {
                    rest.put(Routes.applicationGuildCommands(CLIENT_ID, guild.id), { body: commands })
                        .then(() => console.log('Successfully registered application commands.'))
                        .catch(console.error);
                });
            });

            interaction.editReply('Commands successfully deployed!');
        });
    }
}

export default new DeployCommandsCommand();