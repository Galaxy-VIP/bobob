const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const { NovelCovid } = require("novelcovid")

const track = new NovelCovid();

module.exports.run = async (bot, message, args) => {

if (!args.length) {

return message.channel.send("Masukan nama negara yang benar!")

}

if(args.join(" ") === "semua") {
let corona = await track.all()

let embed = new MessageEmbed()
.setTitle("Total Keseluruhan:")
.setColor("YELLOW")
.setDescription("Total Yang Terjangkit Virus Corona 2020.")
.addField("Total Kasus:", corona.cases, true)
.addField("Total Kematian", corona.deaths , true)
.addField("Total Penanganan:", corona.recovered, true)

message.channel.send(embed)

} else {

let corona = await track.countries(args.join(" "))
let embed = new MessageEmbed()

.setTitle("Total Keseluruhan:")
.setColor("YELLOW")
.setDescription("Total Yang Terjangkit Virus Corona 2020.")
.addField("Total Kasus:", corona.cases, true)
.addField("Total Kematian", corona.deaths , true)
.addField("Total Penanganan:", corona.recovered, true)

message.channel.send(embed)

}

}