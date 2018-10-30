const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry, you don't have the right perms.");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't find user, Specify a player by pinging.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role!")

  if(!rMember.roles.has(gRole.id)) return message.reply("User doesn't have that role.");
  await(rMember.removeRole(gRole.id));
  message.delete().catch(O_o=>{});

  try{
    await rMember.send(`RIP, you're role ${gRole.name} has been removed.`)
  }catch(e) {
    message.channel.send(`RIP to <@${rMember.id}> you're role ${gRole.name} has been removed! We tried to dm, but dm's where locked!`)
  }
}
module.exports.help = {
  name: "removerole"
}
