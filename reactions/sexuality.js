const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }

    var sexual = await msgs.filter(m => m.content.includes('__***Sexuality***__'))
    sexual = sexual.first()
    if (sexual == undefined || sexual.size == 0) {sexual = await client.channels.cache.get(config_channel_roles).send(`__***Sexuality***__`)}
    sexual.edit(`__***Sexuality***__

${config_emoji_a} = **Asexual**
${config_emoji_b} = **Bisexual**
${config_emoji_c} = **Demisexual**
${config_emoji_d} = **Gay**
${config_emoji_e} = **Greysexual**
${config_emoji_f} = **Heterosexual**
${config_emoji_g} = **Lesbian**
${config_emoji_h} = **Omnisexual**
${config_emoji_i} = **Pansexual**
${config_emoji_j} = **Polysexual**
${config_emoji_k} = **Questioning**`)


    await sexual.react(config_emoji_a)
    await sexual.react(config_emoji_b)
    await sexual.react(config_emoji_c)
    await sexual.react(config_emoji_d)
    await sexual.react(config_emoji_e)
    await sexual.react(config_emoji_f)
    await sexual.react(config_emoji_g)
    await sexual.react(config_emoji_h)
    await sexual.react(config_emoji_i)
    await sexual.react(config_emoji_j)
    await sexual.react(config_emoji_k)

    const sexual_col = sexual.createReactionCollector(filter, { dispose: true });
    sexual_col.on('collect', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_asexual)) ; log.log(`Role add sexual ${u.username} asexual`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_bisexual)) ; log.log(`Role add sexual ${u.username} bisexual`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_demisexual)) ; log.log(`Role add sexual ${u.username} demisexual`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_gay)) ; log.log(`Role add sexual ${u.username} gay`) }
        else if(r.emoji.name == config_emoji_e) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_greysexual)) ; log.log(`Role add sexual ${u.username} greysexual`) }
        else if(r.emoji.name == config_emoji_f) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_heterosexual)) ; log.log(`Role add sexual ${u.username} heterosexual`) }
        else if(r.emoji.name == config_emoji_g) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_lesbian)) ; log.log(`Role add sexual ${u.username} sexual Questioning`) }
        else if(r.emoji.name == config_emoji_h) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_omnisexual)) ; log.log(`Role add sexual ${u.username} omnisexual`) }
        else if(r.emoji.name == config_emoji_i) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_pansexual)) ; log.log(`Role add sexual ${u.username} pansexual`) }
        else if(r.emoji.name == config_emoji_j) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_polysexual)) ; log.log(`Role add sexual ${u.username} polysexual`) }
        else if(r.emoji.name == config_emoji_k) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_questioning)) ; log.log(`Role add sexual ${u.username} questioning`) }
    })
    sexual_col.on('remove', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_asexual)) ; log.log(`Role remove sexual ${u.username} asexual`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_bisexual)) ; log.log(`Role remove sexual ${u.username} bisexual`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_demisexual)) ; log.log(`Role remove sexual ${u.username} demisexual`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_gay)) ; log.log(`Role remove sexual ${u.username} gay`) }
        else if(r.emoji.name == config_emoji_e) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_greysexual)) ; log.log(`Role remove sexual ${u.username} greysexual`) }
        else if(r.emoji.name == config_emoji_f) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_heterosexual)) ; log.log(`Role remove sexual ${u.username} heterosexual`) }
        else if(r.emoji.name == config_emoji_g) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_lesbian)) ; log.log(`Role remove sexual ${u.username} sexual Questioning`) }
        else if(r.emoji.name == config_emoji_h) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_omnisexual)) ; log.log(`Role remove sexual ${u.username} omnisexual`) }
        else if(r.emoji.name == config_emoji_i) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_pansexual)) ; log.log(`Role remove sexual ${u.username} pansexual`) }
        else if(r.emoji.name == config_emoji_j) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_polysexual)) ; log.log(`Role remove sexual ${u.username} polysexual`) }
        else if(r.emoji.name == config_emoji_k) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_questioning)) ; log.log(`Role add sexual ${u.username} questioning`) }
        else console.log(r.emoji.name)
    })
};