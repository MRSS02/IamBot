module.exports = function(play, link, order, args, author, owner, fchar, message, client, Discord, globals){

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
    let c;
    if (args.includes("CCC")) c = args.replace("CCC", ""); else c = args.replace("ccc", "");
    if (message.author.id == 307335427331850242) {
        message.delete()
        if (c.substring(0, 1) == "!") c = c.substring(1)
        message.channel.send(c)
    } else {
      if (globals.trustlist[message.guild.id].includes(message.author.id)) {
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
       if (message.author.id == 307335427331850242 || globals.trustlist[message.guild.id].includes(message.author.id)) {
         message.delete().catch()
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
       message.delete().catch()
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

  return globals

}
