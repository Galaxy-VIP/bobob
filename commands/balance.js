const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('s!'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setDescription(`**${user}'s Profile**\n\n**<:coin:759054656890208296> Coins**:\n **$${money}**\n Use your money to buy something!`)
  .setFooter("SpongeBot")
  .setTimestamp();
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pro"]
}