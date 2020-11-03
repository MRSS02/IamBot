module.exports = function (Discord, order, message, globals) {
     let emotelist = []
     const list = new Discord.MessageEmbed()
     .setColor("0066ff")
     if (globals.serveremojis[message.guild.id]) {
       globals.serveremojis[message.guild.id].forEach(emote => {
         if (emote.toLowerCase() != "master") emotelist.push(emote)
       });
       list.setTitle(`List of custom emotes allowed to be used by me in ${message.guild}:`)

       list.addFields(
         { name: "\u200b", value: emotelist, inline: true},
       )
     } else {
       list.setTitle(`There are no custom emotes allowed to be used by me in ${message.guild}.`)
     }
     if (globals.trustlist[message.guild.id].includes(message.author.id) ||
     message.member.hasPermission("MANAGE_EMOJIS")) message.author.send(list);
     else message.channel.send(`${user}, you are not allowed to see the list
    of custom emotes allowed to be used by me in ${message.guild}`)


}
