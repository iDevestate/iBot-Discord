const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.reply("Pong!");
}
module.exports.help = {
  name: "ping"
}
