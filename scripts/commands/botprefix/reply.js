module.exports = function(message, author, args, order) {
  if (order.includes("laugh")) {
   if (message.author.id == 307335427331850242) {
       message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, master ${author}.`)
   } else {
     if (globals.trustlist[message.guild.id].includes(message.author.id)) {
        message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, ${author}.`)
     } else {
        message.channel.send(`You're not my master, ${author}.`)
     }
   }

} else {

if (order.includes("revive") && order.includes("server")) {
  if (message.author.id == 307335427331850242) {
      message.channel.send(`Of course, master ${author}! \nIt's time to talk, people!`)
  } else {
      message.channel.send(`You're not my master, ${author}.`)
  }

}
}
}
