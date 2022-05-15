function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Elyas Gantwng;;;FN:Elyas Ganteng\nORG:Elyas Ganteng;\nTEL;type=CELL;type=VOICE;waid=6285643354073:+62 856-4335-4073\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '14509544207', 'Gata Dios', m) 
conn.sendContact(m.chat, '593993684821', 'Oficial GataBot', m)
m.reply(conn.sendBut(m.chat, `🧡 *Eso son los contactos para ti*\n💜 *That's the contacts for you*`, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}
handler.help = ['creador | owner']
handler.tags = ['info']

handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

module.exports = handler
