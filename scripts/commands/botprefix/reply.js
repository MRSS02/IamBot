module.exports = function(message, author, args, order, globals) {

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
    if (globals.trustlist[message.guild.id].includes(message.author.id)) {
       message.channel.send(`Of course, ${author}! \nIt's time to talk, people!`)
    } else {
       message.channel.send(`You're not my master, ${author}.`)
    }
  }

} else {

  if (order.includes("hi")) {
   if (message.author.id == 307335427331850242) {
       message.channel.send(`Hi, master ${author}. How can I serve you?`)
   } else {
     if (globals.trustlist[message.guild.id].includes(message.author.id)) {
       message.channel.send(`Hi, ${author}. \nAs you are Master's friend, you're welcome. \nHow can I serve you?`)
     } else {
       message.channel.send(`You're not my master, ${author}.`)
     }
   }

 } else {

 if (order.includes("thanks") || order.includes("thank you")) {
  if (message.author.id == 307335427331850242) {
      message.channel.send(`You're welcome, master ${author}!`)
  } else {
    if (globals.trustlist[message.guild.id].includes(message.author.id)) {
      message.channel.send(`You're welcome, <@${message.author.id}>.`)
    } else {
      message.channel.send(`You're not my master, ${author}.`)
    }
  }

 }
}
}
}
}
