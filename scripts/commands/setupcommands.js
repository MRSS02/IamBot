module.exports = function(message, globals) {

    let link
    let args = message.content
    let order = args.toLowerCase();
    let author
    let owner
    const fchar = parseInt(args.substring(0, 18), 10)
    if (order.includes("play")) link = args.substring(order.indexOf("play") + 4)

  if (order.includes("!$d")) {
    if (order.substring(order.indexOf("!$d") - 1, order.indexOf("!$d")) != "\\") {
    message.delete().catch()
    }
  }

  if (message.channel.type !== "dm") {
  try {
  if (message.guild.member(message.author).nickname == null) {
     author = message.author.username
  } else {
     author = message.guild.member(message.author).nickname
  }
  } catch () {
    author = message.author.username
  }

  try {
  if (message.guild.member("307335427331850242").nickname == null) {
     owner = message.guild.member("307335427331850242").username
  } else {
     owner = message.guild.member("307335427331850242").nickname
  }
  } catch (error) {
    owner = message.guild.member("307335427331850242").username
  }
  }
  function sameserver(id) {
      if (id != message.guild.id) return id
  }
    if (order.includes("--hide") && globals.trustlist[message.guild.id].includes(message.author.id) || order.includes("--hide") && message.author.id == 307335427331850242) {
      globals.showsongs = globals.showsongs.filter(sameserver)

    } else {

    if (order.includes("--show") && globals.trustlist[message.guild.id].includes(message.author.id) || order.includes("--show") && message.author.id == 307335427331850242) {
      globals.showsongs.push(message.guild.id)

    }
    }

  let vardata = {
    globals: globals,
    args: args,
    order: order,
    author: author,
    owner: owner,
    fchar: fchar,
    link: link
  }

  return vardata

}
