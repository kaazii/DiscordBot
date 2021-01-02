module.exports = {
    name: 'kill',
    description: "This is a joke from the show, it was very requested.",
    usage: `[user]`,
    cooldown: 3,
    execute(message, args) {
        message.channel.send(`OH MY GOD! THEY KILLED  ${message.author}! YOU BASTARDS!`);
    }
}