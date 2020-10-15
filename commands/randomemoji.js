exports.run = (client, message, args) => {

const emo = client.emojis.cache.random()

message.channel.send(emo.toString())

}