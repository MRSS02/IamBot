module.exports = function(client, message, author, args, order, globals) {

    if (message.author.id == 307335427331850242) {
      const sub1 = args.substring(order.indexOf("status") + 6)
      if (sub1.toLowerCase().includes("--l")) {
         globals.manualStatus = true
         const sub2 = sub1.replace('--l','')
         client.user.setActivity(sub2, { type: 'LISTENING'});
         message.channel.send(`I am now listening to ${sub2}, master ${author}!`)
      } else {
        if (sub1.toLowerCase().includes("--w")) {
          globals.manualStatus = true
          const sub2 = sub1.replace('--w','')
          client.user.setActivity(sub2, { type: 'WATCHING'});
          message.channel.send(`I am now watching ${sub2}, master ${author}!`)
        } else {
           if (sub1.toLowerCase().includes("--a")) {
             globals.manualStatus = false
             if (globals.statusBot) {
                client.user.setActivity("Meleeeee!");
             } else {
                client.user.setActivity("DELTARUNE chap. 2");
             }
             message.channel.send(`My status will now automatically change every 20 minutes, master ${author}!`)
           } else {
             globals.manualStatus = true
             client.user.setActivity(sub1);
               message.channel.send(`I am now playing ${sub1}, master ${author}!`)
           }
        }
      }
    } else {
      message.channel.send(`You're not my master, ${author}.`)
    }

  return globals.manualStatus
}
