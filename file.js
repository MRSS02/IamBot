const setup = require("./scripts/setup.js")
const checktime = require("./scripts/checktime.js")
const commands = require("./scripts/commandindex.js")
const Discord = require("discord.js");
const client = new Discord.Client();
const god = require('fs')
const readline = require('readline');

//Setting up the bot
let token = setup.startup()
let trustlist = setup.trustlist()
let blocklist = setup.blocklist()
let special = setup.special()
let plist = setup.playlistmake()
let helpcommands = setup.sethelp()
let playingpriv = false
let privqueue = 0
let cserverp
let queueservers = {}
let pmusic = []
let pmusic2 = []
let showsongs = []
let tmin
let thour
let tdate
let tmonth
let tyear
let timeOutMessage
let amessage
let v18
let v17
let v23
let v24
let ana
let statusBot = true
let manualStatus = false
let bi6to
let alarm = false
let currentTime
let globals = { }

async function changeStatus() {
  let returnedStatus = setup.changeStatus(statusBot, manualStatus, client)
  statusBot = returnedStatus
}
async function updatetime() {
   let timepromise = checktime(tmin, thour, tdate, tmonth, tyear, timeOutMessage, amessage, v17, v18, v23, v24, ana, bi6to, alarm, currentTime)
   timepromise.then(returned => {
   tmin = returned.tmin
   thour = returned.thour
   tdate = returned.tdate
   tmonth = returned.tmonth
   tyear = returned.tyear
   timeOutMessage = returned.timeOutMessage
   amessage = returned.amessage
   v18 = returned.v18
   v17 = returned.v17
   v23 = returned.v23
   v24 = returned.v24
   ana = returned.ana
   bi6to = returned.bi6to
   alarm = returned.alarm
   currentTime = returned.currentTime
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
let process = commands(client, message, trustlist, blocklist, special, plist, helpcommands, playingpriv,
privqueue, cserverp, queueservers, pmusic, pmusic2, showsongs, tmin, thour, tdate, tyear, timeOutMessage,
amessage, v17, v18, v23, v24, ana, statusBot, manualStatus, bi6to, alarm, currentTime, globals, updatetime).then(returned => {
//recover returned variable data
trustlist = returned.trustlist
blocklist = returned.blocklist
special = returned.special
plist = returned.plist
helpcommands = returned.helpcommands
playingpriv = returned.playingpriv
privqueue = returned.privqueue
cserverp = returned.cserverp
queueservers = returned.queueservers
pmusic = returned.pmusic
pmusic2 = returned.pmusic2
showsongs = returned.showsongs
tmin = returned.tmin
thour = returned.thour
tdate = returned.tdate
tyear = returned.tyear
timeOutMessage = returned.timeOutMessage
amessage = returned.amessage
v17 = returned.v17
v18 = returned.v18
v23 = returned.v23
v24 = returned.v24
ana = returned.ana
statusBot = returned.statusbot
manualStatus = returned.manualStatus
bi6to = returned.bi6to
alarm = returned.alarm
currentTime = returned.currentTime
globals = returned.globals
}).catch()
});

//This sets the bot online.
client.login(token);
