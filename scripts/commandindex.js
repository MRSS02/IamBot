const god = require('fs')
const Discord = require("discord.js");
const ytdl = require("ytdl-core")
const ytsr = require("ytsr")
const commands = {
  emoji: require('./commands/emoji.js')
}

module.exports = function(client, message, globals, checktime) {

let vardata
async function wait() {
try {

if (message.webhookID && message.content.includes("How do you feel being surpassed by me, <@!735574382096679052>?")) {
 const m = message.channel.send("Could you leave me alone, <@!159985870458322944>?");
return
}

if (!globals.blocklist.includes(message.author.id)) {

  if (message.author.bot) return;
  let args = message.content
  let order = args.toLowerCase();
  if (args.includes("!a<") && args.includes(">!") || args.includes("!<") && args.includes(">!")) args = commands.emoji(args)

  const fchar = parseInt(args.substring(0, 18), 10)
  let play
  if (order.includes("play")) link = args.substring(order.indexOf("play") + 4)
  let author

if (order.includes("!$d")) {
  if (order.substring(order.indexOf("!$d") - 1, order.indexOf("!$d")) != "\\") {
  message.delete()
  }
}

if (message.channel.type !== "dm") {
try {
if (message.guild.member(message.author).nickname == null) {
   author = message.author.username
} else {
   author = message.guild.member(message.author).nickname
}
} catch (error) {
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

  if (order.includes("--hide") && globals.trustlist.includes(message.author.id) || order.includes("--hide") && message.author.id == 307335427331850242) {
    globals.showsongs = globals.showsongs.filter(sameserver)

  } else {

  if (order.includes("--show") && globals.trustlist.includes(message.author.id) || order.includes("--show") && message.author.id == 307335427331850242) {
    globals.showsongs.push(message.guild.id)

  }
  }

if (order.includes("!%d") && message.author.id == 307335427331850242 && message.channel.type === "dm") {
  if (order.substring(order.indexOf("!%d") - 1, order.indexOf("!%d")) != "\\") {
  let stream
  async function download(file, filename) {
    message.channel.send("Downloading...")
    let extension
    if (order.includes("--haudio")) {
      stream = ytdl(file, { quality: "highestaudio", filter: "audioonly"})
      extension = ".mp3"
    } else {
      if (order.includes("--audio")) {
        stream = ytdl(file, { filter: "audioonly"})
        extension = ".mp3"
      } else {
        if (order.includes("--hvideo")) {
          stream = ytdl(file, { quality: "highestvideo"})
          extension = ".mp4"
        } else {
          stream = ytdl(file)
          extension = ".mp4"
        }
      }
    }
    god.access(`downloads/${filename}${extension}`, god.constants.R_OK, async (error) => {
    if (error) {
    await stream.pipe(god.createWriteStream(`downloads/${filename}${extension}`)).on("close", function() {
      message.channel.send("File downloaded.")
    })
    } else {
      message.channel.send(`A file named "${filename}${extension}" already exists, master.`)
    }
    })
  }
  if (order.includes("::")) {
  let link = args.substring(order.indexOf("!%d") + 3, order.indexOf("::"))
  let filename = args.substring(order.indexOf("::") + 2)
  link = link.replace(/ /g, "")
  checkvalid = ytdl.validateURL(link);
   if (checkvalid) {
     download(link, filename)
   } else {
    message.channel.send(`Master, "${link}" is not a valid youtube video link.`)
   }
  } else {
   message.channel.send(`Master, tell me the name of the output file.`)
 }
}
}

if (message.channel.type === "dm") {
  const id = args.substring(0, 18)
  const emb = new Discord.MessageEmbed()
  let dm = args.substring(18)
  if (dm.includes("%%")) {
     let hexcol
     let c
     if (message.author.id == 307335427331850242) {
       if (dm.includes("%%%")) {
         hexcol = dm.substring(dm.indexOf("%%%"), dm.indexOf("%%%") + 9)
         const d = dm.substring(dm.indexOf("%%%"), dm.indexOf("%%%") + 9)
         c = dm.replace(d, '')
         hexcol = hexcol.substring(3)
       } else {
         c = args.replace("%%", '')
         hexcol = "00aaff"
       }
       if (order.includes("/")) {
       msg1 = c.substring(0, c.indexOf("/"))
       msg2 = c.replace(msg1, '')
       msg2 = msg2.substring(1)
       if (msg2.substring(0, 1) == " ") msg2 = msg2.substring(1)
       } else {
       msg1 = c
       msg2 = "\u200b"
       }
       const emb = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: msg1, value: msg2, inline: true},
       )
       dm = emb
     }
   }
   if (message.author.id == 307335427331850242 && !isNaN(fchar)) {
    client.users.cache.get(id).send(dm).catch(error =>{
      message.author.send(`I couldn't send "${dm}" to ${id}.`)
    })

   } else {
   if (message.author.bot) return;
   if (message.author.id != 307335427331850242) client.users.cache.get("307335427331850242").send("```js\n" + `${message.author.username}, ID: ${message.author.id}\n` + "```\n" + args)
   }
}

if (order.includes(":::")) {
if (order.substring(order.indexOf(":::") - 1, order.indexOf(":::")) != "\\") {
  if (message.author.id == 307335427331850242) {
    let ev = args.substring(args.indexOf(":::") + 3)
    function say(a){
      message.channel.send(a)
    }
    function dm(a){
      if (message.channel.type === "dm") client.users.cache.get("307335427331850242").send(a); else message.guild.member("307335427331850242").send(a)
    }
    try {
     eval(ev)
    } catch (error) {
       if (message.channel.type === "dm") client.users.cache.get("307335427331850242").send(`${error}`); else message.guild.member("307335427331850242").send(`${error}`)
    }

  } else {
      message.channel.send(`You're not my master, ${author}.`)
  }
}
} else {

if (order.includes("ccc")) {
if (order.substring(order.indexOf("ccc") - 1, order.indexOf("ccc")) != "\\") {
  let c = args.replace('ccc','')
  if (message.author.id == 307335427331850242) {
      message.delete()
      if (c.substring(0, 1) == "!") c = c.substring(1)
      message.channel.send(c)
  } else {
    if (globals.trustlist.includes(message.author.id)) {
      message.delete()
      if (c.substring(0, 1) == "!") c = c.substring(1)
      if (c.substring(0,1) == " ") c = c.substring(1)
      message.channel.send(`${author} told me to say:\n"${c}."`)
    } else {
     message.channel.send(`You're not my master, ${author}.`)
    }
  }
}
} else {

 if (order.includes("%%")) {
   if (order.substring(order.indexOf("%%") - 1, order.indexOf("%%")) != "\\") {
     let hexcol
     let c
     if (message.author.id == 307335427331850242 || globals.trustlist.includes(message.author.id)) {
       message.delete()
       const emb = new Discord.MessageEmbed()
       c = args.replace("%%", '')
       if (order.includes("--c")) {
         let chkspace = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 4)
         let d
         if (chkspace == " ") {
           hexcol = c.substring(c.indexOf("--c") + 4, c.indexOf("--c") + 10)
           d = c.substring(c.indexOf("--c"), c.indexOf("--c") + 10)
        } else {
          hexcol = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 9)
          d = c.substring(c.indexOf("--c"), c.indexOf("--c") + 9)
        }
        c = c.replace(d, '')
       } else {
         hexcol = "00ffff"
       }
       emb.setColor(hexcol)
       if (!order.includes("--t")) {
        if (c.includes("--d")) c = c.replace("--d", "")
        emb.setDescription(c)
       } else {
       c = c.replace("--t", "")
       if (order.includes("--d")) {
       msg1 = c.substring(0, c.indexOf("--d"))
       msg2 = c.replace(msg1, '')
       msg2 = msg2.substring(3)
       if (msg2.replace(/ /g, "") == "") msg2 = "\u200b"
       if (msg2.substring(0, 1) == " ") msg2 = msg2.substring(1)
       } else {
       msg1 = c
       msg2 = "\u200b"
       }
       emb.addFields(
       { name: msg1, value: msg2, inline: true},
       )
       }
       if (message.author.id != 307335427331850242) emb.setTitle(`${author} told me to say`)
       if (message.channel.type === "dm") return
       message.channel.send(emb)

   } else {
       message.channel.send(`You're not my master, ${author}.`)
   }
   }


 } else {

   if (order.includes("!$bye")) {
     if (order.substring(order.indexOf("!$bye") - 1, order.indexOf("!$bye")) != "\\") {
     if (message.member.hasPermission("BAN_MEMBERS")) {
     message.delete()
     let reasonExists
     let reason
     if (order.includes("--r")) {
       reasonExists = true
       reason = args.substring(order.indexOf("--r") + 3)
       if (reason.substring(0, 1) == " ") reason = reason.substring(1)
     } else {
       reasonExists = false
     }
     let a = args.substring(order.indexOf("!$bye") + 5)
      if (reasonExists) {
       a = a.replace(reason, "")
       a = a.replace("--r", "")
     }
      a = a.replace("<@!", "")
      a = a.replace(">", "")
     a = a.replace(/ /g, "")
      console.log(a)
      b = message.guild.member(a)
     d = message.guild
          if (message.guild.member(a).nickname == null) {
            c = message.guild.member(a).user.username
          } else {
            c = message.guild.member(a).nickname
          }
    if (reasonExists) {
      client.users.cache.get(a).send(`https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4\n ${c}, you were banned from "${d}".\nReasom for the ban:"${reason}".`).then(() => {
            message.guild.member(a).ban({ reason: reason }).then(() =>{
        message.channel.send(`${b}\n https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4`)
               message.channel.send(`"${c}" was banned from this server.`)
               }).catch(error =>{
               message.channel.send(`I couldn't ban that user.`)
               })
      }).catch(error => {
             message.channel.send(`${b}\n https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4`)
      setTimeout(function(){
           message.guild.member(a).ban({ reason: reason }).then(() =>{
                message.channel.send(`"${c}" was banned from this server.`)
                }).catch(error =>{
                message.channel.send(`I couldn't ban that user.`)
                })
        }, 14000)
          })
      } else {
       client.users.cache.get(a).send(`https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4\n ${c}, you were banned from "${d}".`).then(() => {
            message.guild.member(a).ban().then(() =>{
        message.channel.send(`${b}\n https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4`)
               message.channel.send(`"${c}" was banned from this server.`)
               }).catch(error =>{
               message.channel.send(`I couldn't ban that user.`)
               })
      }).catch(error => {
             message.channel.send(`${b}\n https://cdn.discordapp.com/attachments/635571665861869605/729017344432537630/video0.mp4`)
      setTimeout(function(){
           message.guild.member(a).ban().then(() =>{
                message.channel.send(`"${c}" was banned from this server.`)
                }).catch(error =>{
                message.channel.send(`I couldn't ban that user.`)
                })
        }, 14000)
          })
    }
  } else {
    message.channel.send(`You're not allowed to ask me for that, ${author}.`)
  }
  }

} else {

  if (order.includes("!$a")) {
   if (message.author.id == 307335427331850242) {
    let path = args.substring(order.indexOf(`!$a`) + 3)
    if (path.substring(0, 1) == " ") path = path.substring(1)
    god.access(`./downloads/${path}`, god.F_OK, (error) => {
     if (error) return message.channel.send(`Master, I couldn't find that file.`)
     try {
     const attachment = new Discord.MessageAttachment(`./downloads/${path}`)
     message.channel.send(attachment)
     } catch {
        message.channel.send(`Master, something went wrong.`)
     }
   })
   } else {
     message.channel.send(`You're not my master, ${author}.`)
   }

}
}
}
}
}

if (order.includes("bot!")) {
if (order.substring(order.indexOf("bot!") - 1, order.indexOf("bot!")) != "\\") {

  if (order.includes("help")) {

    let usrid = message.author.id
    const emb = new Discord.MessageEmbed()
    .setColor("0066ff")
    let field0 = `Commands that only my master ${owner} can use`
    let field1 = `Commands that multiple people can use`
    let cmderror = false
    let invalidflag = true

    emb.addFields(
    { name: "\u200b", value: "\u200b", inline: false},
    )
    if (order.includes("--f")) {
      invalidflag = false
      let searchitem = order.substring(order.indexOf("--f") + 3)
      if (searchitem.includes("\\")) searchitem = searchitem.replace(/\\/g, "")
      if (searchitem.includes(" ")) searchitem = searchitem.replace(/ /g, "")
      if (searchitem.includes("--p")) searchitem = searchitem.replace("--p", "")
      if (searchitem.includes("--dm")) searchitem = searchitem.replace("--dm", "")
      function findcmd(cmdtofind) {
        if (cmdtofind.prefix.includes(searchitem)) return cmdtofind
      }
      let foundcmd = helpcommands.user.filter(findcmd)
      if (!foundcmd[0]) foundcmd = helpcommands.user.filter(findcmd); else foundcmd = foundcmd.concat(helpcommands.user.filter(findcmd))
      console.log(foundcmd)
      if (!foundcmd[0]) cmderror = true
      if (cmderror) {
        emb.setTitle("I couldn't find any commands under that name.")
      } else {
      emb.setTitle("Command search results")
      let cmdlist
      for (let x = 0; x < foundcmd.length; x++) {
        let addlist = `${foundcmd[x].prefix}\n`
        if (!order.includes("--p")) addlist += `${foundcmd[x].description}\n\n`; else addlist += `\n`
        let totlen
        if (cmdlist) {
          totlen = addlist.length + cmdlist.length
          if (totlen <= 1024) {
            cmdlist += addlist;
          } else {
            emb.addFields(
            { name: "\u200b", value: cmdlist, inline: false},
            )
            cmdlist = addlist
          }
        } else {
          cmdlist = addlist
        }
      }
      emb.addFields(
      { name: "\u200b", value: cmdlist, inline: false},
      )
      }
    } else {
    emb.setTitle("List of commands understood by me")
    if (!order.includes("--u") && !order.includes("--d")) {
      invalidflag = false
      let fieldS = "Special character"
      let fieldSV = "`\\`\n"
      if (!order.includes("--p")) fieldSV +="If this character precedes a command prefix (not considering flags), the command is ignored.\n"
      emb.addFields(
      { name: fieldS, value: fieldSV, inline: false},
      );
    }
    if (!order.includes("--u") && !order.includes("--s")) {
      invalidflag = false
      let cmdlist
      let already = false
      for (let x = 0; x < helpcommands.dev.length; x++) {
        let addlist = `${helpcommands.dev[x].prefix}\n`
        if (!order.includes("--p")) addlist += `${helpcommands.dev[x].description}\n\n`; else addlist += `\n`
        let totlen
        if (cmdlist) {
          totlen = addlist.length + cmdlist.length
          if (totlen <= 1024) {
            cmdlist += addlist;
          } else {
            if (already) {
            emb.addFields(
            { name: "\u200b", value: cmdlist, inline: false},
            )
            } else {
              emb.addFields(
              { name: field0, value: cmdlist, inline: false},
              )
            }
            already = true
            cmdlist = addlist
          }
        } else {
          cmdlist = addlist
        }
      }
      if (already) {
      emb.addFields(
      { name: "\u200b", value: cmdlist, inline: false},
      )
      } else {
        emb.addFields(
        { name: field0, value: cmdlist, inline: false},
        )
      }
      already = true
    }

    if (!order.includes("--d") && !order.includes("--s")) {
    invalidflag = false
    let cmdlist
    let already = false
    for (let x = 0; x < helpcommands.user.length; x++) {
      let addlist = `${helpcommands.user[x].prefix}\n`
      if (!order.includes("--p")) addlist += `${helpcommands.user[x].description}\n\n`; else addlist += `\n`
      let totlen
      if (cmdlist) {
        totlen = addlist.length + cmdlist.length
        if (totlen <= 1024) {
          cmdlist += addlist;
        } else {
          if (already) {
          emb.addFields(
          { name: "\u200b", value: cmdlist, inline: false},
          )
          } else {
            emb.addFields(
            { name: field1, value: cmdlist, inline: false},
            )
          }
          already = true
          cmdlist = addlist
        }
      } else {
        cmdlist = addlist
      }
    }
    if (already) {
    emb.addFields(
    { name: "\u200b", value: cmdlist, inline: false},
    )
    } else {
      emb.addFields(
      { name: field1, value: cmdlist, inline: false},
      )
    }
    already = true
    }
    }
    if (cmderror) {
      if (message.author.id == 307335427331850242) {
        if (order.includes("--dm")) {
          const m = client.users.cache.get(`${usrid}`).send("Master, I couldn't find that command.")
        } else {
          const m = message.channel.send("Master, I couldn't find that command.")
        }
      } else {
        if (order.includes("--dm")) {
          const m =client.users.cache.get(`${usrid}`).send(`${author}, I couldn't find that command.`)
        } else {
          const m = message.channel.send(`${author}, I couldn't find that command.`)
        }
      }
    } else {
    if (message.author.id == 307335427331850242) {
      if (invalidflag) {
        if (order.includes("--dm")) {
          const m = client.users.cache.get(`${usrid}`).send("Master, this is an invalid combination of flags.")
        } else {
          const m = message.channel.send("Master, this is an invalid combination of flags.")
        }
      } else {
      if (order.includes("--dm")) {
        client.users.cache.get(`${usrid}`).send("Dear master, I'm glad to help you:")
        const m = client.users.cache.get(`${usrid}`).send(emb)
      } else {
        message.channel.send("Dear master, I'm glad to help you:")
        const m = message.channel.send(emb)
      }
      }
    } else {
      if (invalidflag) {
        if (order.includes("--dm")) {
          const m = client.users.cache.get(`${usrid}`).send(`${author}, this is an invalid combination of flags.`)
        } else {
          const m = message.channel.send(`${author}, this is an invalid combination of flags.`)
        }
      } else {
      if (order.includes("--dm")) {
        client.users.cache.get(`${usrid}`).send(`${author}, I'm glad to help you:`)
        const m = client.users.cache.get(`${usrid}`).send(emb)
      } else {
        message.channel.send(`${author}, I'm glad to help you:`)
        const m = message.channel.send(emb)
      }
      }
    }
    }


  } else {

  if (order.includes("play")) {
    if (!message.member.voice.channel) {
      if (message.author.id == 307335427331850242) {
        return message.channel.send(`Master, enter a voice channel first.`)
      } else {
          return message.channel.send(`${author}, enter a voice channel first.`)
      }
    }
    let cserver
    let stream
    let temp = message.guild.id
    async function play(con, mes) {
      let splay
      let info = await ytdl.getInfo(cserver.queue[0])
      let infoa = await ytdl.getInfo(cserver.queue[cserver.queue.length - 1])
      let firstsong = info.title
      let lastsong = infoa.title
      stream = ytdl(cserver.queue[0], { filter: "audioonly"})
      if (!globals.pmusic.includes(message.guild.id)) splay = true; else splay = false
      if (splay) {
      globals.pmusic.push(message.guild.id)
      globals.pmusic2.push(message.guild.id)
      const musicplay = stream.pipe(god.createWriteStream(`temp/${temp}`)).on("close", async function() {
      if (globals.showsongs.includes(message.guild.id)) message.channel.send(`Now playing "${firstsong}"...`)
      cserver.dispatcher = con.play(god.createReadStream(`temp/${temp}`))
      cserver.queue.shift()
      cserver.dispatcher.on("finish", function(){
        globals.pmusic = globals.pmusic.filter(sameserver)
        globals.pmusic2 = globals.pmusic2.filter(sameserver)
        if(cserver.queue[0]){
          play(con, mes)
        } else {
          message.channel.send(`No songs left to play, now disconecting...`)
          con.disconnect()
        }
      })
      })
      } else {
        if (globals.showsongs.includes(message.guild.id)) {
          if (message.author.id == 307335427331850242) {
            message.channel.send(`Master, "${lastsong}" was added to the queue.`)
          } else {
              message.channel.send(`${author}, "${lastsong}" was added to the queue.`)
          }
        }
      }
    }
    let search = link
    let checkvalid = false
    link = link.replace(/ /g, "")
    let plink
    if (!order.includes("--h")) globals.showsongs.push(message.guild.id)
    if (order.includes("--p")) {
      plink = order.substring(order.indexOf("--p") + 3)
      if (message.author.id == 307335427331850242) {
      if (parseInt(plink.substring(0, 1), 10) < 5) {
      async function playp(con, mes) {
        let info = await ytdl.getInfo(cserverp.queue[0])
        let firstsong = info.title
        stream = ytdl(cserverp.queue[0], { quality:"highestaudio", filter: "audioonly"})
        globals.pmusic.push(message.guild.id)
        globals.pmusic2.push(message.guild.id)
        const musicplay = stream.pipe(god.createWriteStream(`temp/${temp}`)).on("close", async function() {
        if (globals.showsongs.includes(message.guild.id)) message.channel.send(`Now playing "${firstsong}"...`)
        cserverp.dispatcher = con.play(god.createReadStream(`temp/${temp}`))
        cserverp.queue.shift()
        cserverp.dispatcher.on("finish", function(){
          globals.pmusic = globals.pmusic.filter(sameserver)
          globals.pmusic2 = globals.pmusic2.filter(sameserver)
          if(cserverp.queue[0]){
            playp(con, mes)
          } else {
            globals.playingpriv = false
            privqueue = 0
            message.channel.send(`No songs left to play, now disconecting...`)
            con.disconnect()
          }
        })
        })
      }
      if (!globals.playingpriv) {
        if (!message.member.voice.channel) return message.channel.send(`Master, enter a voice channel first.`);
        privqueue = `queue${plink}`
        if (globals.plist[privqueue].queue[0]) cserverp = JSON.parse(JSON.stringify(globals.plist[privqueue])); else return message.channel.send("Master, this playlist is empty.")
        globals.playingpriv = true
      } else {
        return message.channel.send(`Master, I'm already playing songs on this server...`)
      }
        message.member.voice.channel.join().then(function(connection){
        playp(connection, message)
        })
      } else {
        message.channel.send(`Master, this is not a valid predefined playlist.`)
      }
      } else {
        message.channel.send(`Only my master has permission to use this flag, ${author}.`)
      }
    } else {
      if (globals.playingpriv) {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, I'm already playing your personal playlist.`)
        } else {
            message.channel.send(`${author}, you can't add songs to this playlist.`)
        }
      } else {
      checkvalid = ytdl.validateURL(link);
        if(!globals.queueservers[message.guild.id]) {
          globals.queueservers[message.guild.id] = {
          queue: []
          }
        }
        cserver = globals.queueservers[message.guild.id]
        if (checkvalid) {
         cserver.queue.push(link)
        } else {
         if (search.substring(0, 1) == " ") search = search.substring(1)
         let options = {
         limit: 1,
         }
         const l = await ytsr(search, options)
         let searchlink = Object.values(Object.values(l)[1][0])[3]
         checkvalid2 = ytdl.validateURL(searchlink);
         if (checkvalid2) {
           cserver.queue.push(searchlink)
         } else {
           if (message.author.id == 307335427331850242) {
             message.channel.send(`Master, something went wrong.`)
           } else {
               message.channel.send(`${author}, something went wrong.`)
           }
         }
        }
        if (!message.member.voice.connection) {
          if (checkvalid || checkvalid2) {
          message.member.voice.channel.join().then(function(connection){
          play(connection, message)
          })
          }
        }
      }
    }


  } else {

  if (order.includes("queue")) {

    if (!globals.pmusic2.includes(message.guild.id)) {
    if (message.author.id == 307335427331850242) {
      message.channel.send(`Master, I'm not playing any songs in this server.`)
    } else {
        message.channel.send(`${author}, I'm not playing any songs in this server.`)
    }
    } else {
     if (globals.playingpriv && message.author.id == 307335427331850242) {
       let cserver = cserverp
       let queuenames = []
       for (let x = 0; x < cserver.queue.length; x++) {
         let info = ytdl.getInfo(cserver.queue[x])
         let namesong = info.title
         queuenames.push(namesong)
       }
       if (`${queuenames}` == "") {
         const list = new Discord.MessageEmbed().setTitle(`Master, your personal queue is empty.`)
         .setColor("0066ff")
         .addFields(
         { name: "\u200b", value: "\u200b", inline: true},
         )
           message.channel.send(`These are the next songs in the list, master:\n`)
           message.channel.send(list)
       } else {
         const list = new Discord.MessageEmbed().setTitle(`${message.guild}'s queue`)
         .setColor("0066ff")
         .addFields(
         { name: "\u200b", value: queuenames, inline: true},
         )
         if (message.author.id == 307335427331850242) {
           message.channel.send(`These are the next songs in the list, master:\n`)
           message.channel.send(list)
         } else {
           message.channel.send(`These are the next songs in the list, ${author}\n`)
           message.channel.send(list)
         }
       }
     } else {
       let cserver = globals.queueservers[message.guild.id]
       let queuenames = []
       for (let x = 0; x < cserver.queue.length; x++) {
         info = ytdl.getInfo(cserver.queue[x])
         let namesong = info.title
         queuenames.push(namesong)
       }
       if (`${queuenames}` == "") {
         const list = new Discord.MessageEmbed().setTitle(`${message.guild}'s queue is empty.`)
         .setColor("0066ff")
         .addFields(
         { name: "\u200b", value: "\u200b", inline: true},
         )
         if (message.author.id == 307335427331850242) {
           message.channel.send(`These are the next songs in the list, master:\n`)
           message.channel.send(list)
         } else {
           message.channel.send(`These are the next songs in the list, ${author}\n`)
           message.channel.send(list)
         }
       } else {
         const list = new Discord.MessageEmbed().setTitle(`${message.guild}'s queue`)
         .setColor("0066ff")
         .addFields(
         { name: "\u200b", value: queuenames, inline: true},
         )
         if (message.author.id == 307335427331850242) {
           message.channel.send(`These are the next songs in the list, master:\n`)
           message.channel.send(list)
         } else {
           message.channel.send(`These are the next songs in the list, ${author}\n`)
           message.channel.send(list)
         }
       }
     }
    }


  } else {

  if (order.includes("skip")) {

    let cserver
    let notplaying
    if (globals.pmusic.includes(message.guild.id)) notplaying = false; else notplaying = true;
    if (notplaying) {
      if (message.author.id == 307335427331850242) {
        message.channel.send(`Master, I'm not playing any songs in this server.`)
      } else {
          message.channel.send(`${author}, I'm not playing any songs in this server.`)
      }
    } else {
      if (message.member.voice.channel) {
      if (globals.playingpriv && message.author.id == 307335427331850242) {
        cserver = cserverp
      } else {
        cserver = globals.queueservers[message.guild.id]
      }
      globals.pmusic = globals.pmusic.filter(sameserver)
        if (cserver.dispatcher) {
        cserver.dispatcher.end()
        }
      } else {
       if (message.author.id == 307335427331850242) {
        message.channel.send(`Master, enter a voice channel first.`)
       } else {
          message.channel.send(`${author}, enter a voice channel first.`)
       }
      }
    }

  } else {

    if (order.includes("stop")) {

    let cserver

    if (globals.pmusic.includes(message.guild.id)) {
      if (message.member.voice.channel) {
        if (globals.playingpriv && message.author.id == 307335427331850242) {
          cserver = cserverp
        } else {
          cserver = globals.queueservers[message.guild.id]
        }
          if (cserver.queue.length >= 0) message.channel.send(`Erasing the queue for this server...`)
          for (let x = cserver.queue.length; x >= 0; x--) {
            cserver.queue.shift()
          }
          if (cserver.dispatcher) {
          cserver.dispatcher.end()

          globals.pmusic2 = globals.pmusic2.filter(sameserver)
          globals.showsongs = globals.showsongs.filter(sameserver)
          globals.pmusic = globals.pmusic.filter(sameserver)
        }
      } else {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, enter a voice channel first.`)
        } else {
            message.channel.send(`${author}, enter a voice channel first.`)
        }
      }

    } else {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, I'm not playing any songs in this server.`)
        } else {
          message.channel.send(`${author}, I'm not playing any songs in this server.`)
        }
    }



  } else {

  if (order.includes("intro")) {

      let hexcol
      let c = args
      if (order.includes("--c")) {
        let chkspace = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 4)
        if (chkspace == " ") {
          hexcol = c.substring(c.indexOf("--c") + 4, c.indexOf("--c") + 10)
       } else {
         hexcol = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 9)
       }
      } else {
        hexcol = "0066ff"
      }
        const emb = new Discord.MessageEmbed().setTitle(`Hello, I am Bot.`)
        .setColor(hexcol)
        .addFields(
        { name: `I'm a bot my master, ${author}, is developing to entertain themselves and learn to code.`, value: `\n*(to know about the commands I understand, say "bot! help")*\n\nI am glad to help my master and their friends.\n||I don't like helping people i don't trust, though.||`, inline: true},
        )
        const m = message.channel.send(emb)


  } else {

  if (order.includes("status")) {

    if (message.author.id == 307335427331850242) {
      const sub1 = args.substring(order.indexOf("status") + 6)
      if (sub1.toLowerCase().includes("--l")) {
         manualStatus = true
         const sub2 = sub1.replace('--l','')
         client.user.setActivity(sub2, { type: 'LISTENING'});
         message.channel.send(`I am now listening to ${sub2}, master ${author}!`)
      } else {
        if (sub1.toLowerCase().includes("--w")) {
          manualStatus = true
          const sub2 = sub1.replace('--w','')
          client.user.setActivity(sub2, { type: 'WATCHING'});
          message.channel.send(`I am now watching ${sub2}, master ${author}!`)
        } else {
           if (sub1.toLowerCase().includes("--a")) {
             manualStatus = false
             if (statusBot) {
                client.user.setActivity("Meleeeee!");
             } else {
                client.user.setActivity("DELTARUNE chap. 2");
             }
             message.channel.send(`My status will now automatically change every 20 minutes, master ${author}!`)
           } else {
             manualStatus = true
             client.user.setActivity(sub1);
               message.channel.send(`I am now playing ${sub1}, master ${author}`)
           }
        }
      }
    } else {
      message.channel.send(`You're not my master, ${author}.`)
    }

  } else {

    if (order.includes("be")) {

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

  } else {

    if (order.includes("time")) {
     if (message.author.id == 307335427331850242) {
      checktime()
        message.channel.send(`Master ${author}, it's now ${currentTime} for me.`)
     } else {
         checktime()
         message.channel.send(`${author}, it's now ${currentTime} for me.`)
     }

  } else {

    if (order.includes("alarm")) {
      if (order.includes("--g")) {
        if (message.author.id == 307335427331850242) {
         special = args.substring(args.indexOf("--g") + 3)
         if (special.substring(0, 1) == " ") special = special.substring(1)
         god.writeFile("data/special", special, function (error) {})
         message.channel.send(`I've set the default alarm message to "${special}", master.`)
        } else {
          if (globals.trustlist.includes(message.author.id)) {
            message.channel.send(`Only my master has permission to use this flag, ${author}.`)
          } else {
            message.channel.send(`You're not my master, ${author}.`)
          }
        }
      } else {
      if (message.author.id == 307335427331850242 || globals.trustlist.includes(message.author.id)) {
       if (order.includes("--del")) {
         if (alarm) {
         alarm = false
         if (message.author.id == 307335427331850242) {
           message.channel.send("I erased the previously set alarm, master.")
         } else {
           message.channel.send(`I erased the previously set alarm, ${author}`)
         }
         } else {
           if (message.author.id == 307335427331850242) {
             message.channel.send("There is no predefined alarm, master")
           } else {
             message.channel.send(`There is no predefined alarm, ${author}`)
           }
         }
       } else {
        if (alarm) {
          message.channel.send(`An alarm is already set, master.`)
        } else {
         if (order.includes("--h")) {
           if (order.substring(order.indexOf("--h") + 3, order.substring(order.indexOf("--h") + 4) == " ")) {
             thour = parseInt(order.substring(order.indexOf("--h") + 4, order.indexOf("--h") + 6), 10)
           } else {
             thour = parseInt(order.substring(order.indexOf("--h") + 3, order.indexOf("--h") + 5), 10)
           }
           if (isNaN(thour)) {
             if (message.author.id == 307335427331850242) {
                 message.channel.send(`The hour you told me to say the alarm is invalid, master.`)
             } else {
                 message.channel.send(`The hour you told me to say the alarm is invalid, ${author}.`)
             }
             return
           }
           while (thour > 23) {
             thour -= 24
           }
           if (order.includes("--msg")) {
             timeOutMessage = order.substring(order.indexOf("--msg") + 5)
           } else {
              if (!special) {
               timeOutMessage = "Alarm"
              } else {
               timeOutMessage = special
              }
           }
           if (order.includes("--min")) {
             if (order.substring(order.indexOf("--min") + 5, order.substring(order.indexOf("--min") + 6) == " ")) {
               tmin = parseInt(order.substring(order.indexOf("--min") + 6, order.indexOf("--min") + 8), 10)
             } else {
               tmin = parseInt(order.substring(order.indexOf("--min") + 5, order.indexOf("--min") + 7), 10)
             }
             if (isNaN(tmin)) tmin = 0
             while (tmin > 59) {
               tmin -= 60
             }
           } else {
             tmin = 0
           }
           if (order.includes("--y")) {
             if (order.substring(order.indexOf("--y") + 3, order.substring(order.indexOf("--y") + 4) == " ")) {
               tyear = parseInt(order.substring(order.indexOf("--y") + 4, order.indexOf("--y") + 8), 10)
             } else {
               year = parseInt(order.substring(order.indexOf("--y") + 3, order.indexOf("--y") + 7), 10)
             }
             if (isNaN(tyear)) tyear = ana
             if (tyear < ana) tyear = ana; else tyear = ana
           } else {
             if (tyear < ana) tyear = ana; else tyear = ana
           }
           if (order.includes("--mon")) {
             if (order.substring(order.indexOf("--mon") + 5, order.substring(order.indexOf("--mon") + 6) == " ")) {
             tmonth = parseInt(order.substring(order.indexOf("--mon") + 6, order.indexOf("--mon") + 8), 10)
             } else {
             tmonth = parseInt(order.substring(order.indexOf("--mon") + 5, order.indexOf("--mon") + 7), 10)
             }
             if (isNaN(tmonth)) tmonth = v24
             while (tmonth > 12) {
               tmonth -= 12
             }
             if (tyear == ana && tmonth < v24) tmonth = v24
           } else {
             tmonth = v24
           }
           if (order.includes("--dat")) {
             if (order.substring(order.indexOf("--dat") + 5, order.substring(order.indexOf("--dat") + 7) == " ")) {
               tdate = parseInt(order.substring(order.indexOf("--dat") + 6, order.indexOf("--dat") + 8), 10)
             } else {
              tdate = parseInt(order.substring(order.indexOf("--dat") + 5, order.indexOf("--dat") + 7), 10)
             }
             if (!isNaN(tdate)) {
               if (tmonth == 1 || tmonth == 3 || tmonth == 5 || tmonth == 7 || tmonth == 8 || tmonth == 10 || tmonth == 12) {
                 while (tdate > 31) {
                   tdate -= 31
                 }
               } else {
                  if (tmonth == 2 && bi6to) {
                    while (tdate > 29) {
                      tdate -= 29
                    }
                  } else {
                    if (tmonth == 2) {
                      while (tdate > 28) {
                        tdate -= 28
                      }
                    } else {
                      while (tdate > 30) {
                        tdate -= 30
                      }
                    }
                  }
               }
             } else {
               tdate = v23
               if (thour < v17 || thour == v17 && tmin <= v18) {
                 if (tmonth == 1 || tmonth == 3 || tmonth == 5 || tmonth == 7 || tmonth == 8 || tmonth == 10 || tmonth == 12) {
                   if (tdate == 31) {
                     if (tmonth == 12) {
                       tyear += 1
                       tmonth = 1
                     } else {
                       tmonth += 1
                     }
                     tdate = 1
                    } else {
                      tdate += 1
                    }
                 } else {
                     if (tmonth == 2) {
                       if (bi6to && tdate == 29 || !bi6to && tdate == 28) {
                         tmonth += 1
                         tdate = 1
                        }
                     } else {
                       if (tdate == 30) {
                         tmonth += 1
                         tdate = 1
                        } else {
                          tdate += 1
                        }
                     }
                 }
               }
             }
           } else {
             tdate = v23
             if (thour < v17 || thour == v17 && tmin <= v18) {
               console.log("ok")
               if (tmonth == 1 || tmonth == 3 || tmonth == 5 || tmonth == 7 || tmonth == 8 || tmonth == 10 || tmonth == 12) {
                 if (tdate == 31) {
                   if (tmonth == 12) {
                     tyear += 1
                     tmonth = 1
                   } else {
                     tmonth += 1
                   }
                   tdate = 1
                 } else {
                   tdate += 1
                 }
               } else {
                   if (tmonth == 2) {
                     if (bi6to && tdate == 29 || !bi6to && tdate == 28) {
                       tmonth += 1
                       tdate = 1
                      } else {
                        tdate += 1
                      }
                   } else {
                     if (tdate == 30) {
                       tmonth += 1
                       tdate = 1
                      } else {
                        tdate += 1
                      }
                   }
               }
             }
           }
           amessage = message.channel
           console.log(amessage)
           alarm = true
           if (tmin < 10) {
             if (message.author.id == 307335427331850242) {
               if (order.includes("--dm")) {
                  message.guild.member("307335427331850242").send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage} of the server "${message.guild}"; master.`)
                } else {
                  message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage} of the server "${message.guild}"; master.`)
               }
             } else {
               if (order.includes("--dm")) {
                  message.guild.member(message.author.id).send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage} of the server "${message.guild}"; ${author}.`)
                } else {
                  message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage} of the server "${message.guild}""; ${author}.`)
               }
             }
           } else {
             if (message.author.id == 307335427331850242) {
               if (order.includes("--dm")) {
                  message.guild.member("307335427331850242").send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage} of the server ${message.guild}; master.`)
               } else {
                  message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage} of the server ${message.guild}; master.`)
               }
             } else {
               if (order.includes("--dm")) {
                  message.guild.member("307335427331850242").send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage} of the server ${message.guild}; ${author}.`)
                } else {
                  message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage} of the server ${message.guild}; ${author}.`)
               }
             }
           }
         } else {
           if (message.author.id == 307335427331850242) {
            message.channel.send(`You didn't tell me the hour when i should say the alarm, master.`)
          } else {
            message.channel.send(`You didn't tell me the hour when i should say the alarm, ${author}.`)
          }
         }
       }
     }
     } else {
        message.channel.send(`You're not my master, ${author}.`)
     }
     }

  } else {

    if (order.includes("laugh")) {
     if (message.author.id == 307335427331850242) {
         message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, master ${author}.`)
     } else {
       if (globals.trustlist.includes(message.author.id)) {
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

  } else {

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
    if (message.author.id == 307335427331850242) {
      if (trust == "307335427331850242") {
        message.channel.send(`I already trust you, master ${author}.`)
      } else {
        if (nouser) {
          message.channel.send(`I don't recognize that user, master!`)
        } else {
        let remove
        if (globals.blocklist.includes(trust)) {
          remove = true
        }
        if (remove) {
          function data(id) {
            if (id != trust) return id
          }
          globals.blocklist = globals.blocklist.filter(data)
          let data0 = globals.blocklist.join("\n")
          let rewrite = god.promises.writeFile('./data/blocklist', data0, 'utf8', {'flags': 'r+'});
        }

        if (globals.trustlist.includes(trust)) {
          const m = message.channel.send(`Master, I already trust ${trustable}.`)
          } else {
          let add = god.promises.appendFile('./data/trustlist', `${trust}\n`, 'utf8', {'flags': 'a+'});
          globals.trustlist.push(trust)
          message.channel.send(`I now trust ${trustable}, master!`)
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
     if (message.author.id == 307335427331850242) {
       if (block == "307335427331850242") {
         message.channel.send(`I can't block you, master ${author}!`)
     } else {
       if (nouser) {
         message.channel.send(`I don't recognize that user, master!`)
       } else {
       let remove
       if (globals.trustlist.includes(block)) {
         remove = true
       }
       if (remove) {
         function data(id) {
           if (id != block) return id
         }
         globals.trustlist = globals.trustlist.filter(data)
         let data0 = globals.trustlist.join("\n")
         let rewrite = god.promises.writeFile('./data/trustlist', data0, 'utf8', {'flags': 'r+'});
       }
         if (globals.blocklist.includes(block)) {
           const m = message.channel.send(`Master, I already blocked ${blockable}.`)
         } else {
           let add = god.promises.appendFile('./data/blocklist', `${block}\n`, 'utf8', {'flags': 'a+'});
           globals.blocklist.push(block)
           message.channel.send(`I blocked ${blockable}, master.`)

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
     if (message.author.id == 307335427331850242) {
       if (rest == "307335427331850242") {
         message.channel.send(`I can't stop trusting you, master ${author}!`)
       } else {
         if (nouser) {
           message.channel.send(`I don't recognize that user, master!`)
         } else {
         if (globals.trustlist.includes(rest)) {

         function data(id) {
           if (id != rest) return id
         }
         globals.trustlist = globals.trustlist.filter(data)
         let data0 = globals.trustlist.join("\n")
         god.promises.writeFile('./data/trustlist', data0, 'utf8', {'flags': 'r+'});
         const m = message.channel.send(`I stopped trusting ${restable}, master.`)
         } else {
           if (globals.blocklist.includes(rest)) {

           function data(id) {
             if (id != rest) return id
           }
           globals.blocklist = globals.blocklist.filter(data)
           let data0 = globals.blocklist.join("\n")
           let rewrite = god.promises.writeFile('./data/blocklist', data0, 'utf8', {'flags': 'r+'});
           message.channel.send(`I unblocked ${restable}, master.`)
         } else {
           message.channel.send(`There's nothing to reset about ${restable}, master.`)
         }
         }
       }
       }

     } else {
        message.channel.send(`You're not my master, ${author}.`)
     }

 } else {

   if (order.includes("hi")) {
    if (message.author.id == 307335427331850242) {
        message.channel.send(`Hi, master ${author}. How can I serve you?`)
    } else {
      if (globals.trustlist.includes(message.author.id)) {
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
     if (globals.trustlist.includes(message.author.id)) {
       message.channel.send(`You're welcome, <@${message.author.id}>.`)
     } else {
       message.channel.send(`You're not my master, ${author}.`)
     }
   }

  } else {

    if (message.author.id == 307335427331850242) {
      message.channel.send(`I didn't quite understand your order, master ${author}.`)
    } else {
      if (globals.trustlist.includes(message.author.id)) {
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
}
}
}
}
}
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
}
wait().then() //blocking my code on purpose cause i need it

return globals

}
