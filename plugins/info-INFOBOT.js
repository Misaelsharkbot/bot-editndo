/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
bear = "Source Code"
ye = `Wa.me/${m.sender.split`@`[0]}`
let esce = `╭━━━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━━━⬣
┃💗 ¡𝐇𝐨𝐥𝐚 ${ye} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐝𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭-𝐌𝐃
┃➥ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐀𝐜𝐭𝐢𝐯𝐨 𝐃𝐮𝐫𝐚𝐧𝐭𝐞 
┃➥ ${uptime}
┃ღ 𝐌𝐨𝐝𝐨: 
┃➥ ${global.opts['self'] ? 'Privado' : 'Publico'}
┃ღ 𝐔𝐬𝐮𝐚𝐫𝐢𝐨(𝐬)* 
┃➥ ${Object.keys(global.db.data.users).length} 
┃ღ 𝐂𝐡𝐚𝐭(𝐬) 𝐁𝐚𝐧𝐞𝐚𝐝𝐨(𝐬)
┃➥ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃ღ 𝐔𝐬𝐮𝐚𝐫𝐢𝐨(𝐬) 𝐁𝐚𝐧𝐞𝐚𝐝𝐨(𝐬)
┃➥ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━━━⬣`/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() },            
           hydratedFooterText: gt,
           hydratedButtons: [{*/
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menus/Menu1.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: esce,
           hydratedFooterText: gt,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙂𝙞𝙩𝙃𝙪𝙗',
               url: "https://github.com/GataNina-Li/GataBot-MD"
              }   
            },
              {
              urlButton: {
               displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
               url: instagram	           
             }
           },
			     {
             quickReplyButton: {
               displayText: '𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙎𝙥𝙚𝙚𝙙',
               id: '.ping',
             }
	   },
             {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪',
               id: '.allmenu',
             }
	   },
             {
             quickReplyButton: {
               displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪',
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

handler.help = ['estado | status']
handler.tags = ['info']
handler.command = /^estado|status|estate|state|stado|stats|botstat(us)?$/i
handler.exp = 4 

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
	
    }
