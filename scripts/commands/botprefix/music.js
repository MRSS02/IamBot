module.exports = function(play, link,
order, args, author, owner, fchar, message, client, globals,
god, ytdl, getInfo, sameserver, Discord) {

//async function where the commands are interpreted
async function wait() {

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
  let firstsong
  let lastsong
  async function play(con, mes) {
    let splay
    try {
     let a = await getInfo(cserver.queue[0]).then(info => {
     firstsong = info.items[0].title
     })
    } catch {
     firstsong = "Unknown songname"
    }
    try {
     let b = await getInfo(cserver.queue[cserver.queue.length - 1]).then(info => {
     lastsong = info.items[0].title
     })
    } catch {
     lastsong = "Unknown songname"
    }
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
  link =  link.replace(/ /g, "")
  let plink
  if (!order.includes("--h")) globals.showsongs.push(message.guild.id)
  if (order.includes("--p")) {
    plink = order.substring(order.indexOf("--p") + 3)
    if (message.author.id == 307335427331850242) {
    if (parseInt(plink.substring(0, 1), 10) < 5) {
    async function playp(con, mes) {
      let info = await ytdl.getInfo(globals.cserverp.queue[0])
      let firstsong = info.title
      stream = ytdl(globals.cserverp.queue[0], { quality:"highestaudio", filter: "audioonly"})
      globals.pmusic.push(message.guild.id)
      globals.pmusic2.push(message.guild.id)
      const musicplay = stream.pipe(god.createWriteStream(`temp/${temp}`)).on("close", async function() {
      if (globals.showsongs.includes(message.guild.id)) message.channel.send(`Now playing "${firstsong}"...`)
      globals.cserverp.dispatcher = con.play(god.createReadStream(`temp/${temp}`))
      globals.cserverp.queue.shift()
      globals.cserverp.dispatcher.on("finish", function(){
        globals.pmusic = globals.pmusic.filter(sameserver)
        globals.pmusic2 = globals.pmusic2.filter(sameserver)
        if(globals.cserverp.queue[0]){
          playp(con, mes)
        } else {
          globals.playingpriv = false
          globals.privqueue = 0
          message.channel.send(`No songs left to play, now disconecting...`)
          con.disconnect()
        }
      })
      })
    }
    if (!globals.playingpriv) {
      if (!message.member.voice.channel) return message.channel.send(`Master, enter a voice channel first.`);
      globals.privqueue = `queue${plink}`
      if (globals.plist[globals.privqueue].queue[0]) globals.cserverp = JSON.parse(JSON.stringify(globals.plist[globals.privqueue])); else return message.channel.send("Master, this playlist is empty.")
      globals.playingpriv = true
    } else {
      return message.channel.send(`Master, I'm already playing songs on this server...`)
    }
      message.member.voice.channel.join().then(function(connection){
      playp(connection, message).catch( error => {
        console.log(error)
        client.users.cache.get("307335427331850242").send(`${error}`)
      })
      }).catch( error => {
        console.log(error)
        client.users.cache.get("307335427331850242").send(`${error}`)
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
       let searchlink
       let a = await getInfo(link).then(info => {
       searchlink = info.items[0].webpage_url
       console.log(searchlink)
       })
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
        play(connection, message).catch( error => {
          console.log(error)
          client.users.cache.get("307335427331850242").send(`${error}`)
        })
        }).catch( error => {
          console.log(error)
          client.users.cache.get("307335427331850242").send(`${error}`)
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
        let cserver = globals.cserverp
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
          let namrsong
          try {
          let a = await getInfo(cserver.queue[x]).then(info => {
           namesong = info.items[0].title
          })
          } catch {
           namesong = "Unknown songname"
          }
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
         cserver = globals.cserverp
       } else {
         cserver = globals.queueservers[message.guild.id]
       }
       console.log(globals.pmusic)
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
           cserver = globals.cserverp
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



   }
 }
 }
 }

}

wait().then() //bloking the code on purpose cause I need it

return globals;

}
