const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "uptime",
  alias:["up"],
  description: "Uptime Bot",
  run: async (client, message) => {
    const uptime = require("pretty-ms")(client.uptime, { verbose:true})

  const embed = new MessageEmbed()
   .setTitle(`${client.user.username} Uptime`)
    .setFooter("SpongeBot")
    .setColor("YELLOW")
    .addField(":palm_tree: Uptime", uptime)
    .setTimestamp()
  return message.channel.send(embed).catch(console.error);
  }
}