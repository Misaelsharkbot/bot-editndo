let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa Yang *${command.replace('how', '').toUpperCase()}*` 
  conn.reply(m.chat, `
  β π΄π¬π«π°π«πΆπΉ β
  
*${text}* es *${Math.floor(Math.random() * 101)}*% ${command.replace('', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
