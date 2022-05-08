let handler = async(m, { conn, text, usedPrefix, command }) => {
  
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n*Escriba un reporte.*\n*Ejemplo:*\n${usedPrefix + command} *El comando ${usedPrefix}serbot no funciona.*\n\n*Write a report.*\n*Example*\n${usedPrefix + command} *The command${usedPrefix}jadibot it does not work.*`
    if (text.length > 1500) throw '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*El reporte minimo es de 1500 caracteres!*\n*The minimum report must be 1500 characters!*'
    const laporan = `╭━━〔 *REPORTE | REPORT* 〕━━━━⬣\n┃\n┃✿ *Número | Number*\n┃⇢ *Wa.me/${m.sender.split`@`[0]}*\n┃\n┃✿ *Mensaje | Text*\n┃⇢ *${text}*\n┃\n╰━━━━〔 *${wm}* 〕━━━━━━⬣`
  for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '14504976783@s.whatsapp.net'))
    m.reply(laporan, jid)
    //m.reply(laporan, m.sender) // Mwehehehehe
    //m.reply('╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n✔️!')
  m.reply(conn.sendBut(m.chat, `╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n*El reporte ha sido enviado a mí Creadora. Tendrá una respuesta pronto. De ser Falso será Ignorado el reporte.*\n*The report has been sent to my Creator. You will have an answer soon. If false, the report will be ignored.*`, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}
handler.help = ['reporte | bug'].map(v => v + ' *comando con error*')
handler.tags = ['info']
handler.command = /^(bug|report|reports|bugs|request|requests|reportar|reporte|reportes|buggata|gatabug|reportes|informe|informes)$/i
handler.exp = 7
module.exports = handler
