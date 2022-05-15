let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
𝐬𝐢 𝐭𝐨𝐝𝐚𝐯𝐢𝐚 𝐞𝐬𝐭𝐚 𝐛𝐨𝐫𝐫𝐨𝐬𝐨, 𝐬𝐢𝐠𝐧𝐢𝐟𝐢𝐜𝐚 𝐪𝐮𝐞 𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐞𝐬𝐭𝐚 𝐛𝐨𝐫𝐫𝐨𝐬𝐨 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞
𝐎 𝐩𝐨𝐝𝐫í𝐚 𝐬𝐞𝐫 𝐮𝐧 𝐟𝐚𝐜𝐭𝐨𝐫 *MUKA*`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i


module.exports = handler
