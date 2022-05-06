
let handler = async (m, { conn }) => {
    let gt = global.gt
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
╭━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━⬣
├◌ *Activo Durante | Active During* 
${uptime}
├◌ *Modo | Mode:* 
${global.opts['self'] ? 'Self' : 'publik'}
├◌ *Usuario(s) | Users* 
${Object.keys(global.db.data.users).length} 
├◌ *Chat(s) Prohibido(s) | Forbidden Chats*
${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
├◌ *Usuario(s) Prohibido(s) | Prohibited Users*
${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━⬣
    `.trim()
conn.sendHydrated(m.chat, str, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
conn.reply(str)
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
