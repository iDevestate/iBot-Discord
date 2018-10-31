const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   message.channel.send("Getting hyped!", {files: ["./partyblob/partyblob.gif"]});
}

module.exports.help = {
    name: "hyped"
}
