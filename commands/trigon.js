const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let botChannel = message.guild.channels.find(`name`, "bot_commands");
    if (!botChannel) return;
   message.reply("Trigon download at https://arponag.xyz/trigon/");

   
}

module.exports.help = {
    name: "trigon"
}