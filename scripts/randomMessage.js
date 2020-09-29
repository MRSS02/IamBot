module.exports = function (client, globals) {
  console.log(globals.messageChannels)
  try {
    let msg = globals.messages[Math.floor(Math.random() * globals.messages.length) + 1]
    globals.messageChannels.forEach(channel => {
      client.channels.cache.get(`${channel}`).send(msg)
      console.log(msg)
    })
  } catch(error) {
    console.log(error)
  }

}
