const Discord = require("discord.js") 
exports.run = async (client, message) => {
  const m = await message.channel.send('Getting ping info...')
  
  const pembed = new Discord.MessageEmbed()
  .setTitle("🏓 PONG!")
  .addField(":hourglass_flowing_sand: Roundtrip took", `**__${m.createdTimestamp - message.createdTimestamp}ms​__**`, true)
  .addField(":heartbeat: Hearthbeat", `**__${Math.round(client.ws.ping)}ms​__**`, true)
  .setColor("YELLOW")
  .setFooter("SpongeBot | v 1.0" , client.user.displayAvatarURL({format: "png"}))
   .setTimestamp();
  return setTimeout(function(){ 
m.edit("Success getting info!", pembed)
}, 3000);
};