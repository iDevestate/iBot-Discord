const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("Server information")
  .setColor("#ff8c00")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created on", message.guild.createdAt)
  .addField("You joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount)
  .addField("Server prefix", "i!")
  .addField("Report", "Report bad users!")
  .setFooter("iBot created by iDevastate.exe#7393");
  return message.channel.send(serverembed);
}
module.exports.help = {
  name: "serverinfo"
}
