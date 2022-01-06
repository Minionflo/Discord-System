const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var he = "923223708057895022";
    var she = "923223707730731029"
    var they = "923223708183691304"
    var askMe = "927891808132952114"

    var pronouns = await msgs.filter(m => m.content.includes('__***Pronouns***__'))
    pronouns = pronouns.first()
    if (pronouns == undefined || pronouns.size == 0) {pronouns = await client.channels.cache.get(config_channel_roles).send(`__***Pronouns***__`)}
    pronouns.edit(`__***Pronouns***__

<:LOL:${he}> = **he/him**
<:LOL:${she}> = **she/her**
<:LOL:${they}> = **they/them**
<:LOL:${askMe}> = **Ask me**`)


    await pronouns.react(he)
    await pronouns.react(she)
    await pronouns.react(they)
    await pronouns.react(askMe)


    const pronouns_col = pronouns.createReactionCollector(filter, { dispose: true });
    pronouns_col.on('collect', async (r, u) => {
        if(r.emoji.id == he) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_he)) ; log.log(`Role add ${u.username} he`) }
        else if(r.emoji.id == she) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_she)) ; log.log(`Role add ${u.username} she`) }
        else if(r.emoji.id == they) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_they)) ; log.log(`Role add ${u.username} they`) }
        else if(r.emoji.id == askMe) { await server.member(u).roles.add(await server.roles.fetch(config_role_pronouns_askme)) ; log.log(`Role add ${u.username} Ask me`) }
    })
    pronouns_col.on('remove', async (r, u) => {
        if(r.emoji.id == he) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_he)) ; log.log(`Role remove ${u.username} he`) }
        else if(r.emoji.id == she) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_she)) ; log.log(`Role remove ${u.username} she`) }
        else if(r.emoji.id == they) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_they)) ; log.log(`Role remove ${u.username} they`) }
        else if(r.emoji.id == askMe) { await server.member(u).roles.remove(await server.roles.fetch(config_role_pronouns_askme)) ; log.log(`Role remove ${u.username} Ask me`) }
    })
};