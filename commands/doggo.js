const Discord = require("discord.js");
const superagent = require("superagent");
const client = new Discord.Client();
const woof = client.emojis.find(emoji => emoji.name === "dog");

module.exports.run = async(bot, message, args) => {
  let msg = await message.channel.send("Generating...");

  let {body} = await superagent
  .get(`https://dog.ceo/api/breeds/image/random`)
  if(!{body}) return message.channel.send("Something went wrong! Try again.");

  let dogEmbed = new Discord.RichEmbed()
  .setTitle(":dog: Found one! :dog:")
  .setColor("RANDOM")
  .setImage(body.message)
  .setTimestamp()
  .setFooter(`iBot`, bot.user.displayAvatarURL);
 
  msg.delete();
  message.channel.send(dogEmbed);
}

module.exports.help = {
  name: "doggo"
}
