module.exports = {  
    name: 'kill',
    description: "This is a joke from the show, it was very much requested." ,
    cooldown: 3,
    execute(message, args){
        message.channel.send(`Oh my god, they killed ${message.author}. You bastards!`);
    }
}