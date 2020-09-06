module.exports = function(order, args, ytdl, god, message) {
    if (order.substring(order.indexOf("!%d") - 1, order.indexOf("!%d")) != "\\") {
    let stream
    async function download(file, filename) {
      message.channel.send("Downloading...")
      let extension
      if (order.includes("--haudio")) {
        stream = ytdl(file, { quality: "highestaudio", filter: "audioonly"})
        extension = ".mp3"
      } else {
        if (order.includes("--audio")) {
          stream = ytdl(file, { filter: "audioonly"})
          extension = ".mp3"
        } else {
          if (order.includes("--hvideo")) {
            stream = ytdl(file, { quality: "highestvideo"})
            extension = ".mp4"
          } else {
            stream = ytdl(file)
            extension = ".mp4"
          }
        }
      }
      god.access(`downloads/${filename}${extension}`, god.constants.R_OK, async (error) => {
      if (error) {
      await stream.pipe(god.createWriteStream(`downloads/${filename}${extension}`)).on("close", function() {
        message.channel.send("File downloaded.")
      })
      } else {
        message.channel.send(`A file named "${filename}${extension}" already exists, master.`)
      }
      })
    }
    if (order.includes("::")) {
    let link = args.substring(order.indexOf("!%d") + 3, order.indexOf("::"))
    let filename = args.substring(order.indexOf("::") + 2)
    link = link.replace(/ /g, "")
    checkvalid = ytdl.validateURL(link);
     if (checkvalid) {
       download(link, filename)
     } else {
      message.channel.send(`Master, "${link}" is not a valid youtube video link.`)
     }
    } else {
     message.channel.send(`Master, tell me the name of the output file.`)
   }
  }

}
