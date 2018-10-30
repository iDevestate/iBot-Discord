const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

  let msg = await message.channel.send("Generating...");

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`)
  if(!{body}) return message.channel.send("Something went wrong! Try again.");

  let catEmbed = new Discord.RichEmbed()
  .setTitle(":heart_eyes_cat: Found one! :smirk_cat: ")
  .setColor("RANDOM")
  .setImage(body.file)
  .setTimestamp()
  .setFooter(`iBot`, bot.user.displayAvatarURL);

  message.channel.send(catEmbed);
  msg.delete();
}

module.exports.help = {
  name: "cat"
}
