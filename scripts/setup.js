const god = require('fs')
const readline = require('readline');

exports.startup = function () {

let token
let dir0 = "./downloads";
if (!god.existsSync(dir0)){
    god.mkdirSync(dir0);
}
let dir1 = "./temp";
if (!god.existsSync(dir1)){
    god.mkdirSync(dir1);
}
let dir2 = "./data";
if (!god.existsSync(dir2)){
    god.mkdirSync(dir2);
}
function getToken() {
  let tokenpath = "./data/token"
  try {
    if (god.existsSync(tokenpath)) token = god.readFileSync('./data/token', 'utf8').toString(); else token = process.env.TOKEN
  }
  catch (error) {
    console.log(error)
  }
};
getToken()

return token
}

exports.setDB = function() {
  let dblogin
  let path = "./data/dblogin"
  if (god.existsSync(path)) dblogin = god.readFileSync('./data/dblogin', 'utf8').toString(); else dblogin = process.env.DBLOGIN
  return dblogin
}

exports.trustlist = function() {
  let dir3 = "./data/trustlist"
  let trustlist = {}
  if (!god.existsSync(dir3)){
      god.mkdirSync(dir3);
  } else {
    god.readdir(dir3, function(error, files) {
      if (error) {
        console.log(error)
        return;
      }
      files.forEach(function(filename) {
        trustlist[filename] = []
        readline.createInterface({
            input: god.createReadStream(`${dir3}/${filename}`),
            terminal: false
        }).on('line', function(line) {
           trustlist[filename].push(line)
        });
      })
    })
  }
  return trustlist
}

exports.blocklist = function() {
  let dir3 = "./data/blocklist"
  let blocklist = {}
  if (!god.existsSync(dir3)){
      god.mkdirSync(dir3);
  } else {
    god.readdir(dir3, function(error, files) {
      if (error) {
        console.log(error)
        return;
      }
      files.forEach(function(filename) {
        blocklist[filename] = []
        readline.createInterface({
            input: god.createReadStream(`${dir3}/${filename}`),
            terminal: false
        }).on('line', function(line) {
           blocklist[filename].push(line)
        });
      })
    })
  }
  return blocklist
}

exports.special = function() {
  let special
  if (!god.existsSync("./data/special")){
    god.closeSync(god.openSync("./data/special", 'w'));
  } else {
    special = god.readFileSync("./data/special", 'utf8')
  }
  return special
}

exports.playlistmake = function() {

  let plist = {
    "queue0": { queue: [] },
    "queue1": { queue: [] },
    "queue2": { queue: [] },
    "queue3": { queue: [] },
    "queue4": { queue: [] },
  }
  if (!god.existsSync("./data/plist0")){
    god.closeSync(god.openSync("./data/plist0", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/plist0"),
        terminal: false
    }).on('line', function(line) {
       plist.queue0.queue.push(line)
    });
  }
  if (!god.existsSync("./data/plist1")){
    god.closeSync(god.openSync("./data/plist1", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/plist1"),
        terminal: false
    }).on('line', function(line) {
       plist.queue1.queue.push(line)
    });
  }
  if (!god.existsSync("./data/plist2")){
    god.closeSync(god.openSync("./data/plist2", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/plist2"),
        terminal: false
    }).on('line', function(line) {
       plist.queue2.queue.push(line)
    });
  }
  if (!god.existsSync("./data/plist3")){
    god.closeSync(god.openSync("./data/plist3", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/plist3"),
        terminal: false
    }).on('line', function(line) {
       plist.queue3.queue.push(line)
    });
  }
  if (!god.existsSync("./data/plist4")){
    god.closeSync(god.openSync("./data/plist4", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/plist4"),
        terminal: false
    }).on('line', function(line) {
       plist.queue4.queue.push(line)
    });
  }
  return plist

}

exports.setserveremojis = function() {

  let serveremojis = {}
  let dir3 = "./data/serveremojis";
  if (!god.existsSync(dir3)){
      god.mkdirSync(dir3);
  } else {
    god.readdir(dir3, function(error, files) {
      if (error) {
        console.log(error)
        return;
      }
      files.forEach(function(filename) {
        serveremojis[filename] = []
        readline.createInterface({
            input: god.createReadStream(`${dir3}/${filename}`),
            terminal: false
        }).on('line', function(line) {
           serveremojis[filename].push(line)
        });
      })
    })
  }

  return serveremojis

}


exports.sethelp = function() {
  let helpcommands = {
   dev: [
    {
      prefix: "`:::`",
      description: "Executes code on the run. Must be used with caution."
    },
    {
      prefix: "`bot!` + `trust`",
      description: "Adds a person to the bot trusted list, allowing that person to use more commands."
    },
    {
      prefix: "`bot!` + `block`",
      description: "Adds a person to the bot block list, making that person unable to use any commands for this bot."
    },
    {
      prefix: "`bot!` + `reset`",
      description: "Removes a person from either trusted or blocked, if applicable."
    },
    {
      prefix: "`bot!` + `status`",
      description: 'Changes the bot status message to any given one.\nIf no special flag is given, the bot will be "playing" given status.\nSpecial flags:\n`--l` - The bot will be "listening" to given status;\n`--w` - the bot will be "watching" given status\n`--a` the status will be set to automatic instead of given message'
    },
    {
      prefix: "`bot!` + `be`",
      description: 'Changes the bot status to one of the following (user must specify which one):\n`online`, `idle`, `dnd`/`do not disturb`, and `invisible`.'
    }

  ],
  user: [
    {
      prefix: "`!$d`",
      description: "Auto-deletes your own message.\nCan be used alongside other commands in the same message.\nPreferably, use this command before all other commands."
    },
    {
      prefix: "`ccc`",
      description: "Auto-deletes your own message, then makes the bot replicate it.\n Only usable by whitelisted users."
    },
    {
      prefix: "`%%`",
      description: "Auto-deletes your own message, then makes the bot replicate it, in an embedded message format.\nIf no special flag is given, the message contains a description by default.\nOnly usable by whitelisted users.\nSpecial flags:\n`--t` - Adds a title to the embedded message.\n`--d` - Adds the text to the embedded message.\n`--c` - Sets the message color to given hexadecimal value, else default color will be used."
    },
    {
      prefix: "`!$bye`",
      description: "Can only be used by users with ban permissions. Bans a given user, with a nice surprise...\nSpecial flags:\n`--r` Specifies a reason for the ban. This will be visible in the auditory logs, and also sent as a DM to the user who was banned."
    },
    {
      prefix: "`bot!` + `intro`",
      description: "The bot sends out the default introduction message, in embedded format.\nSpecial flags:\n`--c` - Sets the message color to given hexadecimal value, else default color will be used."
    },
    {
      prefix: "`bot!` + `play`",
      description: "If the user is in a voice channel, the bot joins it and starts to play a specific song, or queues it if a song is already playing.\n Song can be either keyword(s) (the bot searches that on Youtube and plays the first result) or a direct youtube link."
    },
    {
      prefix: "`bot!` + `queue`",
      description: "Shows the current music queue."
    },
    {
      prefix: "`bot!` + `skip`",
      description: "If a song is playing, stops it and starts playing the next one in queue."
    },
    {
      prefix: "`bot!` + `stop`",
      description: "Stops playing any songs, clears the song queue, then disconnects."
    },
    {
      prefix: "`bot!` + `time`",
      description: "The bot tells the current time, at the timezone of the machine it's running on."
    },
    {
      prefix: "`bot!` + `alarm`",
      description: "Sets an alarm for the bot to say. Can only be used by whitelisted users.\nSpecial flags:\n`--h` - sets the hour for the alarm. Must be specified, unless delete or default message flags are in use.\n`--min` - sets the minute for the alarm; if not used, minute will be 0.\n`--dat` - sets the date for the alarm; if not used, day will be the closest possible.\n`--mon` - sets the month for the alarm; if not used, month will be the closest possible.\n`--y` - sets the year for the alarm; if not used, year will be the closest possible\n`--msg` - sets the alarm message; if not used, message will be the default one\n`--dm` - When used, the reply message sent when setting an alarm will be sent via direct message to the person who set up the alarm instead.\n`--g` - sets the default message for the alarm. Can only be used by my master.\nCan't be used with other flags at the same time.\n`--del` - Deletes a predefined alarm. Can't be used with other flags at the same time.\n"
    },
    {
      prefix: "`bot!` + `hi`, `bot!` + `thanks`, `bot!` + `revive` + server`",
      description: "Bot replies with predefined messages"
    }

  ]
  }
  return helpcommands
}

exports.changeStatus = function(globals, client) {
  if (globals.statusBot) {
     if (!globals.manualStatus) client.user.setActivity("Meleeeee!");
  } else {
     if (!globals.manualStatus) client.user.setActivity("DELTARUNE chap. 2");
  }
  globals.statusBot = !globals.statusBot
  return globals.statusBot
}
