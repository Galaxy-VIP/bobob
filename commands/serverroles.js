const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    const role = message.guild.roles;
  const embed = new Discord.MessageEmbed()
    .addField("Server Roles", role.map((e) => e).join(', '))
  message.channel.send(embed) 
}