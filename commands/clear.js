const validator = require("../util/validator.js");

async function deleteMessages(limit, message) {
    let results = await message.channel.messages.fetch({ limit })
    const botMessages = results.filter(msg => msg.author.bot);
    const commandMessages = results.filter(msg => msg.content.substring(0, 1) === '!');
    message.channel.bulkDelete(botMessages.concat(commandMessages));
}
module.exports = {
    name: 'clear',
    description: "This will delete bot and user command messages from the last 50, or your input, messages from the text channel",
    usage: '[number]',
    cooldown: 3,
    async execute(message, args) {
        let input = message.content.substring(7).trim();
        if (!args.length) {
            await deleteMessages(50, message);
        }
        else if (!validator.isNumericValid(input)) {
            message.reply('Please enter an integer between 1-100, or only !clear to clear the last 50 messages.');
        }
        else {
            await deleteMessages(parseInt(input), message);
        }
    }
}