const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
     let botembed = new Discord.RichEmbed()
     .setTitle("Bot information")
     .setDescription("Best bot ever!")
     .addField("Bot name", bot.user.username)
     .addField("Created on", bot.user.createdAt)
     .setColor("#ff8c00")
     .setFooter("iBot created by iDevastate.exe#7393")
     .setThumbnail(bicon);

   return message.channel.send(botembed);
}
module.exports.help = {
  name: "botinfo"
}
