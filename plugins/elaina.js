/*let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elaina', {}, 'apikey'), 'Nih', wm, 'NEXT', 'elaina', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler
*/
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/elaina')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gweh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler
