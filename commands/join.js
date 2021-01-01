module.exports = {
    name: 'join',
    description: "join a role",
    execute(message, args) {

       let { cache } = message.guild.roles;
       let roleText = message.content.toLowerCase().trim().substring(6);
       let role = cache.find(role => role.name.toLowerCase() === roleText);

       if (role){
           if (message.member.roles.cache.has(role.id)){
               message.reply('You already have this role');
           }
           else{
            message.member.roles.add(role);
            message.reply('You have been added to ' + roleText);
           }
       }
    }
}