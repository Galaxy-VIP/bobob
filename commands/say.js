const Discord = require("discord.js");

exports.run = async (client, message, args) => {

   
    if(message.guild === null)return;

  
    if (message.author.bot) return;

  const sayMessage = args.join(" ");
    message.delete({ timeout: 0 }).catch(apaan => {});
message.channel.send(sayMessage);
    
        

};
exports.help = {
  name: "say",
  description: "Say message",
  usage: "say <text>",
  example: "mi.say hi"
}
 
exports.conf = {
  aliases: ["sy"],
  cooldown: 3
}