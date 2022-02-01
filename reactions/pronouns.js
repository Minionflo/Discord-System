const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }

    var pronouns = await msgs.filter(m => m.content.includes('__***Pronouns***__'))
    pronouns = pronouns.first()
    if (pronouns == undefined || pronouns.size == 0) {pronouns = await client.channels.cache.get(config_channel_roles).send(`__***Pronouns***__`)}
    pronouns.edit(`__***Pronouns***__

${config_emoji_a} = **he/him**
${config_emoji_b} = **she/her**
${config_emoji_c} = **they/them**
${config_emoji_d} = **Ask me**`)


    await pronouns.react(config_emoji_a)
    await pronouns.react(config_emoji_b)
    await pronouns.react(config_emoji_c)
    await pronouns.react(config_emoji_d)


    const pronouns_col = pronouns.createReactionCollector(filter, { dispose: true });
    pronouns_col.on('collect', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_he)) ; log.log(`Role add ${u.username} he`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_she)) ; log.log(`Role add ${u.username} she`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_they)) ; log.log(`Role add ${u.username} they`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_askme)) ; log.log(`Role add ${u.username} Ask me`) }
    })
    pronouns_col.on('remove', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_he)) ; log.log(`Role remove ${u.username} he`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_she)) ; log.log(`Role remove ${u.username} she`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_they)) ; log.log(`Role remove ${u.username} they`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_askme)) ; log.log(`Role remove ${u.username} Ask me`) }
    })
};