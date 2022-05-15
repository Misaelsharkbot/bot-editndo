const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': '𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋',
  'advanced': '𝐀𝐕𝐀𝐍𝐙𝐀𝐃𝐎',
  'rpg': '𝐑𝐏𝐆',
  'anime': '𝐀𝐍𝐈𝐌𝐄',
  'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
  'downloader': '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒',
  'xp': '𝐍𝐈𝐕𝐄𝐋 & 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀',
  'fun': '𝐅𝐔𝐍',
  'game': '𝐉𝐔𝐄𝐆𝐎𝐒',
  'github': '𝐆𝐈𝐓𝐇𝐔𝐁',
  'group': '𝐆𝐑𝐔𝐏𝐎',
  'image': '𝐈𝐌𝐀𝐆𝐄𝐍',
  'info': '𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍',
  'absen': '𝐀𝐔𝐒𝐄𝐍𝐂𝐈𝐀',
  'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
  'kerang': '𝐁𝐎𝐋𝐀 𝐌𝐀𝐆𝐈𝐂𝐀',
  'maker': '𝐅𝐀𝐁𝐑𝐈𝐂𝐀𝐑',
  'owner': '𝐎𝐖𝐍𝐄𝐑',
  'quotes' : '*MENU QUOTES*',
  'stalk': '*MENU STALK*',
  'tools': '*MENU TOOLS*',
}
const defaultMenu = {
  before: `
「  𝐆𝐀𝐓𝐀 ┃ 𝐁𝐎𝐓  」
☂︎ 💻 𝐋𝐈𝐁: Baileys-MD
☂︎ *${Object.keys(global.db.data.users).length}* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎
☂︎ 📈 𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎: %uptime
☂︎ ✅ 𝐌𝐎𝐃𝐎: ${global.opts['self'] ? 'Privado' : 'publico'}
☂︎ 📊 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒: %rtotalreg dari %totalreg
☂︎ ❌ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* 𝐆𝐑𝐔𝐏𝐎𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒
☂︎ ❌ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒

⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Diamantes
▣────────────⬣
%readmore`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: '│ ○ %cmd %islimit %isPremium',
  footer: '▣────────────⬣\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    /* const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./src/welcome.jpg') },
           hydratedFooterText: `🅛=limit 🅟=premium`,
           hydratedButtons: [{*/
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menus/Menuvid3.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: `🅛=limit 🅟=premium`,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍Instagram',
               url: instagram
             }

           },
             {
             urlButton: {
               displayText: 'Owner',
               PhoneNumber: 'https://bit.ly/3FWls1N'
             }

           },
           {
             quickReplyButton: {
               displayText: 'Perfil',
               id: '.profile',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
