import dotenv from 'dotenv';
import { Service } from './service';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config({ path: process.env.NODE_ENV });

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', async () => {
  console.log(`Successfully logged in as \x1b[32m${client.user?.tag}\x1b[0m`);
  Service.Users.fetch().then(console.log);
});

client.login(process.env.DISCORD_TOKEN);