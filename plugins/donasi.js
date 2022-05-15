const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃ ➤ 𝙲𝙻𝙰𝚅𝙴: * 
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: * 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: * 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: *  
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: *
*┃*
*┃ No se pide dinero solo numeros*
*┃ para whatsapp par hacer mas bots*
*┃ es claro que sera reconpesado*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ðŸ“instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: '𝐕𝐨𝐥𝐯𝐞𝐫 𝐚𝐥 𝐦𝐞𝐧𝐮',
               id: '.menu',
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
handler.help = ['donar']
handler.tags = ['main']
handler.command = /^(donar|donate)$/i

module.exports = handler
