module.exports = {  
    name: 'ping',
    description: "this is a basic ping command" ,
    execute(message, args){
        message.channel.send('pong!');
    }
}