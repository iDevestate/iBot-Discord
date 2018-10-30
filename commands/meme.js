const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

  let msg = await message.channel.send("Generating...");

  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`)
  if(!{body}) return message.channel.send("Something went wrong! Try again.");

  let memeEmbed = new Discord.RichEmbed()
  .setTitle("Best memez")
  .setColor("RANDOM")
  .setImage(body.url)
  .setTimestamp()
  .setFooter(`iBot`, bot.user.displayAvatarURL);

  message.channel.send(memeEmbed);
  msg.delete();
}

module.exports.help = {
  name: "meme"
}