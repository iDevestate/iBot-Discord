const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Don't have the permissions for that!");
 let wUser = message.guild.member(message.mentions.users.first()) || message.guild.mmembers.get(args[0]);
 if(!wUser) return message.reply("Couldn't find user!");
 let reason = args.join(" ").slice(22);
 if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("Too cool to warn!");
 if(!reason) return message.reply("Add a reason!");


 if(!warns[wUser.id]) warns[wUser.id] = {
   warns: 0
 };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("~Warns~")
  .setAuthor(message.author.username)
  .setColor("#04f9ed")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned in", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 1){
    wUser.send(`Watch out! You have been warned!`);
  }

  if(warns[wUser.id].warns == 2){
    wUser.send("Watch out! That's a second warning.");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role.");

    let mutetime = "1h";
    if(!wUser.hasRole) return;
    await(wUser.AddRole(muterole.id));
    message.channel.send(`${wUser.tag} has been temporarily muted (Warnings!)`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`<@${wUser.id}> has been unmuted!`);
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
   message.guild.member(wUser).kick(reason);
   wUser.send("You have been kicked = 3 warnings. Next warning will be ban!");
  }

  if (warns[wUser.id].warns == 4){
    message.guild.member(wUser).ban(reason);
    wUser.send("You have been banned!");
  }
}
module.exports.help = {
  name: "warn"
}
