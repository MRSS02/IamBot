const setup = require("./scripts/setup.js")
const checktime = require("./scripts/checktime.js")
const commands = require("./scripts/commandindex.js")
const randomMessage = require("./scripts/randomMessage.js")
const Discord = require("discord.js");
const client = new Discord.Client();
const god = require('fs')
const readline = require('readline');

//Setting up the bot
const token = setup.startup()
const globals = {
  dblogin: setup.setDB(),
  messageChannels: setup.setMsgchannels(),
  messages: setup.setMsgs(),
  trustlist: setup.trustlist(),
  blocklist: setup.blocklist(),
  special: setup.special(),
  plist: setup.playlistmake(),
  helpcommands: setup.sethelp(),
  serveremojis: setup.setserveremojis(),
  playingpriv: false,
  privqueue: 0,
  cserverp: false,
  queueservers: {},
  pmusic: [],
  pmusic2: [],
  showsongs: [],
  tmin: false,
  thour: false,
  tdate: false,
  tmonth: false,
  tyear: false,
  timeOutMessage: false,
  amessage: false,
  v18: false,
  v17: false,
  v23: false,
  v24: false,
  ana: false,
  statusBot: true,
  manualStatus: false,
  bi6to: false,
  alarm: false,
  currentTime: false
}
const setdb = require('mongodb').MongoClient;
const Database = new setdb(globals.dblogin, { useUnifiedTopology: true })
Database.connect((error, db) => {
  let dbo = db.db("teste0")
  dbo.collection("teste1").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
})
async function changeStatus() {
  let returnedStatus = setup.changeStatus(globals, client)
  globals.statusBot = returnedStatus
}
async function updatetime() {
   let timepromise = checktime(globals)
   timepromise.then(returned => {
   for (var item in returned) {
     globals[item] = returned[item]
   }
   })
}


//Initializing the bot
client.on("ready", () => {
  console.log(`Hey. I was initialized inside ${client.guilds.cache.size} servers.`);
  let initialact = Math.round(Math.random())
  if (initialact == 0) client.user.setActivity("Meleeeee!"); else client.user.setActivity("DELTARUNE chap. 2");
  updatetime()
  setInterval(changeStatus, 1200000)
  setInterval(updatetime, 60000)
  setInterval(randomMessage, 1200000, client, globals)
});

//This is logged when the bot enters a new server.
client.on("guildCreate", guild => {
  console.log(`I just joined the server "${guild.name}" (ID: ${guild.id}). There are ${guild.memberCount} members there.`);
});

//This is logged when the bot leaves a server.
client.on("guildDelete", guild => {
  console.log(`I just left the server "${guild.name}" (ID: ${guild.id})...`);
});


//This sets the bot commands.
client.on("message", async message => {
let returned = await commands(client, message, globals,
updatetime, Discord, Database, god)
//recover returned variable data
for (var item in returned) {
  globals[item] = returned[item]
}

});

//This sets the bot online.
client.login(token);
