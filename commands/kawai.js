module.exports = {
name: "kawai",
run: async (client, message, args) => {
const { MessageEmbed } = require("discord.js");

if (!message.channel.nsfw) return message.channel.send("Cannot send NSFW content in a SFW channel.")

const Discord = require("discord.js");
const KagApi = require("@kagchi/kag-api");
const kawai = await KagApi.loli.kawaii();
const embed = new Discord.MessageEmbed()
.setAuthor("Kawai", kawai)
.setImage(kawai)
.setFooter("SpongeBot | v 1.0", client.user.displayAvatarURL({format: "png"}))
.setColor("RANDOM")
.setTimestamp();

message.channel.send(embed)
}
}