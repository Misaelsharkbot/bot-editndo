let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

m.reply(conn.sendBut(m.chat, `β­βγ ππππππ πΏπ ππππΎππΎππΜπ | πππππππ γββ¬£
βπ  *VersiΓ³n de GataBot-MD*
ββΊ ${vs}
βββββββββββββββββββββ
β *Activa durante:*   ${uptime}
β *Active during:*    ${uptime}
β°ββββββββββββββββββββββ¬£`, gt , `β ππ§ ππ‘ ππ£ππππ€ | ππ€ π©π€ π¨π©ππ§π©`, '.menu',  m))
}
handler.help = ['ejecucion | runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime|ejecucion|ejecuciΓ³n|ejecucciΓ³n|ejecuccion|ejecusion|runtimes|uptimes)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
