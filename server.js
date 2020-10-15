const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
const bot = client    
const newUsers = [];
const { inspect } = require("util")








app.get("/", (request, response) => {
  console.log("Chek you bot");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => { 

http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  let status = [`${client.users.cache.size} user!`,
`${client.guilds.cache.size} guild!`,
`s!help`]
setInterval(() => {
let random = Math.floor(Math.random() * status.length)
client.user.setActivity(status[random])
}, 10000)
});



client.on("message", async message => { 

//Command di SERVER.JS
const prefix = "s!"
if(!message.content.startsWith(prefix)) return;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;


try {


    const commandsFile = require(`./commands/${cmd}.js`);
    commandsFile.run(client, message, args);
  } catch (e) {
    console.log("Command Not Found")
  } 
});

client.login(process.env.BOT_TOKEN);