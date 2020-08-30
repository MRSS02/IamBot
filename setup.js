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
  try {
     token = god.readFileSync('./data/token', 'utf8').toString();
  }
  catch (error) {
    console.log(error)
  }
};
getToken()

return token

}

exports.trustlist = function() {
  let trustlist = []
  if (!god.existsSync("./data/trustlist")){
    god.closeSync(god.openSync("./data/trustlist", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/trustlist"),
        terminal: false
    }).on('line', function(line) {
       trustlist.push(line)
    });
  }
  return trustlist
}

exports.blocklist = function() {
  let blocklist = []
  if (!god.existsSync("./data/blocklist")){
    god.closeSync(god.openSync("./data/blocklist", 'w'));
  } else {
    readline.createInterface({
        input: god.createReadStream("./data/blocklist"),
        terminal: false
    }).on('line', function(line) {
       blocklist.push(line)
    });
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
