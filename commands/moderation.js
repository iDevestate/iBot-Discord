const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL
  let modembed = new Discord.RichEmbed()
      .setTitle("Moderation commands")
      .setDescription("moderation help, i! is the prefix!")
      .setDescription("Do i!command to advise commands to add")
      .addField("Kick", "Kicks a user. Don't forget a reason!")
      .addField("Ban", "Bans a user. Don't forget a reason!")
      .addField("Tempmute", "Mutes for a specified time.")
      .addField("addrole", "Adds a role to a player.")
      .addField("removerole", "Removes a role to a player.")
      .addField("Report", "This is a user feature to report bad behavings from other users")
      .addField("warn", "This will warn a player. 1warn = warned, 2 warnings = mute for an hour, 3 warnings = kick and 4 means ban")
      .setColor("42f4bc")
      .setFooter("iBot created by iDevastate.exe#7393")
      .setThumbnail(sicon);
 message.channel.sendEmbed(modembed)
}
module.exports.help = {
  name: "moderation"
}
