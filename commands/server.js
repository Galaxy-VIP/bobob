const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "server",
    alias: ["srv"],
    timeout: "2000",
    usage:"s!server <ip>",
    run: async (client, message, args) => {
   if(!args.length) return message.reply(`No argument submitted. Try ${module.exports.usage}`)
const ip = args.join(" ");
        const embed = new MessageEmbed()
        .setTitle(`Minecraft server ${ip}`)
        .setImage(`http://status.mclive.eu/Server/${ip}/banner.png`)
        .setFooter(`SpongeBot`)
        .setColor("YELLOW");
        embed.setTimestamp();

   message.channel.send(embed);





    }//:V 
} //O