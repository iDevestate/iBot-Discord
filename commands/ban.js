const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.reply("Add a reason!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permission to do that!");
  if(bUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("That person can't be banned!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#ff0054")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "logs");
  if(!banChannel) return message.channel.send("Couldn't find a log channel!");

  message.delete().catch(O_o=>{});
  message.guild.member(bUser).ban(bReason)
  banChannel.send(banEmbed);
}
module.exports.help = {
  name: "ban"
}
