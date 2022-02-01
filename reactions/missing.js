const log                     = require('../log.js')

module.exports = async function(msgs) {
    var missing = await msgs.filter(m => m.content.includes('For others please open a ticket so we can add it'))
    missing = missing.first()
    if (missing == undefined || missing.size == 0) {missing = await client.channels.cache.get(config_channel_roles).send(`For others please open a ticket so we can add it`)}
    missing.edit(`** **
For others please open a ticket so we can add it`)
};