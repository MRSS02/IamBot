module.exports = function (order, args,
author, owner, message, Discord, globals) {

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
    let foundcmd = globals.helpcommands.user.filter(findcmd)
    if (!foundcmd[0]) foundcmd = globals.helpcommands.user.filter(findcmd); else foundcmd = foundcmd.concat(globals.helpcommands.user.filter(findcmd))
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
    for (let x = 0; x < globals.helpcommands.dev.length; x++) {
      let addlist = `${globals.helpcommands.dev[x].prefix}\n`
      if (!order.includes("--p")) addlist += `${globals.helpcommands.dev[x].description}\n\n`; else addlist += `\n`
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
  for (let x = 0; x < globals.helpcommands.user.length; x++) {
    let addlist = `${globals.helpcommands.user[x].prefix}\n`
    if (!order.includes("--p")) addlist += `${globals.helpcommands.user[x].description}\n\n`; else addlist += `\n`
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


}
