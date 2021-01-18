module.exports = function(Discord, args, order, owner, message) {

     if (message.author.id == 307335427331850242 || globals.trustlist[message.guild.id].includes(message.author.id)) {
       let c = args
       let hexcol
       if (order.includes("bot! "))
       c = c.replace(args.substring(order.indexOf("bot!"), order.indexOf("bot!")+  4), "")
       else c = c.replace(args.substring(order.indexOf("bot!"), order.indexOf("bot!")+  3), "")
       c =  c.replace(args.substring(order.indexOf("poll"), order.indexOf("poll")+  4), "")
       if (order.includes("--c")) {
         let chkspace = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 4)
         if (chkspace == " ") {
           hexcol = c.substring(c.indexOf("--c") + 4, c.indexOf("--c") + 10)
           c = c.replace(c.substring(c.indexOf("--c"), c.indexOf("--c") + 10))
        } else {
          hexcol = c.substring(c.indexOf("--c") + 3, c.indexOf("--c") + 9)
          c = c.replace(c.substring(c.indexOf("--c"), c.indexOf("--c") + 9))
        }
       } else {
         hexcol = "0066ff"
       }
       if (order.includes("--t")) {
         message.delete().catch()
         let title
         if (order.includes("--d")) {
           title = c.substring(c.indexOf("--t"), c.indexOf("--d"))
           let description = c.replace(title, "")
           description = description.replace("--d", "")
           title = title.replace("--t", "")
           message.channel.send(description)
           const emb = new Discord.MessageEmbed().setTitle(title)
           .setColor(hexcol)
           .addFields(
           { name: "\u200b", value: description, inline: true},
           )
           const m = message.channel.send(emb).then(msg => {
             msg.react("800398703562195016")
             msg.react("800398680733122570")
             msg.react("800417506530557963")
           })
         } else {
           title = c.substring(c.indexOf("--t") + 3)
           const emb = new Discord.MessageEmbed().setTitle(title)
           .setColor(hexcol)
           const m = message.channel.send(emb).then(msg => {
             msg.react("800398703562195016")
             msg.react("800398680733122570")
             msg.react("800417506530557963")
           })
         }



       } else {
         if (message.author.id == 307335427331850242)
         message.channel.send("Creator, insert a title name for the poll!")
         else message.channel.send(`${author}, insert a title name for the poll!`)
       }
     } else {
        message.channel.send(`You're not allowed to ask me for that, ${author}.`)
     }

}
