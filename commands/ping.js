module.exports = {  
    name: 'ping',
    description: "this is a basic ping command" ,
    cooldown: 5,
    execute(message, args){
        message.channel.send('pong!');
    }
}