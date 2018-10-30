const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author; //mention to get avatar

        //Avatar embed
        let avatarembed = new Discord.RichEmbed()
        .setAuthor(`${user.username}`)
        .setImage(user.displayAvatarURL)
        .setColor('#b107ba')//Takes a rondom color for the embed
        //Sent the embed
        message.delete();
        message.channel.send(avatarembed)
}
module.exports.help = {
  name: "avatar"
}
