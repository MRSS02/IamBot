const ytdl = require("ytdl-core")
const ytsr = require("ytsr")
const commands = {
  setupcommands: require('./commands/setupcommands.js'),
  emoji: require('./commands/emoji.js'),
  download: require('./commands/download.js'),
  dm: require('./commands/dm.js'),
  evaluate: require('./commands/evaluate.js'),
  botprefix: require('./commands/botprefixindex.js')
}

module.exports = function(client, message, globals, checktime, Discord, Database, god) {

function sameserver(id) {
  if (id != message.guild.id) return id
}

//declare vardata
let vardata

let nextstep

try {

if (message.guild) {
if (!globals.blocklist[message.guild.id]) globals.blocklist[message.guild.id] = []
if (!globals.trustlist[message.guild.id]) globals.trustlist[message.guild.id] = []
if (message.webhookID && message.content.includes("How do you feel being surpassed by me, <@!735574382096679052>?")) {
 message.channel.send("Could you leave me alone, <@!159985870458322944>?");
 return
}
}

if (message.author.bot) return;
if (message.guild) {
  if (!globals.blocklist[message.guild.id].includes(message.author.id)) nextstep = true
} else {
  if (message.channel.type === "dm") nextstep = true
}

if (nextstep) {

//setup
let setupcommandsreturned = commands.setupcommands(message, globals)
let play
let link = setupcommandsreturned.link
let args = setupcommandsreturned.args
let order = setupcommandsreturned.order
let author = setupcommandsreturned.author
let owner = setupcommandsreturned.owner
const fchar = setupcommandsreturned.fchar
for (var item in setupcommandsreturned.globals) {
  globals[item] = setupcommandsreturned.globals[item]
}

//non-"bot!" commands
if (args.includes("!a<") && args.includes(">!") || args.includes("!<") && args.includes(">!")) args = commands.emoji(args, message, globals)
if (order.includes("!%d") && message.author.id == 307335427331850242 && message.channel.type === "dm") commands.download(order, args, ytdl, god, message)
if (message.channel.type === "dm") commands.dm(fchar, args, message, client)
let evalreturned = commands.evaluate(play, link, order, args, author, owner, fchar, message, client, Discord, globals)
for (var item in evalreturned.globals) {
  globals[item] = evalreturned.globals[item]
}

//"bot!" commands
if (order.includes("bot!")) {
if (order.substring(order.indexOf("bot!") - 1, order.indexOf("bot!")) != "\\") {
  let returnedbotprefix = commands.botprefix(play, link, order, args, author, owner, fchar,
  message, client, Discord, globals, checktime, god, ytdl, ytsr, sameserver)
  for (var item in evalreturned.globals) {
    globals[item] = evalreturned.globals[item]
  }
};
};

};

} catch (error) {
  try {
    client.users.cache.get("307335427331850242").send(`${error}`)
    console.log(error)
  } catch (f) {
    console.log(error)
  }
}


return globals

}
