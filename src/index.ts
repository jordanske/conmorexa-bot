require('dotenv').config();

console.log('Starting bot...');

import Client from '@client';
Client.init();
// new Client({ intents: [Intents.FLAGS.GUILDS] }).init();
