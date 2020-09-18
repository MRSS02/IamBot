module.exports = function(client, message, author, order) {
  if (message.author.id == 307335427331850242) {
        if (order.includes("online")) {
          client.user.setStatus("online").then(message.channel.send(`I am now online, master ${author}!`))
        } else {
          if (order.includes("idle")) {
            client.user.setStatus("idle").then(message.channel.send(`I am now idle, master ${author}!`))
          } else {
            if (order.includes("dnd") || order.includes("do not disturb") || order.includes("don't disturb")) {
              client.user.setStatus("dnd").then(message.channel.send(`I am on do not disturb mode, master ${author}!`))
            } else {
              if (order.includes("invisible")) {
                client.user.setStatus("invisible").then(message.channel.send(`I am now invisible, master ${author}!`))
              } else {
                message.channel.send(`Master, you didn't specify a valid status!`)
              }
            }
          }
        }
      } else {
        message.channel.send(`You're not my master, ${author}.`)
      }
}
