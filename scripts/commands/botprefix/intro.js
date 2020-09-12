module.exports = function(Discord, args, message){

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

}
