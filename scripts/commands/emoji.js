module.exports = function(args) {
  let emoji
  let animoji
  let emojiname
  if (args.includes("!a<") && args.includes(">!")) animoji = true;
  if (args.includes("!<") && args.includes(">!")) emoji = true
  while (animoji) {
    let emojiname = args.substring(args.indexOf("!a<") + 3, args.indexOf(">!"))
    args = args.replace("!a<", "<a:")
    switch (emojiname) {
      case "mario": args = args.replace(">!", ":747274856952758283>");
      break;
      case "spin": args = args.replace(">!", ":747294958125580340>");
      break;
      case "sonicwait": args = args.replace(">!", ":728778079115411507>");
      break;
      case "jevil": args = args.replace(">!", ":747514177631027250>");
      break;
      case "cannibal": args = args.replace(">!", ":747500593177690257>");
      break;
      case "mighty": args = args.replace(">!", ":747514718318755950>");
      break
      default:
      args = args.replace(">!", ":>");
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
      default:
       args = args.replace(">!", ":>");
       break;
    }
    if (!args.includes("!<") || !args.includes(">!")) emoji = false;
  }

  //returned data
  return args
}
