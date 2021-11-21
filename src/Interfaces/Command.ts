import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Client from '@client';

interface Run {
    (interaction: CommandInteraction);
}

interface BuildSlashCommand {
    (commandBuilder: SlashCommandBuilder)
}

export interface Command {
    name: string;
    description?: string;
    aliases?: string[];
    buildSlashCommand?: BuildSlashCommand;
    run: Run;
}