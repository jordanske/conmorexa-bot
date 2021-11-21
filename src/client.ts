import { Client, ClientOptions, Collection, Intents } from 'discord.js';
import { Sequelize } from 'sequelize';
import { join as pathJoin } from 'path';
import { readdirSync } from 'fs';
import { Command, Event } from '@interfaces';

class ExtendedClient extends Client {
    public commands: Collection<string, Command> = new Collection();
    public aliases: Collection<string, Command> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public sequelize: Sequelize;
    
    public constructor(options: ClientOptions) {
        super(options);
        console.log("New BOT");
    }

    public async init() {
        console.log("Init BOT");
        const {
            TOKEN,
            DB_HOST,
            DB_PORT,
            DB_NAME,
            DB_USER,
            DB_PASS
        } = process.env;
        await this.login(TOKEN);
        this.user.setActivity('v0.1');

        this.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
            dialect: 'mysql',
            host: DB_HOST,
            port: parseInt(DB_PORT)
        });

        await this.loadEvents();
        await this.loadCommands();
    }

    private async loadCommands() {
        const commandPath = pathJoin(__dirname, "Commands");
        for (const dir of readdirSync(commandPath)) {
            const commandFiles = readdirSync(`${commandPath}/${dir}`).filter(file => file.endsWith('.js'));

            for (const file of commandFiles) {
                // const { command }: { command: Command } = await import(`${commandPath}/${dir}/${file}`);
                const command: Command = (await import(`${commandPath}/${dir}/${file}`)).default;
                this.commands.set(command.name, command);

                if (command?.aliases?.length > 0) {
                    command.aliases.forEach(alias => {
                        this.aliases.set(alias, command);
                    });
                }
            }
        }
    }

    private async loadEvents() {
        const eventPath = pathJoin(__dirname, "Events");
        const eventFiles = readdirSync(eventPath).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event: Event = (await import(`${eventPath}/${file}`)).default;
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null));
        }
    }
}

export default new ExtendedClient({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});