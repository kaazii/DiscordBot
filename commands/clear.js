const validator = require("../util/validator.js");
module.exports = {
    name: 'clear',
    description: "This will delete bot and user command messages from the last 50, or your input, messages from the text channel",
    usage: '[number]',
    cooldown: 3,
    async execute(message, args) {
        let input = message.content.substring(7);
        if (!validator.isNumericValid(input)) {
            message.reply('Please enter an integer between 1-100, or only !clear to clear the last 50 messages.');
        }
        else if (!args.length) {
            let results = await message.channel.messages.fetch({ limit: 50 })
            const botMessages = results.filter(msg => msg.author.bot);
            const commandMessages = results.filter(msg => msg.content.substring(0, 1) === '!');
            console.log(botMessages);
            message.channel.bulkDelete(botMessages);
            message.channel.bulkDelete(commandMessages);
        }
        let results = await message.channel.messages.fetch({ limit: parseInt(input) })
        const botMessages = results.filter(msg => msg.author.bot);
        const commandMessages = results.filter(msg => msg.content.substring(0, 1) === '!');
        console.log(botMessages);
        message.channel.bulkDelete(botMessages);
        message.channel.bulkDelete(commandMessages);
    }
}