const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var asexual = "922637606871781417"
    var bisexual = "922637606674640916"
    var demisexual = "922637606704001054"
    var gay = "922637606775304294"
    var greysexual = "922637607010189312"
    var heterosexual = "922637606880153661"
    var lesbian = "922637606993412116"
    var omnisexual = "922637606808858644"
    var pansexual = "922637606813065216"
    var polysexual = "922637606825635911"

    var sexual = await msgs.filter(m => m.content.includes('__***Sexuality***__'))
    sexual = sexual.first()
    if (sexual == undefined || sexual.size == 0) {sexual = await client.channels.cache.get(config_channel_roles).send(`__***Sexuality***__`)}
    sexual.edit(`__***Sexuality***__

<:LOL:${asexual}> = **Aromantic**
<:LOL:${bisexual}> = **Biromantic**
<:LOL:${demisexual}> = **Demiromantic**
<:LOL:${greysexual}> = **Greysexual**
<:LOL:${gay}> = **Homoromantic**
<:LOL:${heterosexual}> = **Heterosexual**
<:LOL:${omnisexual}> = **Omnisexual**
<:LOL:${pansexual}> = **Pansexual**
<:LOL:${polysexual}> = **Polysexual**`)


    await sexual.react(asexual)
    await sexual.react(bisexual)
    await sexual.react(demisexual)
    await sexual.react(gay)
    await sexual.react(greysexual)
    await sexual.react(heterosexual)
    await sexual.react(lesbian)
    await sexual.react(omnisexual)
    await sexual.react(pansexual)
    await sexual.react(polysexual)

    const sexual_col = sexual.createReactionCollector(filter, { dispose: true });
    sexual_col.on('collect', async (r, u) => {
        if(r.emoji.id == asexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_asexual)) ; log.log(`Role add sexual ${u.username} asexual`) }
        else if(r.emoji.id == bisexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_bisexual)) ; log.log(`Role add sexual ${u.username} bisexual`) }
        else if(r.emoji.id == demisexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_demisexual)) ; log.log(`Role add sexual ${u.username} demisexual`) }
        else if(r.emoji.id == gay) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_gay)) ; log.log(`Role add sexual ${u.username} gay`) }
        else if(r.emoji.id == greysexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_greysexual)) ; log.log(`Role add sexual ${u.username} greysexual`) }
        else if(r.emoji.id == heterosexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_heterosexual)) ; log.log(`Role add sexual ${u.username} heterosexual`) }
        else if(r.emoji.id == lesbian) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_lesbian)) ; log.log(`Role add sexual ${u.username} sexual Questioning`) }
        else if(r.emoji.id == omnisexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_omnisexual)) ; log.log(`Role add sexual ${u.username} omnisexual`) }
        else if(r.emoji.id == pansexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_pansexual)) ; log.log(`Role add sexual ${u.username} pansexual`) }
        else if(r.emoji.id == polysexual) { await server.member(u).roles.add(await server.roles.fetch(config_role_sexual_polysexual)) ; log.log(`Role add sexual ${u.username} polysexual`) }
    })
    sexual_col.on('remove', async (r, u) => {
        if(r.emoji.id == asexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_asexual)) ; log.log(`Role remove sexual ${u.username} asexual`) }
        else if(r.emoji.id == bisexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_bisexual)) ; log.log(`Role remove sexual ${u.username} bisexual`) }
        else if(r.emoji.id == demisexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_demisexual)) ; log.log(`Role remove sexual ${u.username} demisexual`) }
        else if(r.emoji.id == gay) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_gay)) ; log.log(`Role remove sexual ${u.username} gay`) }
        else if(r.emoji.id == greysexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_greysexual)) ; log.log(`Role remove sexual ${u.username} greysexual`) }
        else if(r.emoji.id == heterosexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_heterosexual)) ; log.log(`Role remove sexual ${u.username} heterosexual`) }
        else if(r.emoji.id == lesbian) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_lesbian)) ; log.log(`Role remove sexual ${u.username} sexual Questioning`) }
        else if(r.emoji.id == omnisexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_omnisexual)) ; log.log(`Role remove sexual ${u.username} omnisexual`) }
        else if(r.emoji.id == pansexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_pansexual)) ; log.log(`Role remove sexual ${u.username} pansexual`) }
        else if(r.emoji.id == polysexual) { await server.member(u).roles.remove(await server.roles.fetch(config_role_sexual_polysexual)) ; log.log(`Role remove sexual ${u.username} polysexual`) }
    })
};