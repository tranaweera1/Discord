// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

require('dotenv').config();

const commandHandler = require('./commands');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


module.exports = client;


client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", commandHandler );



client.login(process.env.BOT_TOKEN);