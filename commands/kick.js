const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!kUser) message.channel.send("Can't find user!");
     let kReason = args.join(" ").slice(22);
     if(!kReason) return message.channel.send("Please tell me why you want to kick.");
     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No permission to do that!");
     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

     let kickEmbed = new Discord.RichEmbed()
     .setDescription("~kick~")
     .setColor("#2600ff")
     .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
     .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
     .addField("Kicked in", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", kReason);

     let kickChannel = message.guild.channels.find(`name`, "logs");
     if (!kickChannel) return message.channel.send(kickEmbed);

     message.delete().catch(O_o=>{});
     message.guild.member(kUser).kick(kReason)
     kickChannel.send(kickEmbed);
}
module.exports.help = {
     name: "kick"
}
