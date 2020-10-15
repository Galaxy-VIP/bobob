const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
const embed = new MessageEmbed()

if(message.content === client.user.toString()) message.reply('ada yg bisa saya bantu')

.setAuthor("SpongeBot", client.user.displayAvatarURL({format: "png"}))
.setDescription("hello I am SpongeBot Please type s!help for help")
.setFooter("SpongeBot | v 1.0", client.user.displayAvatarURL({format: "png"}))
.setTimestamp();

}