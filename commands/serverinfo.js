const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

function checkOfflineUsers(guild) {
        let offlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "offline")
                offlineCount++; 
        });
        return offlineCount;
    }

    let sicon = message.guild.iconURL({ dynamic: true});
    let serverembed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL({ dynamic: true}))
        .setColor("YELLOW")
        .addField('Server owner', message.guild.owner, true)
        .addField('Server region', message.guild.region, true)
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField('Verification level', message.guild.verificationLevel, true)
        .addField('Channel count', message.guild.channels.cache.size, true)
        .addField('Total member count', message.guild.memberCount)
        .addField('Humans', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('Member Status', `<:online:719749597341417552> Online ${checkOnlineUsers(message.guild)}
<:invisible:719749599656673361> Offline ${checkOfflineUsers(message.guild)}`)
        .setFooter('Guild created at:')
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
}