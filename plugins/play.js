const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const { servers, yta, ytv } = require('../lib/y2mate')
let fs = require('fs')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇* ⊱❗️⊱╮\n\n*Ejemplo*\n*${usedPrefix + command}* Billie Eilish - Bellyache`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '╰⊱❌⊱ *𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*Contenido no encontrado*'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`╰⊱❌⊱ *𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*Servidor* !${server} ${servers.length >= i + 1 ? '' : '\n*Vuelva a intentar o informe el error.*'}`)
    }
  }
  if (yt === false) throw '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*Todos los servidores fallaron.*\n*All servers failed.*'
  if (yt2 === false) throw '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*Todos los servidores fallaron.*\n*All servers failed.*'
  let { dl_link, thumb, title, filesize, filesizeF, } = yt
let anu =  `╭━━━━━━━━━━━━━━━━⬣
┃ 💖  *Título* 
┃ ➲ ${title}
┃ 🔊 *Tamaño en Audio* 
┃ ➲ ${filesizeF}
┃ 🎞 *Tamaño en vídeo* 
┃ ➲ ${yt2.filesizeF}
┃ 💻 *Servidor* 
┃ ➲ ${usedServer}
┃ 🎁 *Enlace* 
┃ ➲ ${vid.url}
╰━━━━━━━━━━━━━━━━⬣ 
`
/* *Título | Title* 
${title}
*Tamaño del Audio | Audio Size* 
${filesizeF}
*Tamaño del vídeo | Video Size* 
${yt2.filesizeF}
*Servidor | Server* 
${usedServer}
*Enlace | Link* 
${vid.url}*/
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await (await fetch(thumb)).buffer() }, 
           hydratedFooterText: `si el video no coincide escriba 
.yta enlace de YouTube para descargar el audio y escriba 
.ytv enlace YouTube para descargar video`,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
               url: instagram
//aqui

             }

           },
               {
             quickReplyButton: {
               displayText: '𝙑𝙞𝙙𝙚𝙤 360𝙥',
               id: `.ytmp4 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: '𝙑𝙞𝙙𝙚𝙤 720𝙥',
               id: `.ytv720 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: '𝘼𝙪𝙙𝙞𝙤',
               id: `.ytmp3 ${vid.url}`,
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
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 5

module.exports = handler

