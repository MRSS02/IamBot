const botprefix = {
  help: require("./botprefix/help.js"),
  music: require("./botprefix/music.js"),
  intro: require("./botprefix/intro.js"),
  status: require("./botprefix/status.js"),
  be: require("./botprefix/be.js"),
  time: require("./botprefix/time.js"),
  reply: require("./botprefix/reply.js"),
  userlist: require("./botprefix/userlist.js"),
  checkemotes: require("./botprefix/checkemotes.js"),
  editemotes: require("./botprefix/checkemotes.js")
}

const replycommands = [
  "laugh", "revive", "server", "thank", "you", "hi"
]

module.exports = function(play, link, order, args, author, owner,
fchar, message, client, Discord, globals, checktime, god, ytdl, ytsr, sameserver) {

let reply
for (let x = 0; x < replycommands.length; x++) {
  if (order.includes(replycommands[x])) {
    reply = true
    break;
  }
}

//async function where the commands are interpreted
async function wait() {
if (order.includes("help")) botprefix.help(order, args,
author, owner, message, Discord, globals); else {

if (order.includes("play") || order.includes("queue") ||
order.includes("skip") || order.includes("stop")) {

let musicreturned = await botprefix.music(play, link,
order, args, author, owner, fchar, message, client, globals,
god, ytdl, ytsr, sameserver, Discord)
for (let item in musicreturned.globals) {
  globals[item] = evalreturned.globals[item]
}

} else {

if (order.includes("emotes") && order.includes("check") ||
order.includes("emotes") && order.includes("chck")) botprefix.checkemotes(Discord,
order, message, globals); else {

if (order.includes("edit") && order.includes("emotes")) botprefix.editemotes(order,
message, globals)

if (order.includes("intro")) botprefix.intro(Discord, args, message); else {

if (order.includes("status")) {
   let statusreturned = await botprefix.status(client, message, author, args, order, globals)
   globals.manualStatus = statusreturned

} else {

if (order.includes("be")) botprefix.be(client, message, author, order); else {

if (order.includes("time") || order.includes("alarm")) {
  let timereturned = await botprefix.time(message, author, args, order, checktime, globals)
  for (let item in timereturned.globals) {
    globals[item] = timereturned.globals[item]
  }

} else {

if (reply) botprefix.reply(message, author, args, order, globals); else {

if (order.includes("trust") || order.includes("block") || order.includes("reset")) {
  let listreturned = await botprefix.userlist(god, message, author, args, order, globals)
  for (let item in listreturned.globals) {
    globals[item] = listreturned.globals[item]
  }
}
}
}
}
}
}
}
}
}
}


wait().then() //bloking the code on purpose cause I need it

return globals

}
