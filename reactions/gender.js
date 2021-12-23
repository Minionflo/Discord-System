const log                     = require('../log.js')

module.exports = async function(msgs) {
    var server = client.guilds.cache.get(config_server)
    async function filter(r, u) { return true }
    var agender = "922652447653101588"
    var androgynous = "922652447586017280"
    var bigender = "922652447615365182"
    var female = "922654971449720832"
    var genderfluid = "922652447716036608"
    var genderflux = "922652447640522793"
    var gender_questioning = "922652447745392660"
    var male = "922654971357446184"
    var non_binary = "922652447569219676"
    var pangender = "922652447774740530"
    var transgender = "922652447770542160"

    var gender = await msgs.filter(m => m.content.includes('__***Gender***__'))
    gender = gender.first()
    if (gender == undefined || gender.size == 0) {gender = await client.channels.cache.get(config_channel_roles).send(`__***Gender***__`)}
    gender.edit(`__***Gender***__

<:LOL:${agender}> = **Agender**
<:LOL:${androgynous}> = **Androgynous**
<:LOL:${bigender}> = **Bigender**
<:LOL:${female}> = **Female**
<:LOL:${genderfluid}> = **Genderfluid**
<:LOL:${genderflux}> = **Genderflux**
<:LOL:${gender_questioning}> = **Gender Questioning**
<:LOL:${male}> = **Male**
<:LOL:${non_binary}> = **Non Binary**
<:LOL:${pangender}> = **Pangender**
<:LOL:${transgender}> = **Transgender**`)


    await gender.react(agender)
    await gender.react(androgynous)
    await gender.react(bigender)
    await gender.react(female)
    await gender.react(genderfluid)
    await gender.react(genderflux)
    await gender.react(gender_questioning)
    await gender.react(male)
    await gender.react(non_binary)
    await gender.react(pangender)
    await gender.react(transgender)

    const gender_col = gender.createReactionCollector(filter, { dispose: true });
    gender_col.on('collect', async (r, u) => {
        if(r.emoji.id == agender) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_agender)) ; log.log(`Role add Gender ${u.username} Agender`) }
        else if(r.emoji.id == androgynous) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_androgynous)) ; log.log(`Role add Gender ${u.username} Androgynous`) }
        else if(r.emoji.id == bigender) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_bigender)) ; log.log(`Role add Gender ${u.username} Bigender`) }
        else if(r.emoji.id == female) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_female)) ; log.log(`Role add Gender ${u.username} Female`) }
        else if(r.emoji.id == genderfluid) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_genderfluid)) ; log.log(`Role add Gender ${u.username} Genderfluid`) }
        else if(r.emoji.id == genderflux) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_genderflux)) ; log.log(`Role add Gender ${u.username} Genderflux`) }
        else if(r.emoji.id == gender_questioning) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_gender_questioning)) ; log.log(`Role add Gender ${u.username} Gender Questioning`) }
        else if(r.emoji.id == male) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_male)) ; log.log(`Role add Gender ${u.username} Male`) }
        else if(r.emoji.id == non_binary) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_non_binary)) ; log.log(`Role add Gender ${u.username} Non Binary`) }
        else if(r.emoji.id == pangender) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_pangender)) ; log.log(`Role add Gender ${u.username} Pangender`) }
        else if(r.emoji.id == transgender) { await server.member(u).roles.add(await server.roles.fetch(config_role_gender_transgender)) ; log.log(`Role add Gender ${u.username} Transgender`) }
    })
    gender_col.on('remove', async (r, u) => {
        if(r.emoji.id == agender) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_agender)) ; log.log(`Role remove Gender ${u.username} Agender`) }
        else if(r.emoji.id == androgynous) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_androgynous)) ; log.log(`Role remove Gender ${u.username} Androgynous`) }
        else if(r.emoji.id == bigender) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_bigender)) ; log.log(`Role remove Gender ${u.username} Bigender`) }
        else if(r.emoji.id == female) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_female)) ; log.log(`Role remove Gender ${u.username} Female`) }
        else if(r.emoji.id == genderfluid) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_genderfluid)) ; log.log(`Role remove Gender ${u.username} Genderfluid`) }
        else if(r.emoji.id == genderflux) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_genderflux)) ; log.log(`Role remove Gender ${u.username} Genderflux`) }
        else if(r.emoji.id == gender_questioning) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_gender_questioning)) ; log.log(`Role remove Gender ${u.username} Gender Questioning`) }
        else if(r.emoji.id == male) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_male)) ; log.log(`Role remove Gender ${u.username} Male`) }
        else if(r.emoji.id == non_binary) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_non_binary)) ; log.log(`Role remove Gender ${u.username} Non Binary`) }
        else if(r.emoji.id == pangender) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_pangender)) ; log.log(`Role remove Gender ${u.username} Pangender`) }
        else if(r.emoji.id == transgender) { await server.member(u).roles.remove(await server.roles.fetch(config_role_gender_transgender)) ; log.log(`Role remove Gender ${u.username} Transgender`) }
    })
};