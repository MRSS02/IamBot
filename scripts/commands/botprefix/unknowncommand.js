module.exports = function(message, author, globals) {
  if (message.author.id == 307335427331850242) {
      message.channel.send(`I didn't quite understand what you mean, master ${author}.`)
  } else {
      message.channel.send(`I didn't quite understand what you mean, ${author}.`)
  }
}
