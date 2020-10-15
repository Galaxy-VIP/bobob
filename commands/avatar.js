const { MessageEmbed } = require('discord.js')
const prefix = "s!"
exports.run = async (client, message, args) => {
if(message.content.startsWith(`${prefix}avatar`)) {
    
            
  if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){  
            let avatar = member.displayAvatarURL({size: 4096, dynamic: true});
            let embed = new MessageEmbed()
            .setImage(avatar)
            .setAuthor(`${member.username} Avatar` , member.displayAvatarURL({format: "png"}))
            .setColor("YELLOW")
            .setFooter("SpongeBot | v 1.0" , client.user.displayAvatarURL({format: "png"}))
            .setTimestamp();
            message.channel.send(embed)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{  
            let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true})
            let embed = new MessageEmbed()
            .setImage(avatar)
            .setAuthor("Your Avatar" , message.author.displayAvatarURL({format: "png"}))
            .setColor("YELLOW")
            .setFooter("SpongeBot | v 1.0" , client.user.displayAvatarURL({format: "png"}))
            .setTimestamp();
            message.channel.send(embed)
        } 
} 
}