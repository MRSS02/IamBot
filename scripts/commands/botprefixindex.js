const botprefix = {
  help: require("./botprefix/help.js"),
  music: require("./botprefix/music.js"),
  intro: require("./botprefix/intro.js"),
  status: require("./botprefix/status.js"),
  be: require("./botprefix/be.js"),
  time: require("./botprefix/time.js"),
  reply: require("./botprefix/reply.js")
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

if (order.includes("intro")) botprefix.intro(Discord, args, message); else {

if (order.includes("status")) {
   let statusreturned = await botprefix.status(client, message, author, args, order, globals)
   globals.manualStatus = statusreturned

} else {

if (order.includes("be")) botprefix.be(client, message, author, order); else {

if (order.includes("time") || order.includes("alarm")) {
  let timereturned = await botprefix.time(message, author, args, order, checktime, globals)
  for (let item in timereturned.globals) {
    globals[item] = evalreturned.globals[item]
  }

} else {

if (reply) botprefix.reply(message, author, args, order); else {

if (order.includes("trust")) {
  let trust = args.substring(order.indexOf("trust") + 5)
  let trustable
  let nouser = false
  trust = trust.replace("<@!", "")
  trust = trust.replace(">", "")
  trust = trust.replace(/ /g, "")
  try {
  if (message.guild.member(`${trust}`).nickname == null) {
    trustable = message.guild.member(`${trust}`).user.username
  } else {
    trustable = message.guild.member(`${trust}`).nickname
  }
  } catch {
    nouser = true
  }
  if (message.member.hasPermission("ADMINISTRATOR")) {
    if (trust == "307335427331850242") {
      message.channel.send(`${author} is my master!`)
    } else {
      if (nouser) {
        if (message.author.id == 307335427331850242) {
        message.channel.send(`I don't recognize that user, master!`)
        } else {
        message.channel.send(`I don't recognize that user, ${author}!`)
        }
      } else {
      let remove
      if (globals.blocklist[message.guild.id].includes(trust)) {
        remove = true
      }
      if (remove) {
        function data(id) {
          if (id != trust) return id
        }
        globals.blocklist[message.guild.id] = globals.blocklist[message.guild.id].filter(data)
        let data0 = globals.blocklist[message.guild.id].join("\n")
        let rewrite = god.promises.writeFile(`./data/blocklist/${message.guild.id}`, data0, 'utf8', {'flags': 'r+'});
      }

      if (globals.trustlist[message.guild.id].includes(trust)) {

        if (message.author.id == 307335427331850242) {
         message.channel.send(`Master, I already trust ${trustable}.`)
        } else {
         message.channel.send(`${author}, I already trust ${trustable}.`)
        }
        } else {
        let add = god.promises.appendFile(`./data/trustlist/${[message.guild.id]}`, `${trust}\n`, 'utf8', {'flags': 'a+'});
        globals.trustlist[message.guild.id].push(trust)
        if (message.author.id == 307335427331850242) {
         message.channel.send(`I now trust ${trustable}, master!`)
        } else {
         message.channel.send(`I now trust ${trustable}, ${author}!`)
        }
        }
      }

    }

  } else {
     message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
  }


} else {

 if (order.includes("block")) {
   let block = args.substring(order.indexOf("block") + 5)
   let blockable
   block = block.replace("<@!", "")
   block = block.replace(">", "")
   block = block.replace(/ /g, "")
   let nouser = false
   try {
   if (message.guild.member(`${block}`).nickname == null) {
     blockable = message.guild.member(`${block}`).user.username
   } else {
     blockable = message.guild.member(`${block}`).nickname
   }
   } catch (error) {
   nouser = true
   }
   if (message.member.hasPermission("ADMINISTRATOR")) {
     if (block == "307335427331850242") {
       message.channel.send(`I can't block ${owner} because they are my master!`)
   } else {
     if (nouser) {
       if (message.author.id == 307335427331850242) {
       message.channel.send(`I don't recognize that user, master!`)
       } else {
       message.channel.send(`I don't recognize that user. ${author}!`)
       }
     } else {
     let remove
     if (globals.trustlist[message.guild.id].includes(block)) {
       remove = true
     }
     if (remove) {
       function data(id) {
         if (id != block) return id
       }
       globals.trustlist[message.guild.id] = globals.trustlist[message.guild.id].filter(data)
       let data0 = globals.trustlist[message.guild.id].join("\n")
       let rewrite = god.promises.writeFile(`./data/trustlist/${message.guild.id}`, data0, 'utf8', {'flags': 'r+'});
     }
       if (globals.blocklist[message.guild.id].includes(block)) {
         if (message.author.id == 307335427331850242) {
           const m = message.channel.send(`Master, I already blocked ${blockable}.`)
         } else {
           const m = message.channel.send(`${author}, I already blocked ${blockable}.`)
         }

       } else {
         let add = god.promises.appendFile(`./data/blocklist/${message.guild.id}`, `${block}\n`, 'utf8', {'flags': 'a+'});
         globals.blocklist[message.guild.id].push(block)
         if (message.author.id == 307335427331850242) {
           message.channel.send(`I blocked ${blockable}, master.`)
         } else {
           message.channel.send(`I blocked ${blockable}, author.`)
         }
       }
       }

    }

   } else {
      message.channel.send(`You're not my master, ${author}.`)
   }

} else {

 if (order.includes("reset")) {

   let rest = args.substring(order.indexOf("reset") + 5)
   let restable
   rest = rest.replace("<@!", "")
   rest = rest.replace(">", "")
   rest = rest.replace(/ /g, "")
   let nouser = false
   try {
   if (message.guild.member(`${rest}`).nickname == null) {
     restable = message.guild.member(`${rest}`).user.username
   } else {
     restable = message.guild.member(`${rest}`).nickname
   }
   } catch (error) {
     nouser = true
   }
   if (message.member.hasPermission("ADMINISTRATOR")) {
     if (rest == "307335427331850242") {
       message.channel.send(`I can't stop trusting ${owner} because they are my master!`)
     } else {
       if (nouser) {
         if (message.author.id == 307335427331850242) {
         message.channel.send(`I don't recognize that user, master!`)
         } else {
         message.channel.send(`I don't recognize that user, ${owner}!`)
         }
       } else {
       if (globals.trustlist[message.guild.id].includes(rest)) {

       function data(id) {
         if (id != rest) return id
       }
       globals.trustlist[message.guild.id] = globals.trustlist[message.guild.id].filter(data)
       let data0 = globals.trustlist[message.guild.id].join("\n")
       god.promises.writeFile(`./data/trustlist/${message.guild.id}`, data0, 'utf8', {'flags': 'r+'});
       if (message.author.id == 307335427331850242) {
       message.channel.send(`I stopped trusting ${restable}, master.`)
       } else {
        message.channel.send(`I stopped trusting ${restable}, ${author}.`)
       }
       } else {
         if (globals.blocklist[message.guild.id].includes(rest)) {

         function data(id) {
           if (id != rest) return id
         }
         globals.blocklist[message.guild.id] = globals.blocklist[message.guild.id].filter(data)
         let data0 = globals.blocklist[message.guild.id].join("\n")
         let rewrite = god.promises.writeFile(`./data/blocklist/${message.guild.id}`, data0, 'utf8', {'flags': 'r+'});
         if (message.author.id == 307335427331850242) {
          message.channel.send(`I unblocked ${restable}, master.`)
         } else {
          message.channel.send(`I unblocked ${restable}, ${author}.`)
         }

       } else {
         if (message.author.id == 307335427331850242) {
           message.channel.send(`There's nothing to reset about ${restable}, master.`)
         } else {
           message.channel.send(`There's nothing to reset about ${restable}, ${author}.`)
         }

       }
       }
     }
     }

   } else {
      message.channel.send(`You're not my master, ${author}.`)
   }

} else {

  if (message.author.id == 307335427331850242) {
    message.channel.send(`I didn't quite understand your order, master ${author}.`)
  } else {
    if (globals.trustlist[message.guild.id].includes(message.author.id)) {
      message.channel.send(`I didn't quite understand your order, ${author}.`)
    } else {
      message.channel.send(`You're not my master, ${author}.`)
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
}
}


wait().then() //bloking the code on purpose cause I need it

return globals

}
