module.exports = function(message, author, args, order, checktime, globals) {

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
 }
 }

  return globals
}
