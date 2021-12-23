const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var nintendo_switch = "572887165852319745"
    var ps4 = "572887166146052107"
    var xbox_one = "572887209749905433"

    var console = await msgs.filter(m => m.content.includes('__***Console***__'))
    console = console.first()
    if (console == undefined || console.size == 0) {console = await client.channels.cache.get(config_channel_roles).send(`__***Console***__`)}
    console.edit(`__***Console***__

<:LOL:${nintendo_switch}> = **Nintendo Switch**
<:LOL:${ps4}> = **PlayStation 4**
<:LOL:${xbox_one}> = **Xbox One**`)


    await console.react(nintendo_switch)
    await console.react(ps4)
    await console.react(xbox_one)


    const console_col = console.createReactionCollector(filter, { dispose: true });
    console_col.on('collect', async (r, u) => {
        if(r.emoji.id == nintendo_switch) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_nintendo_switch)) ; log.log(`Role add ${u.username} Nintendo Switch`) }
        else if(r.emoji.id == ps4) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_ps4)) ; log.log(`Role add ${u.username} PS4`) }
        else if(r.emoji.id == xbox_one) { await server.member(u).roles.add(await server.roles.fetch(config_role_console_xbox_one)) ; log.log(`Role add ${u.username} Xbox one`) }
    })
    console_col.on('remove', async (r, u) => {
        if(r.emoji.id == nintendo_switch) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_nintendo_switch)) ; log.log(`Role remove ${u.username} Nintendo Switch`) }
        else if(r.emoji.id == ps4) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_ps4)) ; log.log(`Role remove ${u.username} PS4`) }
        else if(r.emoji.id == xbox_one) { await server.member(u).roles.remove(await server.roles.fetch(config_role_console_xbox_one)) ; log.log(`Role remove ${u.username} Xbox one`) }
    })
};