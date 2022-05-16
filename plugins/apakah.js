let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Sí', 'Supongo', 'Supongo', 'No lo creo', 'No', 'De ninguna manera'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
