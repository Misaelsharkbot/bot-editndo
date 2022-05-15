let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`𝐬𝐞 𝐮𝐧𝐢𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨 ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
