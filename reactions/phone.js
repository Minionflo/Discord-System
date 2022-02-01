const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }

    var phone = await msgs.filter(m => m.content.includes('__***Phone OS***__'))
    phone = phone.first()
    if (phone == undefined || phone.size == 0) {phone = await client.channels.cache.get(config_channel_roles).send(`__***Phone OS***__`)}
    phone.edit(`__***Phone OS***__

${config_emoji_a} = **Android**
${config_emoji_b} = **IOS**`)


    await phone.react(config_emoji_a)
    await phone.react(config_emoji_b)


    const phone_col = phone.createReactionCollector(filter, { dispose: true });
    phone_col.on('collect', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.add(await server.roles.fetch(config_role_phone_android)) ; log.log(`Role add ${u.username} Android`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.add(await server.roles.fetch(config_role_phone_ios)) ; log.log(`Role add ${u.username} IOS`) }
    })
    phone_col.on('remove', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.remove(await server.roles.fetch(config_role_phone_android)) ; log.log(`Role remove phone ${u.username} Android`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.remove(await server.roles.fetch(config_role_phone_ios)) ; log.log(`Role remove phone ${u.username} IOS`) }
    })
};