const { Channel } = require("discord.js");
const alphavantage = require("../apis/alphavantage.js")
function formatQuote(data){
    return JSON.stringify(data);
}
module.exports = {
    name: 'quote',
    description: 'TODO',
    usage: '!quote <stock>',
    async execute(message, args){ //async is required to use await, why is await useful? -> learn promises
        let stock = message.content.toLowerCase().trim().substring(7);
        let data = await alphavantage.quote(stock); //similar to thread.join -> still research this, also look into .then then it's clear why this is better.
        message.channel.send(formatQuote(data));
    }
}