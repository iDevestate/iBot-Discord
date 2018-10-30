const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermissions("MANAGE_ROLES")) return message.reply("Sorry, you don't have the right perms.");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't find user, Specify a player by pinging.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role!")

  if(rMember.roles.has(gRole.id)) return message.reply("User already has that role.");
  await(rMember.addRole(gRole.id));
  message.delete().catch(O_o=>{});

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e) {
    message.channel.send(`Congrats to <@${rMember.id}> you have been given the role ${gRole.name}. We tried to dm, but dm's where locked!`)
  }
}
module.exports.help = {
  name: "addrole"
}
