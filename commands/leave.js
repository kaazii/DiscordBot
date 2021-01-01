module.exports = {
    name: 'leave',
    description: "leave a role",
    execute(message, args) {

       let { cache } = message.guild.roles;
       let roleText = message.content.toLowerCase().trim().substring(7);
       let role = cache.find(role => role.name.toLowerCase() === roleText);

       if (role){
           if (!message.member.roles.cache.has(role.id)){
               message.reply('You do not have this role');
           }
           else{
            message.member.roles.remove(role);
            message.reply('You have been removed from ' + roleText);
           }
       }
    }
}