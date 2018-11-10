const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const token = process.env.token;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("iBot developement", {type: "PLAYING"});

});

bot.on("guildMemberAdd", async member => {
    let welcomechannel = member.guild.channel.find('name', "welcome_leave");
    welcomechannel.send(`Look out! ${member} has joined the party!`);
});

bot.on("guildMemberRemove", async member => {
     let leavechannel = member.guild.channel.find('name', "welcome_leave");
     leavechannel.send(`Oh no! ${member} has left us =(`);
});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${"coinAmt"} ; ${"baseAmt"}`);

  if(coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  }


  let prefix = prefixes[message.guild.id].prefixes;
  if (!message.content.startsWith(prefix)) return; // MonoxNote: checking if it starts with prefix or not
  let messageArray = message.content.split(/ +/g); // MonoxNote: changed to regex because it more effective
  let cmd = messageArray.shift().slice(prefix.length) // MonoxNote: changed again
  let args = messageArray
  let commandfile = bot.commands.get(cmd);
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(token);