import { ClientEvents } from 'discord.js';
import Client from '@client';

interface Run {
    (...args: any[]);
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}