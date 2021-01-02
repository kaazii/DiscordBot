module.exports = {  
    name: 'clean',
    description: "This will delete the last 25 commands from the server" ,
    cooldown: 0,
    execute(message, args){
        message.channel.send('pong!');
    }
}