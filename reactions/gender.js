const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }

    var gender = await msgs.filter(m => m.content.includes('__***Gender***__'))
    gender = gender.first()
    if (gender == undefined || gender.size == 0) {gender = await client.channels.cache.get(config_channel_roles).send(`__***Gender***__`)}
    gender.edit(`__***Gender***__

${config_emoji_a} = **Agender**
${config_emoji_b} = **Androgynous**
${config_emoji_c} = **Bigender**
${config_emoji_d} = **Demi***
${config_emoji_e} = **Female/Girl**
${config_emoji_f} = **Genderfluid**
${config_emoji_g} = **Genderflux**
${config_emoji_h} = **Male/Boy**
${config_emoji_i} = **Non Binary**
${config_emoji_j} = **Pangender**
${config_emoji_k} = **Transgender**
${config_emoji_l} = **Questioning**`)


    await gender.react(config_emoji_a)
    await gender.react(config_emoji_b)
    await gender.react(config_emoji_c)
    await gender.react(config_emoji_d)
    await gender.react(config_emoji_e)
    await gender.react(config_emoji_f)
    await gender.react(config_emoji_g)
    await gender.react(config_emoji_h)
    await gender.react(config_emoji_i)
    await gender.react(config_emoji_j)
    await gender.react(config_emoji_k)
    await gender.react(config_emoji_l)

    const gender_col = gender.createReactionCollector(filter, { dispose: true });
    gender_col.on('collect', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_agender)) ; log.log(`Role add Gender ${u.username} Agender`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_androgynous)) ; log.log(`Role add Gender ${u.username} Androgynous`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_bigender)) ; log.log(`Role add Gender ${u.username} Bigender`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_demi)) ; log.log(`Role add Gender ${u.username} Demi*`) }
        else if(r.emoji.name == config_emoji_e) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_female)) ; log.log(`Role add Gender ${u.username} Female`) }
        else if(r.emoji.name == config_emoji_f) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_genderfluid)) ; log.log(`Role add Gender ${u.username} Genderfluid`) }
        else if(r.emoji.name == config_emoji_g) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_genderflux)) ; log.log(`Role add Gender ${u.username} Genderflux`) }
        else if(r.emoji.name == config_emoji_h) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_male)) ; log.log(`Role add Gender ${u.username} Male`) }
        else if(r.emoji.name == config_emoji_i) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_non_binary)) ; log.log(`Role add Gender ${u.username} Non Binary`) }
        else if(r.emoji.name == config_emoji_j) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_pangender)) ; log.log(`Role add Gender ${u.username} Pangender`) }
        else if(r.emoji.name == config_emoji_k) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_transgender)) ; log.log(`Role add Gender ${u.username} Transgender`) }
        else if(r.emoji.name == config_emoji_l) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_questioning)) ; log.log(`Role add Gender ${u.username} Questioning`) }
    })
    gender_col.on('remove', async (r, u) => {
        if(r.emoji.name == config_emoji_a) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_agender)) ; log.log(`Role remove Gender ${u.username} Agender`) }
        else if(r.emoji.name == config_emoji_b) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_androgynous)) ; log.log(`Role remove Gender ${u.username} Androgynous`) }
        else if(r.emoji.name == config_emoji_c) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_bigender)) ; log.log(`Role remove Gender ${u.username} Bigender`) }
        else if(r.emoji.name == config_emoji_d) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_demi)) ; log.log(`Role remove Gender ${u.username} Demi*`) }
        else if(r.emoji.name == config_emoji_e) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_female)) ; log.log(`Role remove Gender ${u.username} Female`) }
        else if(r.emoji.name == config_emoji_f) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_genderfluid)) ; log.log(`Role remove Gender ${u.username} Genderfluid`) }
        else if(r.emoji.name == config_emoji_g) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_genderflux)) ; log.log(`Role remove Gender ${u.username} Genderflux`) }
        else if(r.emoji.name == config_emoji_h) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_male)) ; log.log(`Role remove Gender ${u.username} Male`) }
        else if(r.emoji.name == config_emoji_i) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_non_binary)) ; log.log(`Role remove Gender ${u.username} Non Binary`) }
        else if(r.emoji.name == config_emoji_j) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_pangender)) ; log.log(`Role remove Gender ${u.username} Pangender`) }
        else if(r.emoji.name == config_emoji_k) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_transgender)) ; log.log(`Role remove Gender ${u.username} Transgender`) }
        else if(r.emoji.name == config_emoji_l) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_questioning)) ; log.log(`Role remove Gender ${u.username} Questioning`) }
    })
};