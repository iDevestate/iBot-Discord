const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!tomute) return message.reply("Couldn't find user.");
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`You ${message.author} don't have permission to mute!`);
  if(tomute.id === message.author.id) return message.channel.send("You can't mute yourself!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");

  if(!muterole) {
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        hoist: "1",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTION: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.delete().catch(O_o=>{});
  message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function() {
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`)
  }, ms(mutetime));

}


module.exports.help = {
  name: "tempmute"
}
