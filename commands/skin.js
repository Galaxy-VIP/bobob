const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "skin",
    alias: ["skin"],
    timeout: "2000",
    usage:"s!skin <name>",
    run: async (client, message, args) => {
   if(!args.length) return message.channel.send(`No argument submitted. Try ${module.exports.usage}`)
const skin = args.join(" ");
        const embed = new MessageEmbed()
        .setTitle(`Minecraft Skin ${skin}`)
        .setDescription(`[Download Skin](https://mc-heads.net/download/${skin})`)
        .setImage(`https://mc-heads.net/body/${skin}/120`)
        .setThumbnail(`https://cravatar.eu/helmhead/${skin}/190.png`)
        .setFooter(`SpongeBot`)
        .setColor("YELLOW");
        embed.setTimestamp();

   message.channel.send(embed);





    }//:V 
} //O