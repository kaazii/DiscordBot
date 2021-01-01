module.exports = {
    name: 'leave',
    description: "leave a role",
    usage: `!leave <role>`,
    execute(message, args) {

        let { cache } = message.guild.roles;
        let roleText = message.content.toLowerCase().trim().substring(7);

        let role = cache.find(role => role.name.toLowerCase() === roleText);
        let kennyBotRole = cache.find(role => role.name === 'KennyBot');

        if (!args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`; //using ``, you can use single quotes with no issue.
            reply += `\nThe proper usage would be: \`${this.usage}\``;
            return message.channel.send(reply);
        }
        else if (role === undefined) {
            message.reply('That role does not exist.');
        }
        if (role) {
            if (!message.member.roles.cache.has(role.id)) {
                message.reply('You do not have this role');
            }
            else if (role.rawPosition > kennyBotRole.rawPosition) {
                message.reply('Role can not be removed - insufficient permissions');
            }
            else {
                message.member.roles.remove(role);
                message.reply('You have been removed from ' + roleText);
            }
        }
    }
}