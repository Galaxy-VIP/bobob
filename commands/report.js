const { MessageEmbed } = require('discord.js')
const channelbug = '761252885249785906'

exports.run = async (client, message, args) => {
  const channel = client.channels.cache.get(channelbug)
  let bug = args.join(" ")
  if(!bug) return message.channel.send("Untuk melaporkan bug dengan cara  `s!report <bug>`")
  let bugwait = await message.channel.send("Laporan bug sedang di kirim...")
  let embed = new MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Laporan Baru Masuk")
  .addField("\nLaporan Oleh", `\`${message.author.username}\``)
  .addField("Bug Yang Di Laporkan", `\`bug\``)
  .setFooter("Laporan Baru Masuk")
  .setTimestamp()
  return setTimeout(function() {
    bugwait.edit(`Bug \`${bug}\` berhasil di laporkan`, channel.send(embed))
  }, 2000)
}