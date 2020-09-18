const botprefix = {
  help: require("./botprefix/help.js"),
  music: require("./botprefix/music.js"),
  intro: require("./botprefix/intro.js"),
  status: require("./botprefix/status.js"),
  be: require("./botprefix/be.js")
}

module.exports = function(play, link, order, args, author, owner,
fchar, message, client, Discord, globals, checktime, god, ytdl, ytsr, sameserver) {

//async function where the commands are interpreted
async function wait() {
if (order.includes("help")) botprefix.help(order, args,
author, owner, message, Discord, globals); else {


if (order.includes("play") || order.includes("queue") ||
order.includes("skip") || order.includes("stop")) {

let musicreturned = await botprefix.music(play, link,
order, args, author, owner, fchar, message, client, globals,
god, ytdl, ytsr, sameserver, Discord)
for (var item in musicreturned.globals) {
  globals[item] = evalreturned.globals[item]
}


} else {

if (order.includes("intro")) botprefix.intro(Discord, args, message); else {

if (order.includes("status")) {
   let statusreturned = botprefix.status(client, message, author, args, order, globals)
   globals.manualStatus = statusreturned
} else {

if (order.includes("be")) botprefix.be(client, message, author, order); else {

  if (order.includes("time")) {
   if (message.author.id == 307335427331850242) {
    checktime()
      message.channel.send(`Master ${author}, it's now ${globals.currentTime} for me.`)
   } else {
       checktime()
       message.channel.send(`${author}, it's now ${globals.currentTime} for me.`)
   }

} else {

  if (order.includes("alarm")) {
    if (order.includes("--g")) {
      if (message.author.id == 307335427331850242) {
        message.channel.send("oi eu tô aqui zorra")
       globals.special = args.substring(args.indexOf("--g") + 3)
       if (globals.special.substring(0, 1) == " ") globals.special = globals.special.substring(1)
       god.writeFile("data/special", globals.special, function (error) {})
       message.channel.send(`I've set the default alarm message to "${globals.special}", master.`)
      } else {
        if (globals.trustlist[message.guild.id].includes(message.author.id)) {
          message.channel.send(`Only my master has permission to use this flag, ${author}.`)
        } else {
          message.channel.send(`You're not my master, ${author}.`)
        }
      }
    } else {

    if (message.author.id == 307335427331850242 || globals.trustlist[message.guild.id].includes(message.author.id)) {
     if (order.includes("--del")) {
       if (globals.alarm) {
       globals.alarm = false
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
      if (globals.alarm) {
        message.channel.send(`An alarm is already set, master.`)
      } else {
       if (order.includes("--h")) {
         if (order.substring(order.indexOf("--h") + 3, order.substring(order.indexOf("--h") + 4) == " ")) {
           globals.thour = parseInt(order.substring(order.indexOf("--h") + 4, order.indexOf("--h") + 6), 10)
         } else {
           globals.thour = parseInt(order.substring(order.indexOf("--h") + 3, order.indexOf("--h") + 5), 10)
         }
         if (isNaN(globals.thour)) {
           if (message.author.id == 307335427331850242) {
               message.channel.send(`The hour you told me to say the alarm is invalid, master.`)
           } else {
               message.channel.send(`The hour you told me to say the alarm is invalid, ${author}.`)
           }
           return
         }
         while (globals.thour > 23) {
           globals.thour -= 24
         }
         if (order.includes("--msg")) {
           globals.timeOutMessage = args.substring(order.indexOf("--msg") + 5)
         } else {
            if (!globals.special) {
             globals.timeOutMessage = "Alarm"
            } else {
             globals.timeOutMessage = globals.special
            }
         }
         if (order.includes("--min")) {
           if (order.substring(order.indexOf("--min") + 5, order.substring(order.indexOf("--min") + 6) == " ")) {
             globals.tmin = parseInt(order.substring(order.indexOf("--min") + 6, order.indexOf("--min") + 8), 10)
           } else {
             globals.tmin = parseInt(order.substring(order.indexOf("--min") + 5, order.indexOf("--min") + 7), 10)
           }
           if (isNaN(globals.tmin)) globals.tmin = 0
           while (globals.tmin > 59) {
             globals.tmin -= 60
           }
         } else {
           globals.tmin = 0
         }
         if (order.includes("--y")) {
           if (order.substring(order.indexOf("--y") + 3, order.substring(order.indexOf("--y") + 4) == " ")) {
             tyear = parseInt(order.substring(order.indexOf("--y") + 4, order.indexOf("--y") + 8), 10)
           } else {
             year = parseInt(order.substring(order.indexOf("--y") + 3, order.indexOf("--y") + 7), 10)
           }
           if (isNaN(tyear)) globals.tyear = globals.ana
           if (globals.tyear < globals.ana) globals.tyear = globals.ana; else globals.tyear = globals.ana
         } else {
           if (globals.tyear < globals.ana) globals.tyear = globals.ana; else globals.tyear = globals.ana
         }
         if (order.includes("--mon")) {
           if (order.substring(order.indexOf("--mon") + 5, order.substring(order.indexOf("--mon") + 6) == " ")) {
           tmonth = parseInt(order.substring(order.indexOf("--mon") + 6, order.indexOf("--mon") + 8), 10)
           } else {
           tmonth = parseInt(order.substring(order.indexOf("--mon") + 5, order.indexOf("--mon") + 7), 10)
           }
           if (isNaN(globals.tmonth)) globals.tmonth = globals.v24
           while (globals.tmonth > 12) {
             globals.tmonth -= 12
           }
           if (globals.tyear == globals.ana && globals.tmonth < globals.v24) globals.tmonth = globals.v24
         } else {
           globals.tmonth = globals.v24
         }
         if (order.includes("--dat")) {
           if (order.substring(order.indexOf("--dat") + 5, order.substring(order.indexOf("--dat") + 7) == " ")) {
             tdate = parseInt(order.substring(order.indexOf("--dat") + 6, order.indexOf("--dat") + 8), 10)
           } else {
            tdate = parseInt(order.substring(order.indexOf("--dat") + 5, order.indexOf("--dat") + 7), 10)
           }
           if (!isNaN(globals.tdate)) {
             if (globals.tmonth == 1 || globals.tmonth == 3 || globals.tmonth == 5 || globals.tmonth == 7 || globals.tmonth == 8 || globals.tmonth == 10 || globals.tmonth == 12) {
               while (globals.tdate > 31) {
                 globals.tdate -= 31
               }
             } else {
                if (globals.tmonth == 2 && globals.bi6to) {
                  while (globals.tdate > 29) {
                    globals.tdate -= 29
                  }
                } else {
                  if (globals.tmonth == 2) {
                    while (globals.tdate > 28) {
                      globals.tdate -= 28
                    }
                  } else {
                    while (globals.tdate > 30) {
                      globals.tdate -= 30
                    }
                  }
                }
             }
           } else {
             globals.tdate = globals.v23
             if (globals.thour < v17 || globals.thour == globals.v17 && globals.tmin <= globals.v18) {
               if (globals.tmonth == 1 || globals.tmonth == 3 || globals.tmonth == 5 || globals.tmonth == 7 || globals.tmonth == 8 || globals.tmonth == 10 || globals.tmonth == 12) {
                 if (globals.tdate == 31) {
                   if (globals.tmonth == 12) {
                     globals.tyear += 1
                     globals.tmonth = 1
                   } else {
                     globals.tmonth += 1
                   }
                   globals.tdate = 1
                  } else {
                    globals.tdate += 1
                  }
               } else {
                   if (globals.tmonth == 2) {
                     if (globals.bi6to && globals.tdate == 29 || !globals.bi6to && globals.tdate == 28) {
                       globals.tmonth += 1
                       globals.tdate = 1
                      }
                   } else {
                     if (globals.tdate == 30) {
                       globals.tmonth += 1
                       globals.tdate = 1
                      } else {
                        globals.tdate += 1
                      }
                   }
               }
             }
           }
         } else {
           globals.tdate = globals.v23
           if (globals.thour < globals.v17 || globals.thour == globals.v17 && globals.tmin <= globals.v18) {
             console.log("ok")
             if (globals.tmonth == 1 || globals.tmonth == 3 || globals.tmonth == 5 || globals.tmonth == 7 || globals.tmonth == 8 || globals.tmonth == 10 || globals.tmonth == 12) {
               if (globals.tdate == 31) {
                 if (globals.tmonth == 12) {
                   globals.tyear += 1
                   globals.tmonth = 1
                 } else {
                   globals.tmonth += 1
                 }
                 globals.tdate = 1
               } else {
                 globals.tdate += 1
               }
             } else {
                 if (globals.tmonth == 2) {
                   if (globals.bi6to && globals.tdate == 29 || !globals.bi6to && globals.tdate == 28) {
                     globals.tmonth += 1
                     globals.tdate = 1
                    } else {
                      globals.tdate += 1
                    }
                 } else {
                   if (globals.tdate == 30) {
                     globals.tmonth += 1
                     globals.tdate = 1
                    } else {
                      globals.tdate += 1
                    }
                 }
             }
           }
         }
         globals.amessage = message.channel
         globals.alarm = true
         if (globals.tmin < 10) {
           if (message.author.id == 307335427331850242) {
             if (order.includes("--dm")) {
                message.guild.member("307335427331850242").send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:0${globals.tmin}, in the channel ${globals.amessage} of the server "${message.guild}"; master.`)
              } else {
                message.channel.send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:0${globals.tmin}, in the channel ${globals.amessage} of the server "${message.guild}"; master.`)
             }
           } else {
             if (order.includes("--dm")) {
                message.guild.member(message.author.id).send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:0${globals.tmin}, in the channel ${globals.amessage} of the server "${message.guild}"; ${author}.`)
              } else {
                message.channel.send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:0${globals.tmin}, in the channel ${globals.amessage} of the server "${message.guild}""; ${author}.`)
             }
           }
         } else {
           if (message.author.id == 307335427331850242) {
             if (order.includes("--dm")) {
                message.guild.member("307335427331850242").send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:${globals.tmin}, in the channel ${globals.amessage} of the server ${message.guild}; master.`)
             } else {
                message.channel.send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:${globals.tmin}, in the channel ${globals.amessage} of the server ${message.guild}; master.`)
             }
           } else {
             if (order.includes("--dm")) {
                message.guild.member("307335427331850242").send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:${globals.tmin}, in the channel ${globals.amessage} of the server ${message.guild}; ${author}.`)
              } else {
                message.channel.send(`I will say "${globals.timeOutMessage}" at ${globals.tmonth}/${globals.tdate}/${globals.tyear}, ${globals.thour}:${globals.tmin}, in the channel ${globals.amessage} of the server ${message.guild}; ${author}.`)
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
     if (globals.trustlist[message.guild.id].includes(message.author.id)) {
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

 if (order.includes("hi")) {
  if (message.author.id == 307335427331850242) {
      message.channel.send(`Hi, master ${author}. How can I serve you?`)
  } else {
    if (globals.trustlist[message.guild.id].includes(message.author.id)) {
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
   if (globals.trustlist[message.guild.id].includes(message.author.id)) {
     message.channel.send(`You're welcome, <@${message.author.id}>.`)
   } else {
     message.channel.send(`You're not my master, ${author}.`)
   }
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
}
}
}
}

wait().then() //bloking the code on purpose cause I need it

return globals

}
