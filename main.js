const Discord = require("discord.js");
const Token = require("./Token.json");

console.log(Token);

const client = new Discord.Client();

client.once('ready', () => {
    console.log('KennyBot is now online bitches.')
});




client.login(Token.discordToken); //login