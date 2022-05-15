/*
* THX TO
* Allah SWT
* Ortu
* RESTU
* RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys')

/*Count price*/
let sword = 9800
let pickaxe = 8927
let armor = 17290
let pancing = 9278

let Esword = 18290
let Epickaxe = 18230
let Earmor = 23847

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].pancing = global.db.data.users[m.sender].pancing || 0
  let botol = global.botwm

  let caption = `
┌───┬───┬───┐
│        │        │        │
├───┼───┼───┤
│        │        │        │
├───┼───┼───┤
│        │        │        │
└───┴───┴───┘
  
  
▧ Pico ⛏️
▧ Espada ⚔️
▧ Caña de pescar 🎣

*❏ RECETA*
▧ Pico ⛏️
〉 10 madera
〉 5 Hierro
〉 20 cuerdas

▧ Espada ⚔️
〉 10 Madera
〉 15 Hierro

▧ Caña de pescar 🎣
〉 10 Madera
〉 2 Hierro
〉 20 Cuerda
`

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
            if(user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`¡No hay suficientes cosas!\nPara hacer un pico. necesitas : \n10 madera🪵 \n5 Hierro⛓\n20 Cuerda🕸️`)
            global.db.data.users[m.sender].kayu -= 10
            global.db.data.users[m.sender].iron -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            m.reply("Éxito en la fabricación de 1 pico 🔨")
            break
          case 'sword':
            if(user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`¡No hay suficientes artículos!\nPara hacer una espada. necesitas : 10 madera🪵 5 Hierro⛓️ y 20 Cuerda🕸️`)
            global.db.data.users[m.sender].kayu -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            m.reply("Hizo con éxito 1 espada 🗡️")
            break
          case 'pancing':
            if(user.kayu < 20 || user.iron < 5 || user.string < 20) return m.reply(`¡No hay suficientes cosas!\nPara hacer una caña de pescar. necesitas :\n10 madera🪵\n5 Hierro⛓\n20 Cuerda🕸️`)
            global.db.data.users[m.sender].kayu -= 10
            global.db.data.users[m.sender].iron -= 2
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pancing += 1
            m.reply("Éxito en la fabricación de 1 caña de pescar 🎣")
            break

          default:
            return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `*❏ MESA DE ARTESANÍA*`.trim(),
          "description": caption.trim(),
          "footerText": '',
          "buttonText": 'CRAFT',
          "listType": "SELECCIÓNA",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'PICO ⛏️',
                                         "description": 'Crafting a Pickaxe',
                                         "rowId": '.craft pickaxe'
                                    }, {
                                         "title": 'ESPADA ⚔️',
                                         "description": 'Crafting a Sword',
                                         "rowId": ".craft sword"
                                         }, {
                                         "title": 'CAÑA DE PESCAR 🎣',
                                         "description": 'Crafting a Fishingrod',
                                         "rowId": ".craft fishingrod"
                                    
                       }],
                    "title": '▧ LISTA DE ARTESANÍA'
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {}), {waitForAck: true})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, `KannaBot`, `⋮☰ Back`, `.allmenu`, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i

module.exports = handler
