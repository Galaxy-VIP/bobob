const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shop",
    alias: ["?"],
    run: async (client, message, args) => {
 const embed = new MessageEmbed()
 .setAuthor("SpongeBot", client.user.displayAvatarURL({format: "png"}))
 .setDescription("use s!upgrade <pickaxe> to upgrade!")
 .addField("Chance = To get rare ore!")
 .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+30 Mining Speed\,\0.9% Chance\,\Price: $50,000\
`, true)
 .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+70 Mining Speed\,\+4% Chance\,\Price: $140,000\
`, true)
  .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+170 Mining Speed\,\+20% Chance\,\Price: $200,000\
`, true)
  .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+390 Mining Speed\,\+40% Chance\,\Price: $580,000\
`, true)
  .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+738 Mining Speed\,\+70.3% Chance\,\Price: $1,230,000\
`, true)
  .addField("Upgrade to <:wooden_pickaxe:758195302259097642>: ",`\+2130 Mining Speed +30\,\+99.8% Chance\,\Price: $10,190,000\
`, true)
 .setColor("YELLOW")
 .setThumbnail(client.user.displayAvatarURL())
 .setFooter("SpongeBot | Shop", client.user.displayAvatarURL({format: "png"}))
 .setTimestamp();
    message.channel.send(embed);
    }//:V 
} //O

                                                                   