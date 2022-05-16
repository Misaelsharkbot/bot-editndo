let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `

✧───────[ *PROFILE* ]───────✧
📇 • 𝑵𝒐𝒎𝒃𝒓𝒆: ${username} ${registered ? '(' + name + ') ': ''}
📧 • 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂: @${who.replace(/@.+/, '')}
📞 • 𝑵𝒖𝒎𝒆𝒓𝒐: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • 𝑳𝒊𝒏𝒌: https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Edad:* ' + age : ''}

🌟 • 𝑷𝒓𝒆𝒎𝒊𝒖𝒎: ${premium ? "✅" :"❌"}
📑 • 𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐: ${registered ? '✅': '❌'}
⛔ • 𝑩𝒂𝒏𝒆𝒂𝒅𝒐: ❌

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, await(await require('node-fetch')(pp)).buffer(), pp.jpg, str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil [@user]']
handler.tags = ['tools']
handler.command = /^perfil|profile$/i
module.exports = handler
