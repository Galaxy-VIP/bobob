const Discord = require("discord.js")
const prefix = "s!"
exports.run = async (client, message, args) => {
if(message.content.startsWith(`${prefix}talk`)) {

if(message.content == "test"){
    message.channel.send("test")
  }

}
}