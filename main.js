const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
    
client.once('ready', () => {
    console.log('KennyBot is online.')
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/); // this is safer then (" ") - All commands are spliced, args is also an array
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

	try {
        command.execute(message, args);
	} catch (error) {
        console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token); //login