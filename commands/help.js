const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL
  let helpembed = new Discord.RichEmbed()
      .setTitle("Help")
      .setDescription("Main help, i! is the prefix!")
      .setDescription("Do i!command to advise commands to add")
      .addField("Fun commands", "Do i!funhelp for the fun commands!")
      .addField("Music commands", "Do i!musichelp for the music commands")
      .addField("Moderation commands", "Do i!moderation for the commands")
      .setColor("42f4bc")
      .setFooter("iBot created by iDevastate.exe#7393")
      .setThumbnail(sicon);
 message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
