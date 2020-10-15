const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");


module.exports = {
name: "mine",
run: async (client, message, args) => {
 if(!message.content.startsWith('s!'))return;  
let nomer = Math.floor(Math.random() * 10 + 1);
 let user = message.author;
let timeout = 5000;
  let amount = nomer;

 let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

{
      function doRandHT() {
var rand = [`You mining with <:wooden_pickaxe:758195302259097642> Wooden Pickaxe and got ${nomer} <:coal:758159904774291476> Coal `,`You mining with <:wooden_pickaxe:758195302259097642> Wooden Pickaxe and got ${nomer} <:stone:758197346038841375> Stone `];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Mining`,
"description": doRandHT(),
"color" : "YELLOW"
 };
message.channel.send({embed})

  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())

}
}
}
}