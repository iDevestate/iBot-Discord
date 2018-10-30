const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.channel.send("This feature has been temporarily disabled!");
}
module.exports.help = {
  name: "musichelp"
}
