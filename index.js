const Discord          = require('discord.js')
const { MessageEmbed } = require('discord.js')
const fs               = require('fs')
const reactions_console     = require('./reactions/console.js')
const reactions_gender     = require('./reactions/gender.js')
const reactions_misc     = require('./reactions/misc.js')
const reactions_missing     = require('./reactions/missing.js')
const reactions_pc     = require('./reactions/pc.js')
const reactions_phone     = require('./reactions/phone.js')
const reactions_sexuality     = require('./reactions/sexuality.js')
const reactions_pronouns      = require('./reactions/pronouns.js')
const log                     = require('./log.js')
const g = require("./giveaway.js")

global.client = new Discord.Client()

var config_token                              = process.env.TOKEN
global.config_prefix                          = process.env.PREFIX
global.config_status                          = process.env.STATUS
global.config_statustype                      = process.env.STATUSTYPE
global.config_channel_bot = ["569240941064617985", "565255378745425921", "565102483521667072"]
global.config_channel_log = "922108508797816892"
global.config_channel_welcome = "526379888307863554"
global.config_channel_bye = "565116371625705473"
global.config_channel_rules = "576459385295863839"
global.config_channel_news = "609677269366997014"
global.config_channel_teambotspam = "565255378745425921"
global.config_channel_roles = "572044624500097045"
global.config_channel_giveaway = "572026482680135690"
global.config_channel_dms = "928818990296481872"
global.config_emoji_a = "🇦"
global.config_emoji_b = "🇧"
global.config_emoji_c = "🇨"
global.config_emoji_d = "🇩"
global.config_emoji_e = "🇪"
global.config_emoji_f = "🇫"
global.config_emoji_g = "🇬"
global.config_emoji_h = "🇭"
global.config_emoji_i = "🇮"
global.config_emoji_j = "🇯"
global.config_emoji_k = "🇰"
global.config_emoji_l = "🇱"
global.config_emoji_m = "🇲"
global.config_emoji_n = "🇳"
global.config_emoji_o = "🇴"
global.config_emoji_p = "🇵"
global.config_emoji_q = "🇶"
global.config_emoji_r = "🇷"
global.config_emoji_s = "🇸"
global.config_emoji_t = "🇹"
global.config_emoji_u = "🇺"
global.config_emoji_v = "🇻"
global.config_emoji_w = "🇼"
global.config_emoji_x = "🇽"
global.config_emoji_y = "🇾"
global.config_emoji_z = "🇿"
global.config_emoji_1 = "1️⃣"
global.config_emoji_2 = "2️⃣"
global.config_emoji_3 = "3️⃣"
global.config_emoji_4 = "4️⃣"
global.config_emoji_5 = "5️⃣"
global.config_emoji_6 = "6️⃣"
global.config_emoji_7 = "7️⃣"
global.config_emoji_8 = "8️⃣"
global.config_emoji_9 = "9️⃣"
global.config_role_player = "578328645014388756"
global.config_role_serverteam = "564849684728905737"
global.config_role_gender_agender = "922613619471040574"
global.config_role_gender_androgynous = "922630946870669375"
global.config_role_gender_bigender = "922630006029578240"
global.config_role_gender_demi = "928604094971650070"
global.config_role_gender_female = "922505106916798484"
global.config_role_gender_genderfluid = "922630054008213535"
global.config_role_gender_genderflux = "922630057036513300"
global.config_role_gender_male = "922505065682567168"
global.config_role_gender_non_binary = "922505115238268938"
global.config_role_gender_pangender = "922630058974273617"
global.config_role_gender_transgender = "922630801491906611"
global.config_role_gender_questioning = "922630058177339454"
global.config_role_sexual_asexual = "922577172311466034"
global.config_role_sexual_bisexual = "922505211967307807"
global.config_role_sexual_demisexual = "922577460527259649"
global.config_role_sexual_gay = "922507697654472765"
global.config_role_sexual_greysexual = "922635711943938068"
global.config_role_sexual_heterosexual = "922505205008961579"
global.config_role_sexual_lesbian = "922507692940083221"
global.config_role_sexual_omnisexual = "922635625289637939"
global.config_role_sexual_pansexual = "922505215167561749"
global.config_role_sexual_polysexual = "922630689042620437"
global.config_role_sexual_questioning = "927892631428677662"
global.config_role_pronouns_he = "923276749180133416"
global.config_role_pronouns_she = "923276754737561600"
global.config_role_pronouns_they = "923276757212225556"
global.config_role_pronouns_askMe = "927893449078870076"
global.config_role_pc_windows = "572895406510309406"
global.config_role_pc_macos = "572895794953453609"
global.config_role_pc_linux = "922504121179848756"
global.config_role_phone_android = "572895550735777822"
global.config_role_phone_ios = "572895837273718810"
global.config_role_console_nintendo_switch = "572895683494019072"
global.config_role_console_ps4 = "572895452375285761"
global.config_role_console_xbox_one = "572895762103533592"
global.config_role_misc_news_ping = "662318067874791439"
global.config_role_misc_giveaways_ping = "928770038830338089"
global.config_server = "526379888307863552"

if(process.argv.slice(2) == "test") {
    var secret = fs.readFileSync('secret', 'utf8').split(/\r?\n/)
    secret.forEach(function(line) {
        line = line.split("=")
        var name = line[0]
        var value = line[1]
        str = name+' = '+value;
        eval(str)
    })
}

//boot

client.on('ready', async function() {
    activity()
    setInterval(activity, 60000)
    await boot()
    console.log(`Online`)
})

function activity() {
    client.user.setActivity(config_status, {type: config_statustype})
}

async function boot() {
    await rules()
    await roles()
    await check_files()
}

//Reactions

async function rules() {
    var r_accept = '✅'
    var lastrules = client.channels.cache.get(config_channel_rules).lastMessageID
    var rules = await client.channels.cache.get(config_channel_rules).messages.fetch(lastrules)
    rules.edit(`Rules:

**1:** Don't offend
**2:** No Spam
**3:** No Caps
**4:** No Ads
**5:** No Invites
**6:** No offensive profile pictures
**7:** No offensive names
**8:** No Racisim
**9:** No NSFW exect in NSFW channels
**10:** Use english

Please set your roles in the ${client.channels.cache.get(config_channel_roles).toString()} channel.

Please react with :white_check_mark: if you accept the rules`)
    await rules.react(r_accept)
    async function filter(r, u) {
        return true
    }
    const collector = rules.createReactionCollector(filter, { dispose: true });
    collector.on('collect', async (r, u) => {
        if(r.emoji.name == r_accept) { 
            client.guilds.cache.get(config_server).member(u).roles.add(config_role_player)
            client.guilds.cache.get(config_server).member(u).roles.add("922613612336529478")
            client.guilds.cache.get(config_server).member(u).roles.add("922613613179572225")
            client.guilds.cache.get(config_server).member(u).roles.add("922631045864628274")
            client.guilds.cache.get(config_server).member(u).roles.add("922631050797121606")
            client.guilds.cache.get(config_server).member(u).roles.add("922631055234707577")
            client.guilds.cache.get(config_server).member(u).roles.add("922631975775395840")
            client.guilds.cache.get(config_server).member(u).roles.add("923276873327333437")
            log.log(`${u.username} accepted the rules`) }
    })
    collector.on('remove', async (r, u) => {
        if(r.emoji.name == r_accept) { client.guilds.cache.get(config_server).member(u).roles.remove(config_role_player); log.log(`${u.username} unaccepted the rules`) }
    })
}

async function roles() {
    var msgs = await client.channels.cache.get(config_channel_roles).messages.fetch()
    
    reactions_gender(msgs)
    reactions_pronouns(msgs)
    reactions_sexuality(msgs)
    reactions_pc(msgs)
    reactions_phone(msgs)
    reactions_console(msgs)
    reactions_misc(msgs)
    reactions_missing(msgs)
}

function check_files() {
    if(fs.existsSync("save") != true) { fs.mkdirSync("save") }
    if(fs.existsSync("save/id") != true) { fs.writeFileSync("save/id", "0", 'utf-8') }
}

//Message

var cmdmap = {
    ping: cmd_ping,
    news: cmd_news,
    ticket: cmd_ticket,
    close: cmd_close,
    clear: cmd_clear,
    g_start: cmd_g_start,
    reply: cmd_reply
}

function cmd_ping(msg, args) {
    if(config_channel_bot.includes(msg.channel.id) != true) { log.error(`${msg.author.tag} used the wrong channel`); return }
    var ping = Date.now() - msg.createdTimestamp + " ms"
    msg.channel.send(ping)
    log.log(`${msg.author.username} used the ping command`)
}

function cmd_news(msg, args) {
    if(config_channel_teambotspam != msg.channel.id) { log.error(`${msg.author.tag} used the wrong channel`); return }
    var emb = new MessageEmbed()
        .setTitle('News')
        .setColor('FAA81A')
        .setDescription(args.join(" "))
        .setTimestamp()
    client.channels.cache.get(config_channel_news).send("<@&" + config_role_misc_news_ping + ">", emb).then(p => { p.crosspost(); })
    log.log(`${msg.author.username} posted the news: ${args.join(" ")}`)
}

async function cmd_ticket(msg, args) {
    var id = parseInt(fs.readFileSync("./save/id", 'utf-8'))
    var server = await client.guilds.cache.get(config_server)
    var cat = await server.channels.cache.get("922895994541207562")
    var ticket = await server.channels.create(id + 1, { type: 'text' , parent: cat })
    ticket.overwritePermissions([{
        id: msg.author.id,
        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
    },
    {
        id: config_role_serverteam,
        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
    }])
    ticket.send(`<@&${config_role_serverteam}>`)
    ticket.send(`<@!${msg.author.id}> Please write your question in this channel.`)
    var newid = id + 1
    fs.writeFileSync("./save/id", newid.toString(), 'utf-8')
}

async function cmd_close(msg, args) {
    var id = parseInt(fs.readFileSync("./save/id", 'utf-8'))
    var perms_remove
    if(msg.channel.name <= id) {
        msg.channel.permissionOverwrites.each(function(V, K, C) {
            if(V.type == "member") {
                perms_remove = V.id
            }
        })
        msg.channel.overwritePermissions([{
            id: perms_remove,
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
        },
        {
            id: config_role_serverteam,
            deny: ['SEND_MESSAGES', 'ATTACH_FILES', 'ADD_REACTIONS'],
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
        }])
    }
}

async function cmd_clear(msg, args) {
    if(msg.member.roles.cache.has(config_role_serverteam) == false) {log.error(`${msg.author.tag} tried to use !clear`); return false}
    msg.channel.bulkDelete(args[0], true)
        .catch(err => {
            log.error(err)
        })
    log.log(`${msg.author.username} cleared ${args[0]} messages in ${msg.channel.toString()}`)
}

async function cmd_g_start(msg, args) {
    if(config_channel_teambotspam != msg.channel.id) { log.error(`${msg.author.tag} used the wrong channel`); return }
    g.start(msg, args)
}

async function cmd_reply(msg, args) {
    if(config_channel_dms != msg.channel.id) { log.error(`${msg.author.tag} used the wrong channel`); return }
    var argss = args
    var user = argss[0]
    argss.shift()
    var dm_channel = client.users.cache.get(user)
    dm_channel.send(argss.join(" "))
}

client.on('message', (msg) => {
        if(msg.author.id == client.user.id) {return false}
        if (msg.content.startsWith(config_prefix) && msg.channel.type != "dm") {
            var invoke = msg.content.split(' ')[0].substr(config_prefix.length),
                args   = msg.content.split(' ').slice(1)
            if (invoke in cmdmap) {
                if (cmdmap[invoke](msg, args) == false) {
                    console.log("ERROR")
                }
            }
        } else if(msg.channel.type == "dm") {
            var emb = new MessageEmbed()
                .setTitle(msg.content)
                .setTimestamp()
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setFooter(msg.author.id)
            client.channels.cache.get(config_channel_dms).send(emb)
        }
})

//Join

client.on("guildMemberAdd", (member) => {
    client.channels.cache.get(config_channel_welcome).send(`${member} joined Minionflo.net`)
    log.log(`${member} joined Minionflo.net`)
})

//Leave

client.on("guildMemberRemove", (member) => {
    client.channels.cache.get(config_channel_bye).send(`${member} left Minionflo.net`)
    log.log(`${member} left Minionflo.net`)
})

client.login(config_token)
