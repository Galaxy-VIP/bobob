const { MessageEmbed } = require("discord.js")
const { platform, arch, cpus } = require("os")

exports.run = async(client, message, args) => {
  const model = cpus()[0].model + " " + arch()
  const tanggalBuat = client.user.createdAt.toDateString()
  
  const embed = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle("Bot Statistics")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Developer",`\`\`\`SafaGemink_#8639\`\`\``)
  .addField("Bot", `\`\`\`
Username: ${client.user.username}
Date Created: ${tanggalBuat}\`\`\``)
  .addField("System", `\`\`\`
CPU: ${model}
Platform: ${platform}
Websocket: ${client.ws.ping} ms(miliseconds)\`\`\``)
  
  message.channel.send(embed)
}