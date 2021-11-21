import { ClientEvents } from 'discord.js';
import { Event } from '@interfaces';
import Client from '@client';

class ReadyEvent implements Event {
    public name: keyof ClientEvents = 'ready';

    public run() {
        console.log(`${Client.user.tag} is online!`);
    }
}

export default new ReadyEvent();