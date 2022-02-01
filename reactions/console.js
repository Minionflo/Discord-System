const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }

    var console = await msgs.filter(m => m.content.includes('__***Console***__'))
    console = console.first()
    if (console == undefined || console.size == 0) {console = await client.channels.cache.get(config_channel_roles).send(`__***Console***__`)}
    console.edit(`__***Console***__

${config_emoji_a} = **Nintendo Switch**
${config_emoji_b} = **PlayStation 4**
${config_emoji_c} = **Xbox One**`)


    await console.react(config_emoji_a)
    await console.react(config_emoji_b)
    await console.react(config_emoji_c)


    const console_col = console.createReactionCollector(filter, { dispose: true });
    console_col.on('collect', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_nintendo_switch)) ; log.log(`Role add ${u.username} Nintendo Switch`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_ps4)) ; log.log(`Role add ${u.username} PS4`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_xbox_one)) ; log.log(`Role add ${u.username} Xbox one`) }
    })
    console_col.on('remove', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_nintendo_switch)) ; log.log(`Role remove ${u.username} Nintendo Switch`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_ps4)) ; log.log(`Role remove ${u.username} PS4`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_xbox_one)) ; log.log(`Role remove ${u.username} Xbox one`) }
    })
};