const db = require('quick.db')
const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 60000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:wait:759067664818896976> Anda sudah bekerja baru-baru ini\n\nCoba lagi dalam **${time.minutes}m ${time.seconds}s** `)
        .setThumbnail("https://emoji.gg/assets/emoji/2026_Unverified.png")  
        .setFooter("SpongeBot")
        .setTimestamp();
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Pembangun','Pelayan','Polisi','Koki','Pilot','Hacker','Satpam','Tentara','Pesulap','Guru','Dokter']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 100) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
         .setAuthor("Bekerja", bot.user.displayAvatarURL({dynamic: true}))
        .setDescription(`<:verified:759392047181856788> Kamu bekerja sebagai **${replies[result]}**\n\n Dan mendapatkan **${amount}** coins`)
        .setThumbnail("https://emoji.gg/assets/emoji/4407_New_verified.png")
        .setFooter("SpongeBot")
        .setTimestamp()
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}