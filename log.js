const { MessageEmbed } = require('discord.js')

module.exports = {
    log(msg) {
        var emb = new MessageEmbed()
        .setTitle("Log")
        .setDescription(msg)
        .setColor("#00ff00")
        .setTimestamp()
        client.channels.cache.get(config_channel_log).send(emb)
    },
    error(msg) {
        var emb = new MessageEmbed()
        .setTitle("Error")
        .setDescription(msg)
        .setColor("#ff0000")
        .setTimestamp()
        client.channels.cache.get(config_channel_log).send(emb)
    }
}