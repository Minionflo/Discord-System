const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var windows = "572887170478768138";
    var macos = "572887777692090408"
    var linux = "922287540940185660"

    var pc = await msgs.filter(m => m.content.includes('__***PC OS***__'))
    pc = pc.first()
    if (pc == undefined || pc.size == 0) {pc = await client.channels.cache.get(config_channel_roles).send(`__***PC OS***__`)}
    pc.edit(`__***PC OS***__

<:LOL:${windows}> = **Windows**
<:LOL:${macos}> = **MacOS**
<:LOL:${linux}> = **Linux**`)


    await pc.react(windows)
    await pc.react(macos)
    await pc.react(linux)


    const pc_col = pc.createReactionCollector(filter, { dispose: true });
    pc_col.on('collect', async (r, u) => {
        if(r.emoji.id == windows) { await server.member(u).roles.add(await server.roles.fetch(config_role_pc_windows)) ; log.log(`Role add ${u.username} Windows`) }
        else if(r.emoji.id == macos) { await server.member(u).roles.add(await server.roles.fetch(config_role_pc_macos)) ; log.log(`Role add ${u.username} Macos`) }
        else if(r.emoji.id == linux) { await server.member(u).roles.add(await server.roles.fetch(config_role_pc_linux)) ; log.log(`Role add ${u.username} Linux`) }
    })
    pc_col.on('remove', async (r, u) => {
        if(r.emoji.id == windows) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pc_windows)) ; log.log(`Role remove ${u.username} Windows`) }
        else if(r.emoji.id == macos) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pc_macos)) ; log.log(`Role remove ${u.username} Macos`) }
        else if(r.emoji.id == linux) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pc_linux)) ; log.log(`Role remove ${u.username} Linux`) }
    })
};