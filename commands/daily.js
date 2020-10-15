const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");//hi 

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('s!'))return;  
let nomer = Math.floor(Math.random() * 1000 + 200);                                 
  let user = message.author;

let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let timeout = 86400000;
  let amount = nomer;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`<:wait:759067664818896976> Kamu sudah claim kredit harian\n\nCoba lagi dalam **${time.hours}h ${time.minutes}m ${time.seconds}s** `)
.setThumbnail("https://emoji.gg/assets/emoji/2026_Unverified.png")    
.setFooter("SpongeBot")
timeEmbed.setTimestamp();
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("YELLOW")
  .setAuthor("Kredit Harian", bot.user.displayAvatarURL({dynamic: true}))
  .setDescription(`<:coin:759054656890208296> Kamu telah claim kredit harian sebesar ${nomer} coins \n\n Kamu sekarang mempunyai: <:coin:759054656890208296> **${money} Coins**`)
 .setThumbnail("https://emoji.gg/assets/emoji/9637_gold_coin.png")
 .setFooter("SpongeBot")
moneyEmbed.setTimestamp();
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
};