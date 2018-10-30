const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let sicon = message.guild.iconURL;
  let funembed = new Discord.RichEmbed()
  .setTitle("Fun Commands")
  .setDescription("Have some fun!")
  .setThumbnail(sicon)
  .addField("Ping", "PONG")
  .addField("say", "Let the bot say something.")
  .addField("avatar", "Get the avatar from your friends")
  .addField("doggo", "get a random doggo!")
  .addField("cat", "get a random cat!")
  .addField("meme", "Get some memes!")
  .setColor("42f4bc")
  .setFooter("iBot created by iDevastate.exe#7393")
  .setThumbnail(message.author.avatarURL);
   message.channel.send(funembed);
}
module.exports.help = {
  name: "funhelp"
}
