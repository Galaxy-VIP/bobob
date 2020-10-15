const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    alias: ["?"],
    run: async (client, message, args) => {
 const embed = new MessageEmbed()
 .setAuthor("SpongeBot [ID]", client.user.displayAvatarURL({format: "png"}))
 .setDescription("Created by : SafaGemink_#8639 \nCommands List\n Bot discord indonesia")
 .addField(":hammer_pick: Utility",`\`help\`,\`avatar\`,\`ping\`,\`say\`,\`uptime\`,\`userinfo\` \`stats\` \`info\` \`docs\` \`npmsearch\`
`, true)
 .addField(":balloon: Fun",`\`cat\`,\`dog\`,\`meme\`,\`howgay\`,\`textflip\`,\`fish\`,\`randomemoji\`,\`8ball\`,\`motivate\`
`, true)
 .addField(":flag_jp: Anime",`\`kawai\`
`, true)
 .addField("<a:mcbounce:711611827481739334> Minecraft",`\`server\`,\`skin\`,\`achievement\`
`, true)
 .addField(":hammer_pick: Moderation",`\`kick\`,\`ban\`
`, true)
 .addField(":underage: NSFW",`\`hentai\`
`, true)
 .addField(":link: Useful link ",`\[Discord Server](https://discord.gg/FHmYtN8) | [Invite](https://discord.com/oauth2/authorize?client_id=757558262039052288&permissions=8&scope=bot)`,)
 .setColor("YELLOW")
 .setThumbnail(client.user.displayAvatarURL())
 .setFooter("Jika ada bug di bot ini ketik s!report <bug>", client.user.displayAvatarURL({format: "png"}))
 .setTimestamp();
    message.channel.send(embed);
    }//:V 
} //O

                                                                   