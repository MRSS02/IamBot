module.exports = function(args, message, globals) {
  let emoji
  let animoji
  let emojiname
  if (args.includes("!a<") && args.includes(">!")) animoji = true;
  if (args.includes("!<") && args.includes(">!")) emoji = true
  if (message.channel.type === "dm") {
  while (animoji) {
    let emojiname = args.substring(args.indexOf("!a<") + 3, args.indexOf(">!"))
    args = args.replace("!a<", "<a:")

      switch (emojiname) {
       case "mario": args = args.replace(">!", ":747274856952758283>");
       break;
       case "sonicwait": args = args.replace(">!", ":728778079115411507>");
       break;
       case "jevil": args = args.replace(">!", ":747514177631027250>");
       break;
       case "avinpc": args = args.replace(">!", ":747500593177690257>");
       break;
       case "mighty": args = args.replace(">!", ":747514718318755950>");
       break;
       case "furret": args = args.replace(">!", ":752316343293837382>")
       break;
       case "rem": args = args.replace(">!", ":753450005079261304>")
       break;
       case "ram": args = args.replace(">!", ":753450076126576741>")
       break;
      }

    if (!args.includes("!a<") || !args.includes(">!")) animoji = false;
  }
  while (emoji) {
    let emojiname = args.substring(args.indexOf("!<") + 2, args.indexOf(">!"))
    args = args.replace("!<", "<:")
    switch (emojiname) {
      case "okay": args = args.replace(">!", ":736379500555796590>")
        break;
      case "marth": args = args.replace(">!", ":736577172277559317>")
        break;
      case "chara": args = args.replace(">!", ":735892270393589870>")
        break;
      case "shine": args = args.replace(">!", ":736390158236254219>")
      break
      case "squirtle": args = args.replace(">!", ":752314132820263015>")
      break;
    }
    if (!args.includes("!<") || !args.includes(">!")) emoji = false;
  }
  } else {
    while (animoji) {
      let emojiname = args.substring(args.indexOf("!a<") + 3, args.indexOf(">!"))
      args = args.replace("!a<", "<a:")

      switch (emojiname) {
       case "mario": if (globals.serveremojis[message.guild.id].includes("mario")) args = args.replace(">!", ":747274856952758283>");
       break;
       case "sonicwait": if (globals.serveremojis[message.guild.id].includes("sonicwait")) args = args.replace(">!", ":728778079115411507>");
       break;
       case "jevil": if (globals.serveremojis[message.guild.id].includes("jevil")) args = args.replace(">!", ":747514177631027250>");
       break;
       case "avinpc": if (globals.serveremojis[message.guild.id].includes("aninpc")) args = args.replace(">!", ":747500593177690257>");
       break;
       case "mighty": if (globals.serveremojis[message.guild.id].includes("mighty")) args = args.replace(">!", ":747514718318755950>");
       break;
       case "furret": if (globals.serveremojis[message.guild.id].includes("furret")) args = args.replace(">!", ":752316343293837382>")
       break;
       case "rem": if (globals.serveremojis[message.guild.id].includes("rem")) args = args.replace(">!", ":753450005079261304>")
       break;
       case "ram": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":753450076126576741>")
       break;
      }

      if (!args.includes("!a<") || !args.includes(">!")) animoji = false;
    }
    while (emoji) {
      let emojiname = args.substring(args.indexOf("!<") + 2, args.indexOf(">!"))
      args = args.replace("!<", "<:")
      switch (emojiname) {
        case "okay": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":736379500555796590>")
          break;
        case "marth": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":736577172277559317>")
          break;
        case "chara": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":735892270393589870>")
          break;
        case "shine": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":736390158236254219>")
        break
        case "squirtle": if (globals.serveremojis[message.guild.id].includes("ram")) args = args.replace(">!", ":752314132820263015>")
        break;
      }
      if (!args.includes("!<") || !args.includes(">!")) emoji = false;
    }

  }
  //returned data
  return args
}
