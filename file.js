const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core")
const ytsr = require("ytsr")
const god = require('fs')
const readline = require('readline');

let dir0 = "./downloads";
if (!god.existsSync(dir0)){
    god.mkdirSync(dir0);
}
let dir1 = "./temp";
if (!god.existsSync(dir1)){
    god.mkdirSync(dir1);
}
let dir2 = "./data";
if (!god.existsSync(dir2)){
    god.mkdirSync(dir2);
}
let token
function getToken() {
  try {
     token = god.readFileSync('data/token', 'utf8').toString();
  }
  catch (error) {
    console.log(error)
  }
};
getToken()

let blacklist = []
if (!god.existsSync("data/blacklist")){
  god.closeSync(god.openSync("data/blacklist", 'w'));
} else {
  readline.createInterface({
      input: god.createReadStream("data/blacklist"),
      terminal: false
  }).on('line', function(line) {
     blacklist.push(line)
  });
}
let whitelist = []
if (!god.existsSync("data/whitelist")){
  god.closeSync(god.openSync("data/whitelist", 'w'));
} else {
  readline.createInterface({
      input: god.createReadStream("data/whitelist"),
      terminal: false
  }).on('line', function(line) {
     whitelist.push(line)
  });
}

let queueservers = {}
let pmusic = []
let pmusic2 = []
let showsongs = []
let tmin
let thour
let tdate
let tmonth
let tyear
let timeOutMessage
let amessage
let v18
let v17
let v23
let v24
let ana
let statusBot = true
let manualStatus = false
let bi6to
let alarm = false
let currentTime
let ga0 = [ ]
let ga1 = [ ]
let ga2 = [ ]
let ga3 = [ ]
let ga4 = [ ]
let g0
let g1
let g2
let g3
let g4
let g5
let g6
let g7
let g8
let g9
let special


//This is logged when the bot is initialized.
client.on("ready", () => {
  console.log(`Hey. I was initialized inside ${client.guilds.cache.size} servers.`);
  let initialact = Math.round(Math.random())
  if (initialact == 0) client.user.setActivity("Meleeeee!"); else client.user.setActivity("DELTARUNE chap. 2");
  checktime()
  setInterval(changeStatus, 1200000)
  setInterval(checktime, 60000)
});


function changeStatus() {
  if (statusBot) {
     if (!manualStatus) client.user.setActivity("Meleeeee!");
  } else {
     if (!manualStatus) client.user.setActivity("DELTARUNE chap. 2");
  }
  statusBot = !statusBot

};

async function checktime() {
  let horario = Date.now()
  let harario = Math.floor(horario * Math.pow(86400000, -1))
  let hirario = harario * 86400000
  let herario = horario - hirario
  herario = herario * Math.pow(60000, -1)
  let onset = new Date().getTimezoneOffset()
  herario = herario - onset
  if (herario < 0) herario += 1440
  let semana = Date.now()
  onset = new Date().getTimezoneOffset()
  onset *= 60000
  semana -= onset
  let samana = Math.floor(semana * Math.pow(604800000, -1))
  let simana = samana * 604800000
  let somana = semana - simana
  let sumana = somana % 86400000
  somana -= sumana
  somana = somana * (Math.pow(86400000, -1))
  let ano = Date.now()
  onset = new Date().getTimezoneOffset()
  onset *= 60000
  ano -= onset
  ana = Math.floor(semana * Math.pow(126230400000, -1))
  let ani = ana * 126230400000
  let anoo = ano - ani

  let anu = anoo % 86400000
  anoo -= anu
  anoo = anoo * (Math.pow(86400000, -1))
  ana = ana * 4
  ana += 1970

  v17 = Math.floor(herario / 60)
  v18 = Math.floor(herario % 60)
  if (anoo < 730) {
    if (anoo > 364) {
      ana += 1
      anoo -= 365
    }
    bi6to = false
  } else {
    if (anoo > 1095) {
      ana += 3
      anoo -= 1096
      bi6to = false
    } else {
      ana += 2
      anoo -= 730
      bi6to = true
    }
  }

if (bi6to) {
    if (anoo < 31) {
      v23 = anoo
      v24 = 1
    } else {
      if (anoo < 60) {
        v23 = anoo - 31
        v24 = 2
      } else {
        if (anoo < 91) {
          v23 = anoo - 60
          v24 = 3
        } else {
          if (anoo < 121) {
            v23 = anoo - 91
            v24 = 4
          } else {
            if (anoo < 152) {
              v23 = anoo - 121
              v24 = 5
            } else {
              if (anoo < 182) {
                v23 = anoo - 152
                v24 = 6
              } else {
                if (anoo < 213) {
                  v23 = anoo - 182
                  v24 = 7
                } else {
                  if (anoo < 244) {
                    v23 = anoo - 213
                    v24 = 8
                  } else {
                    if (anoo < 274) {
                      v23 = anoo - 244
                      v24 = 9
                    } else {
                      if (anoo < 305) {
                        v23 = anoo - 274
                        v24 = 10
                      } else {
                        if (anoo < 335) {
                          v23 = anoo - 305
                          v24 = 11
                        } else {
                            v23 = anoo - 335
                            v24 = 12
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
} else {
    if (anoo < 31) {
      v23 = anoo
      v24 = 1
    } else {
      if (anoo < 59) {
        v23 = anoo - 31
        v24 = 2
      } else {
        if (anoo < 90) {
          v23 = anoo - 59
          v24 = 3
        } else {
          if (anoo < 120) {
            v23 = anoo - 90
            v24 = 4
          } else {
            if (anoo < 151) {
              v23 = anoo - 120
              v24 = 5
            } else {
              if (anoo < 181) {
                v23 = anoo - 151
                v24 = 6
              } else {
                if (anoo < 212) {
                  v23 = anoo - 181
                  v24 = 7
                } else {
                  if (anoo < 243) {
                    v23 = anoo - 212
                    v24 = 8
                  } else {
                    if (anoo < 273) {
                      v23 = anoo - 243
                      v24 = 9
                    } else {
                      if (anoo < 304) {
                        v23 = anoo - 273
                        v24 = 10
                      } else {
                        if (anoo < 334) {
                          v23 = anoo - 304
                          v24 = 11
                        } else {
                            v23 = anoo - 334
                            v24 = 12
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

  v23 += 1
  //v17 = hours
  //v18 = minutes
  //v23 = date
  //v24 = month
  //ana = year
  if (v17 < 10) {
    if (v18 < 10) {
      currentTime = `${v24}/${v23}/${ana} 0${v17}:0${v18}`
    } else {
      currentTime = `${v24}/${v23}/${ana} 0${v17}:${v18}`
    }
  } else {
    if (v18 < 10) {
      currentTime = `${v24}/${v23}/${ana} ${v17}:0${v18}`
    } else {
      currentTime = `${v24}/${v23}/${ana} ${v17}:${v18}`
    }

  }

  if (alarm && tmin == v18 && thour == v17 && tdate == v23 && tmonth == v24 && tyear == ana) {
      const m = await amessage.send(timeOutMessage)
      alarm = false
  }
}

//This is logged when the bot enters a new server.
client.on("guildCreate", guild => {
  console.log(`I just joined the server "${guild.name}" (ID: ${guild.id}). There are ${guild.memberCount} members there.`);
});

//This is logged when the bot leaves a server.
client.on("guildDelete", guild => {
  console.log(`I just left the server "${guild.name}" (ID: ${guild.id})...`);
});




//This sets the bot messages.
client.on("message", async message => {

if (!blacklist.includes(message.author.id)) {

  if (message.author.bot) return;
  const args = message.content
  const order = args.toLowerCase();
  const fchar = parseInt(args.substring(0, 18), 10)
  let link = args.substring(order.indexOf("play") + 4)

if (order.includes("!$d")) {
  message.delete()
}

function sameserver(id) {
    if (id != message.guild.id) return id
}

  if (order.includes("--hide") && whitelist.includes(message.author.id) || order.includes("--hide") && message.author.id == 307335427331850242) {
    showsongs = showsongs.filter(sameserver)

  } else {

  if (order.includes("--show") && whitelist.includes(message.author.id) || order.includes("--show") && message.author.id == 307335427331850242) {
    showsongs.push(message.guild.id)

  }
  }

if (order.includes("!%d") && message.author.id == 307335427331850242 && message.channel.type === "dm") {
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

if (message.channel.type === "dm") {
  const id = args.substring(0, 18)
  let dm = args.substring(18)
  if (dm.includes("%%") && dm.includes("/")) {
     let hexcol
     let c
     if (message.author.id == 307335427331850242) {
       if (dm.includes("%%%")) {
         hexcol = order.substring(order.indexOf("%%%"), order.indexOf("%%%") + 9)
         const d = dm.substring(dm.indexOf("%%%"), dm.indexOf("%%%") + 9)
         c = dm.replace(d, '')
         hexcol = hexcol.substring(3)
       } else {
         c = dm.replace("%%", '')
         hexcol = "00aaff"
       }
       msg1 = c.substring(0, c.indexOf("/"))
       msg2 = c.replace(msg1, '')
       msg2 = msg2.substring(1)
       const emb = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: "\u200b", value: msg2, inline: true},
       )
       const emb1 = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: msg1, value: "\u200b", inline: true},
       )
       const emb2 = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: msg1, value: msg2, inline: true},
       )
       if (msg1.substring(1) == "!" || msg1.substring(1, 2) == "!" || msg1 == "!") {
         dm = emb
       } else {
         if (msg2.substring(1) == "!" || msg2 == "!") {
            dm = emb1
         } else {
            dm = emb2
         }
       }
     }
   }
   if (message.author.id == 307335427331850242 && !isNaN(fchar)) {
    await client.users.cache.get(id).send(dm).catch(error =>{
      message.author.send(`I couldn't send "${dm}" to ${id}.`)
    })

   } else {
   if (message.author.bot) return;
   if (message.author.id != 307335427331850242) client.users.cache.get("307335427331850242").send("```js\n" + `${message.author.username}, ID: ${message.author.id}\n` + "```\n" + args)
   }
}

if (order.includes(":::")) {
  if (message.author.id == 307335427331850242) {
    let ev = args.substring(args.indexOf(":::") + 3)
    function say(a){
      message.channel.send(a)
    }
    function dm(a){
      message.guild.member("307335427331850242").send(a)
    }
    try {
     eval(ev)
    } catch (error) {
       message.guild.member("307335427331850242").send(`${error}`)
    }

  } else {
      if (message.guild.member(message.author).nickname == null) {
      const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
      } else {
        const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
      }
  }

} else {

if (order.includes("ccc")) {
  if (message.author.id == 307335427331850242) {
      const c = args.replace('ccc','')
      message.delete()
      const m = message.channel.send(c)
  } else {
    if (whitelist.includes(message.author.id)) {
      message.delete()
      if (message.guild.member(message.author).nickname == null) {
      const m = await message.channel.send(`${message.author.username} told me to say:\n"${c}"`)
      } else {
      const m = await message.channel.send(`${message.guild.member(message.author).nickname} told me to say:\n"${c}."`)
      }
    } else {
     if (message.guild.member(message.author).nickname == null) {
     const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
     } else {
     const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
    }
    }
  }
} else {

 if (order.includes("%%") && order.includes("/")) {
     let hexcol
     let c
     if (message.author.id == 307335427331850242) {
       if (order.includes("%%%")) {
         hexcol = order.substring(order.indexOf("%%%"), order.indexOf("%%%") + 9)
         const d = args.substring(args.indexOf("%%%"), args.indexOf("%%%") + 9)
         c = args.replace(d, '')
         hexcol = hexcol.substring(3)
       } else {
         c = args.replace("%%", '')
         hexcol = "00aaff"
       }
       msg1 = c.substring(0, c.indexOf("/"))
       msg2 = c.replace(msg1, '')
       msg2 = msg2.substring(1)
       const emb = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: "\u200b", value: msg2, inline: true},
       )
       const emb1 = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: msg1, value: "\u200b", inline: true},
       )
       const emb2 = new Discord.MessageEmbed()
       .setColor(hexcol)
       .addFields(
       { name: msg1, value: msg2, inline: true},
       )
       if (message.channel.type === "dm") return
       message.delete()
       if (msg1.substring(1) == "!" || msg1.substring(1, 2) == "!" || msg1 == "!") {
         const m = message.channel.send(emb)
       } else {
         if (msg2.substring(1) == "!" || msg2 == "!") {
            const m = message.channel.send(emb1)
         } else {
            const m = message.channel.send(emb2)
         }
       }
   } else {
     if (message.guild.member(message.author).nickname == null) {
     const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
     } else {
       const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
     }
   }


 } else {

   if (order.includes("--bye")) {
     if (message.member.hasPermission("BAN_MEMBERS")) {
     message.delete()
     let reasonExists
     let reason
     if (order.includes("/")) {
       reasonExists = true
       reason = args.substring(order.indexOf("/") + 1)
     } else {
       reasonExists = false
     }
     let a = args.substring(order.indexOf("--bye") + 5)
      if (reasonExists) {
       a = a.replace(reason, "")
       a = a.replace("/", "")
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
     if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`You're not allowed to ask me for that, ${message.author.username}.`)
    } else {
            const m = await message.channel.send(`You're not allowed to ask me for that, ${message.guild.member(message.author).nickname}.`)
    }
  }

}
}
}
}

if (order.includes("bot!")) {

  if (order.includes("play")) {
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
      if (!pmusic.includes(message.guild.id)) splay = true; else splay = false
      if (splay) {
      pmusic.push(message.guild.id)
      pmusic2.push(message.guild.id)
      await stream.pipe(god.createWriteStream(`temp/${temp}`)).on("close", async function() {
      if (showsongs.includes(message.guild.id)) message.channel.send(`Now playing "${firstsong}"...`)
      cserver.dispatcher = con.play(god.createReadStream(`temp/${temp}`))
      cserver.queue.shift()
      cserver.dispatcher.on("finish", function(){
        pmusic = pmusic.filter(sameserver)
        pmusic2 = pmusic2.filter(sameserver)
        if(cserver.queue[0]){
          play(con, mes)
        } else {
          message.channel.send(`No songs left to play, now disconecting...`)
          con.disconnect()
        }
      })
      })
      } else {
        if (showsongs.includes(message.guild.id)) {
          if (message.author.id == 307335427331850242) {
            message.channel.send(`Master, "${lastsong}" was added to the queue.`)
          } else {
            if (message.guild.member(message.author).nickname == null) {
            const m = await message.channel.send(`${message.author.username}, "${lastsong}" was added to the queue.`)
            } else {
              const m = await message.channel.send(`${message.guild.member(message.author).nickname}, "${lastsong}" was added to the queue.`)
            }
          }
        }
      }
    }
    let search = link
    link = link.replace(/ /g, "")
    checkvalid = ytdl.validateURL(link);
      if (!message.member.voice.channel) {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, enter a voice channel first.`)
        } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`${message.author.username}, enter a voice channel first.`)
          } else {
            const m = await message.channel.send(`${message.guild.member(message.author).nickname}, enter a voice channel first.`)
          }
        }
      } else {
        if(!queueservers[message.guild.id]) {
          queueservers[message.guild.id] = {
          queue: []
          }
        }
        if (!order.includes("--hide")) showsongs.push(message.guild.id)
        cserver = queueservers[message.guild.id]
        if (checkvalid) {
         cserver.queue.push(link)
        } else {
         if (search.substring(0, 1) == " ") search = search.substring(1)
         let options = {
         limit: 1,
         }
         const l = await ytsr(search, options)
         let searchlink = Object.values(Object.values(l)[1][0])[3]
         let checkvalid2 = ytdl.validateURL(searchlink);
         if (checkvalid2) {
           cserver.queue.push(searchlink)
         } else {
           if (message.author.id == 307335427331850242) {
             message.channel.send(`Master, something went wrong.`)
           } else {
             if (message.guild.member(message.author).nickname == null) {
             const m = await message.channel.send(`${message.author.username}, something went wrong.`)
             } else {
               const m = await message.channel.send(`${message.guild.member(message.author).nickname}, `)
             }
           }
         }
        }
        if (!message.member.voice.connection) {
          message.member.voice.channel.join().then(function(connection){
          play(connection, message)
          })
        }
      }


  } else {

  if (order.includes("queue")) {

    if (!pmusic2.includes(message.guild.id)) {
    if (message.author.id == 307335427331850242) {
      message.channel.send(`Master, I'm not playing any songs in this server.`)
    } else {
      if (message.guild.member(message.author).nickname == null) {
      const m = await message.channel.send(`${message.author.username}, I'm not playing any songs in this server.`)
      } else {
        const m = await message.channel.send(`${message.guild.member(message.author).nickname}, I'm not playing any songs in this server.`)
      }
    }
    } else {
    let cserver = queueservers[message.guild.id]
    let queuenames = []
    for (let x = 0; x < cserver.queue.length; x++) {
      let info = await ytdl.getInfo(cserver.queue[x])
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
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`These are the next songs in the list, ${message.author.username}\n`)
        message.channel.send(list)
        } else {
          const m = await message.channel.send(`These are the next songs in the list, ${message.guild.member(message.author).nickname}`)
          message.channel.send(list)
        }
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
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`These are the next songs in the list, ${message.author.username}\n`)
        message.channel.send(list)
        } else {
          const m = await message.channel.send(`These are the next songs in the list, ${message.guild.member(message.author).nickname}`)
          message.channel.send(list)
        }
      }
    }
    }

  } else {

  if (order.includes("skip")) {

    let notplaying
    if (pmusic.includes(message.guild.id)) notplaying = false; else notplaying = true;
    if (notplaying) {
      if (message.author.id == 307335427331850242) {
        message.channel.send(`Master, I'm not playing any songs in this server.`)
      } else {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`${message.author.username}, I'm not playing any songs in this server.`)
        } else {
          const m = await message.channel.send(`${message.guild.member(message.author).nickname}, I'm not playing any songs in this server.`)
        }
      }
    } else {
      if (message.member.voice.channel) {
      let cserver = queueservers[message.guild.id]
      pmusic = pmusic.filter(sameserver)
        if (cserver.dispatcher) {
        cserver.dispatcher.end()
        }
      } else {
      if (message.author.id == 307335427331850242) {
        message.channel.send(`Master, enter a voice channel first.`)
      } else {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`${message.author.username}, enter a voice channel first.`)
        } else {
          const m = await message.channel.send(`${message.guild.member(message.author).nickname}, enter a voice channel first.`)
        }
      }
      }
    }

  } else {

    if (order.includes("stop")) {

    if (pmusic.includes(message.guild.id)) {
      if (message.member.voice.channel) {
      message.channel.send(`Erasing the queue for this server...`)
      let cserver = queueservers[message.guild.id]
      for (let x = cserver.queue.length; x >= 0; x--) {
        cserver.queue.shift()
        cserver.dispatcher.end()
      }
      pmusic2 = pmusic2.filter(sameserver)
      showsongs = showsongs.filter(sameserver)
      pmusic = pmusic.filter(sameserver)
      } else {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, enter a voice channel first.`)
        } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`${message.author.username}, enter a voice channel first.`)
          } else {
            const m = await message.channel.send(`${message.guild.member(message.author).nickname}, enter a voice channel first.`)
          }
        }
      }
    } else {
        if (message.author.id == 307335427331850242) {
          message.channel.send(`Master, I'm not playing any songs in this server.`)
        } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`${message.author.username}, I'm not playing any songs in this server.`)
          } else {
            const m = await message.channel.send(`${message.guild.member(message.author).nickname}, I'm not playing any songs in this server.`)
          }
        }
    }



  } else {

  if (order.includes("intro")) {
    if (message.author.id == 307335427331850242 || whitelist.includes(message.author.id)) {
      let hexcol
      let c
        if (order.includes("%%%")) {
          hexcol = order.substring(order.indexOf("%%%"), order.indexOf("%%%") + 9)
          hexcol = hexcol.substring(3)
        } else {
          hexcol = "00ffff"
        }
        const emb = new Discord.MessageEmbed().setTitle(`Hi, I'm ${message.guild.member("307335427331850242").nickname}'s Bot.`)
        .setColor(hexcol)
        .addFields(
        { name: `I'm a bot my master, ${message.guild.member("307335427331850242").nickname}, is developing to entertain themselves and learn to code.`, value: "I am glad to help my master and their friends. \n||I don't like helping strangers, though.||", inline: true},
        )
        message.delete()
        const m = message.channel.send(emb)
        } else {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
        } else {
        const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
        }
     }

  } else {

  if (order.includes("change status to ")) {

    if (message.author.id == 307335427331850242) {
      const sub1 = args.substring(order.indexOf("change status to") + 17)
      if (sub1.toLowerCase().includes("listening to")) {
         manualStatus = true
         const sub2 = sub1.replace('listening to','')
         client.user.setActivity(sub2, { type: 'LISTENING'});
         if (message.guild.member(message.author).nickname == null) {
           const m = await message.channel.send(`I am now listening to ${sub2}, master ${message.author.username}!`)
         } else {
           const m = await message.channel.send(`I am now listening to ${sub2}, master ${message.guild.member("307335427331850242").nickname}!`)
         }
      } else {
        if (sub1.toLowerCase().includes("watching")) {
          manualStatus = true
          const sub2 = sub1.replace('watching','')
          client.user.setActivity(sub2, { type: 'WATCHING'});
          if (message.guild.member(message.author).nickname == null) {
            const m = await message.channel.send(`I am now watching ${sub2}, master ${message.author.username}!`)
          } else {
            const m = await message.channel.send(`I am now watching ${sub2}, master ${message.guild.member("307335427331850242").nickname}!`)
          }
        } else {
           if (sub1.toLowerCase().includes("automatic")) {
             manualStatus = false
             if (statusBot) {
                client.user.setActivity("Meleeeee!");
             } else {
                client.user.setActivity("DELTARUNE chap. 2");
             }
             if (message.guild.member(message.author).nickname == null) {
               const m = await message.channel.send(`My status will now automatically change every 20 minutes, master ${message.author.username}!`)
             } else {
               const m = await message.channel.send(`My status will now automatically change every 20 minutes, master ${message.guild.member("307335427331850242").nickname}!`)
             }
           } else {
             manualStatus = true
             client.user.setActivity(sub1);
             if (message.guild.member(message.author).nickname == null) {
               const m = await message.channel.send(`I am now playing ${sub1}, master ${message.author.username}!`)
             } else {
               const m = await message.channel.send(`I am now playing ${sub1}, master ${message.guild.member("307335427331850242").nickname}!`)
             }
           }
        }
      }
    } else {
      if (message.guild.member(message.author).nickname == null) {
      const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
      } else {
        const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
      }
    }

  } else {

    if (order.includes("time")) {
     if (message.author.id == 307335427331850242) {
      checktime()
      if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`Master ${message.author.id}, it's now ${currentTime} for me.`)
      } else {
        const m = await message.channel.send(`Master ${message.guild.member("307335427331850242").nickname}, it's now ${currentTime} for me.`)
      }
     } else {
       if (whitelist.includes(message.author.id)) {
         checktime()
         const m = await message.channel.send(`${message.guild.member(message.author).nickname}, it's now ${currentTime} for me.`)
       } else {
         if (message.guild.member(message.author).nickname == null) {
         const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
         } else {
           const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
         }
       }
     }

  } else {

    if (order.includes("alarm")) {
      if (message.author.id == 307335427331850242) {
       if (order.includes("erase") || order.includes("delete")) {
         if (alarm) {
         alarm = false
         message.channel.send("I erased the previously set alarm, master.")
         } else {
          message.channel.send("There is no predefined alarm, master")
         }
       } else {
        if (alarm) {
          const m = await message.channel.send(`An alarm is already set, master.`)
        } else {
         if (order.includes("/hour/")) {
           thour = parseInt(order.substring(order.indexOf("/hour/") + 6, order.indexOf("/hour/") + 8), 10)
           while (thour > 23) {
             thour -= 24
           }
           if (order.includes("/message/")) {
             timeOutMessage = order.substring(order.indexOf("/message/") + 9)
           } else {
             if (special == undefined) {
             timeOutMessage = "Alarm"
             } else {
             timeOutMessage = special
             }
           }
           if (order.includes("/minute/")) {
             tmin = parseInt(order.substring(order.indexOf("/minute/") + 8, order.indexOf("/minute/") + 10), 10)
             while (tmin > 59) {
               tmin -= 60
             }
           } else {
             tmin = 0
           }
           if (order.includes("/year/")) {
             tyear = parseInt(order.substring(order.indexOf("/year/") + 6, order.indexOf("/year/") + 8), 10)
             if (tyear < ana) tyear = ana
           } else {
             tyear = ana
           }
           if (order.includes("/month/")) {
             tmonth = parseInt(order.substring(order.indexOf("/month/") + 7, order.indexOf("/month/") + 9), 10)
             while (tmonth > 12) {
               tmonth -= 12
             }
             if (tyear == ana && tmonth < v24) tmonth = v24
           } else {
             tmonth = v24
           }
           if (order.includes("/date/")) {
             tdate = parseInt(order.substring(order.indexOf("/date/") + 6, order.indexOf("/date/") + 8), 10)
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
                      }
                   }
               }
             }
           }
           amessage = message.channel
           console.log(amessage)
           alarm = true
           if (tmin < 10) {
             if (order.includes("--dm")) {
                message.guild.member("307335427331850242").send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage}; master.`)
              } else {
             const m = await message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:0${tmin}, in the channel ${amessage}; master.`)
             }
           } else {
             if (order.includes("--dm")) {
                message.guild.member("307335427331850242").send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage}; master.`)
              } else {
             const m = await message.channel.send(`I will say "${timeOutMessage}" at ${tmonth}/${tdate}/${tyear}, ${thour}:${tmin}, in the channel ${amessage}; master.`)
             }
           }
         } else {
            const m = await message.channel.send(`You didn't tell me the time when i should say the alarm, master.`)
         }
       }
     }
     } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
          } else {
            const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
          }
     }

  } else {

    if (order.includes("laugh")) {
     if (message.author.id == 307335427331850242) {
       if (message.guild.member(message.author).nickname == null) {
       const m = await message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, master ${message.author.username}.`)
       } else {
         const m = await message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, master ${message.guild.member(message.author).nickname}.`)
       }
     } else {
       if (whitelist.includes(message.author.id)) {
         if (message.guild.member(message.author).nickname == null) {
         const m = await message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, ${message.author.username}.`)
         } else {
           const m = await message.channel.send(`Ha\nHa\nHa\n\nI'm laughing so much, ${message.guild.member(message.author).nickname}.`)
         }
       } else {
         if (message.guild.member(message.author).nickname == null) {
         const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
         } else {
           const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
         }
       }
     }

  } else {

  if (order.includes("revive") && order.includes("server")) {
    if (message.author.id == 307335427331850242) {
      if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`Of course, master ${message.author.username}! \nIt's time to talk, people!`)
      } else {
        const m = await message.channel.send(`Of course, master ${message.guild.member("307335427331850242").nickname}! \nIt's time to talk, people!`)
      }
    } else {
      if (message.guild.member(message.author).nickname == null) {
      const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
      } else {
        const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
      }
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
        if (message.guild.member("307335427331850242").nickname == null) {
        const m = await message.channel.send(`I already trust you, master ${message.author.username}`)
        } else {
          const m = await message.channel.send(`I already trust you, master ${message.guild.member("307335427331850242").nickname}.`)
        }
      } else {
        if (nouser) {
          const m = await message.channel.send(`I don't recognize that user, master!`)
        } else {
        let remove
        if (blacklist.includes(trust)) {
          remove = true
        }
        if (remove) {
          function data(id) {
            if (id != trust) return id
          }
          blacklist = blacklist.filter(data)
          let data0 = blacklist.join("\n")
          let rewrite = await god.promises.writeFile('data/blacklist', data0, 'utf8', {'flags': 'r+'});
        }

        if (whitelist.includes(trust)) {
          const m = message.channel.send(`Master, I already trust ${trustable}.`)
          } else {
          let add = await god.promises.appendFile('data/whitelist', `${trust}\n`, 'utf8', {'flags': 'a+'});
          whitelist.push(trust)
          const m = await message.channel.send(`I now trust ${trustable}, master!`)
          }
        }

      }

    } else {
         if (message.guild.member(message.author).nickname == null) {
         const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
         } else {
           const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
         }
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
         if (message.guild.member("307335427331850242").nickname == null) {
         const m = await message.channel.send(`I can't block you, master ${message.author.username}!`)
         } else {
           const m = await message.channel.send(`I can't block you, master ${message.guild.member("307335427331850242").nickname}!`)
         }
     } else {
       if (nouser) {
         const m = await message.channel.send(`I don't recognize that user, master!`)
       } else {
       let remove
       if (whitelist.includes(block)) {
         remove = true
       }
       if (remove) {
         function data(id) {
           if (id != block) return id
         }
         whitelist = whitelist.filter(data)
         let data0 = whitelist.join("\n")
         let rewrite = await god.promises.writeFile('data/whitelist', data0, 'utf8', {'flags': 'r+'});
       }
         if (blacklist.includes(block)) {
           const m = message.channel.send(`Master, I already blocked ${blockable}.`)
         } else {
           let add = await god.promises.appendFile('data/blacklist', `${block}\n`, 'utf8', {'flags': 'a+'});
           blacklist.push(block)
           const m = await message.channel.send(`I blocked ${blockable}, master.`)

         }
         }

      }

     } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
          } else {
            const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
          }
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
         if (message.guild.member("307335427331850242").nickname == null) {
         const m = await message.channel.send(`I can't stop trusting you, master ${message.author.username}!`)
         } else {
           const m = await message.channel.send(`I can't stop trusting you, master ${message.guild.member("307335427331850242").nickname}!`)
         }
       } else {
         if (nouser) {
           const m = await message.channel.send(`I don't recognize that user, master!`)
         } else {
         if (whitelist.includes(rest)) {

         function data(id) {
           if (id != rest) return id
         }
         whitelist = whitelist.filter(data)
         let data0 = whitelist.join("\n")
         let rewrite = await god.promises.writeFile('data/whitelist', data0, 'utf8', {'flags': 'r+'});
         const m = await message.channel.send(`I stopped trusting ${restable}, master.`)
         } else {
           if (blacklist.includes(rest)) {

           function data(id) {
             if (id != rest) return id
           }
           blacklist = blacklist.filter(data)
           let data0 = blacklist.join("\n")
           let rewrite = await god.promises.writeFile('data/blacklist', data0, 'utf8', {'flags': 'r+'});
           const m = await message.channel.send(`I unblocked ${restable}, master.`)
         } else {
           const m = await message.channel.send(`There's nothing to reset about ${restable}, master.`)
         }
         }
       }
       }

     } else {
          if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
          } else {
            const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
          }
     }

 } else {

   if (order.includes("hi")) {
    if (message.author.id == 307335427331850242) {
      if (message.guild.member("307335427331850242").nickname == null) {
        const m = await message.channel.send(`Hi, master ${message.author.username}. \nAs you are Master's friend, you're welcome. \nHow can I serve you?`)
      } else {
        const m = await message.channel.send(`Hi, master ${message.guild.member("307335427331850242").nickname}. How can I serve you?`)
      }
    } else {
      if (whitelist.includes(message.author.id)) {
        if (message.guild.member(message.author).nickname == null) {
          const m = await message.channel.send(`Hi, ${message.author.username}. \nAs you are Master's friend, you're welcome. \nHow can I serve you?`)
        } else {
          const m = await message.channel.send(`Hi, ${message.guild.member(message.author).nickname}. \nAs you are Master's friend, you're welcome. \nHow can I serve you?`)
        }
      } else {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
        } else {
          const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
        }
      }
    }

  } else {

  if (order.includes("thanks") || order.includes("thank you")) {
   if (message.author.id == 307335427331850242) {
     if (message.guild.member("307335427331850242").nickname == null) {
       const m = await message.channel.send(`You're welcome, master ${message.author.username}!`)
     } else {
       const m = await message.channel.send(`You're welcome, master ${message.guild.member("307335427331850242").nickname}!`)
     }
   } else {
     if (whitelist.includes(message.author.id)) {
       const m = await message.channel.send(`You're welcome, <@${message.author.id}>.`)
     } else {
       if (message.guild.member(message.author).nickname == null) {
       const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
       } else {
         const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
       }
     }
   }

  } else {

    if (message.author.id == 307335427331850242) {
      if (message.guild.member("307335427331850242").nickname == null) {
        const m = await message.channel.send(`I didn't quite understand your order, master ${message.author.username}.`)
      } else {
        const m = await message.channel.send(`I didn't quite understand your order, master ${message.guild.member("307335427331850242").nickname}.`)
      }
    } else {
      if (whitelist.includes(message.author.id)) {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`I didn't quite understand your order, ${message.author.username}.`)
        } else {
          const m = await message.channel.send(`I didn't quite understand your order, ${message.guild.member(message.author).nickname}.`)
        }
      } else {
        if (message.guild.member(message.author).nickname == null) {
        const m = await message.channel.send(`You're not my master, ${message.author.username}.`)
        } else {
          const m = await message.channel.send(`You're not my master, ${message.guild.member(message.author).nickname}.`)
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
});

//This sets the bot online.
client.login(token);
