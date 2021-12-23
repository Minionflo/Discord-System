const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var misc_ping = "662440850802081792"

    var misc = await msgs.filter(m => m.content.includes(`__***Miscellaneous***__`))
    misc = misc.first()
    if(misc == undefined || misc.size == 0) {misc = await client.channels.cache.get(config_channel_roles).send(`__***Miscellaneous***__`)}
    misc.edit(`__***Miscellaneous***__

<:ping:${misc_ping}> = **News Ping**`)

    await misc.react(misc_ping)

    const misc_col = await misc.createReactionCollector(filter, { dispose: true });
    misc_col.on('collect', async (r, u) => {
        if(r.emoji.id == misc_ping) {  await server.member(u).roles.add(await server.roles.fetch(config_role_misc_ping)) ; log.log(`Role add Misc ${u.username} Ping`) }
    })
    misc_col.on('remove', async (r, u) => {
        if(r.emoji.id == misc_ping) { await server.member(u).roles.remove(await server.roles.fetch(config_role_misc_ping)) ; log.log(`Role remove Misc ${u.username} Ping`) }
    })
}