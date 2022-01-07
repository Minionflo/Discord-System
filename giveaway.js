const { MessageEmbed } = require('discord.js')

module.exports = {
    async start(message, args) {
        function getRandomInt(max) { return Math.floor(Math.random() * max); }
        var server = client.guilds.cache.get(config_server) 
        var channel = client.channels.cache.get(config_channel_giveaway)
        var emoji = "🎉"
        var msg
        var users = []
        var winners_raw = []
        var winners = []
        async function filter(r, u) { return true }

        var argss = args
        var time_raw_1 = parseInt(args[0])
        var time_raw_2 = time_raw_1 * 1000 * 60
        var time_raw_3 = time_raw_2 + Date.now()
        var time = new Date(time_raw_3)
        await argss.shift()
        var number_winners = args[0]
        await argss.shift()
        var prize = args.join(" ")

        var emb = new MessageEmbed()
            .setTitle("Giveaway")
            .setDescription("")
            .addField("Number of Winners: ", number_winners, false)
            .addField("Prize: ", prize, false)
            //.setColor("#00ff00")
            .setTimestamp(time)
            .setFooter("Until")
            // .setAuthor(message.author.tag, message.author.avatarURL())
        var msg = await channel.send("<@&" + config_role_misc_giveaways_ping + ">", emb)
        await msg.react(emoji)
        const giveaway_col = await msg.createReactionCollector(filter, { dispose: true, time: time_raw_2 });
        giveaway_col.on('collect', async (r, u) => {
            if(r.emoji.name == emoji&& u.id != client.user.id) {
                users.push(u.id)
                console.log(users)
            }
        })
        giveaway_col.on('remove', async (r, u) => {
            if(r.emoji.name == emoji && u.id != client.user.id) {
                users.splice(users.indexOf(u.id), 1)
            }
        })
        giveaway_col.on('end', async (r, u) => {
            if(users.length == 0) { 
                var emb = new MessageEmbed()
                    .setTitle("Giveaway Ended")
                    .addField("Prize: ", prize, false)
                    .addField("Winners: ", "None", false)
                    .setTimestamp()
                    .setFooter("Endet at")
                await msg.edit("<@&" + config_role_misc_giveaways_ping + ">", emb)
                return 
            }
            for(var i = 0; i < number_winners; i++) {
                random = getRandomInt(users.length)
                winners_raw.push(users[random])
            }
            winners_raw.forEach(function (V, I, A) {
                var member = server.members.cache.get(V)
                winners.push(`<@!${member.id}>`)
                member.send(`You won the giveaway on Minionflo.net`)
            })
            var embb = new MessageEmbed()
                .setTitle("Giveaway Ended")
                .addField("Prize: ", prize, false)
                .addField("Winners: ", winners.join("; "), false)
                .setTimestamp()
                .setFooter("Endet at")
            msg.edit("<@&" + config_role_misc_giveaways_ping + ">", embb)
            channel.send(winners).then(m => m.delete({ timeout: 1000 }))
        })
    }
}