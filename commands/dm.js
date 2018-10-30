const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let dmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!dmUser) message.channel.send("Can't find user!");
  let dm = args.join(" ").slice(22);
  if(!dm) return message.reply("Add a message!");

  message.delete();
  dmUser.send(dm);
}

module.exports.help = {
  name: "dm"
}
