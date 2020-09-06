const Discord = require("discord.js");

module.exports = function(fchar, args, message, client) {

    console.log("rerfrtgfhjuyh")
    const id = args.substring(0, 18)
    const emb = new Discord.MessageEmbed()
    let dm = args.substring(18)
    if (dm.includes("%%")) {
       let hexcol
       let c
       if (message.author.id == 307335427331850242) {
         const emb = new Discord.MessageEmbed()
         c = dm.replace("%%", '')
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
