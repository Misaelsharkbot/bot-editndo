const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `โฐโฑโโฑ *๐๐๐๐๐๐๐ผ๐พ๐๐ฬ๐ | ๐๐๐๐๐๐๐ผ๐๐๐๐* โฑโโฑโฎ\n\nYa estรกs registrado(a).\n*_ยฟQuieres volver a registrarte?_*\n${usedPrefix}unreg *SN|NรMERO DE SERIE*\n\nYou are already registered.\n*_Do you want to re-register?_*\n${usedPrefix}unreg *SN|SERIAL NUMBER*`
  if (!Reg.test(text)) throw `โฐโฑโ ๏ธโฑ *๐ผ๐ฟ๐๐๐๐๐๐๐พ๐๐ผ | ๐๐ผ๐๐๐๐๐* โฑโ ๏ธโฑโฎ\n\nFormato incorrecto\n*Ejemplo:*\n*${usedPrefix}registrar nombre.edad*\n\nIncorrect format\n*Example:*\n*${usedPrefix}daftar name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'โฐโฑโโฑ *๐๐ผ๐๐๐ฬ | ๐๐๐๐๐* โฑโโฑโฎ\n\n*El nombre no puede estar vacรญo.*\n*The name cannot be empty.*'
  if (!age) throw 'โฐโฑโโฑ *๐๐ผ๐๐๐ฬ | ๐๐๐๐๐* โฑโโฑโฎ\n\n*La edad no puede estar vacรญa.*\nAge cannot be empty.'
  age = parseInt(age)
  if (age > 120) throw 'โฐโฑโโฑ *๐๐ผ๐๐๐ฬ | ๐๐๐๐๐* โฑโโฑโฎ\n\n*Mucha edad ๐น*\n*Very old* ๐น'
  if (age < 10) throw 'โฐโฑโโฑ *๐๐ผ๐๐๐ฬ | ๐๐๐๐๐* โฑโโฑโฎ\n\n*Es muy poca edad ๐*\n*It is very young* ๐'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(conn.sendBut(m.chat, `โฐโฑ๐โฑ *๐ฬ๐๐๐๐ | ๐๐๐พ๐พ๐๐๐* โฑ๐โฑโฎ

โญโโโ[ *USUARIO(A) | USER* ]โโโโโฌฃ
โ *Nombre | Name:* ${name}
โ *Edad | Age:* ${age}  
โฐโโโโโโโโโโโโโโโโโโโฌฃ
*Nรบmero de serie | Serial number*
${sn}`, gt , `โ ๐๐ง ๐๐ก ๐๐ฃ๐๐๐๐ค | ๐๐ค ๐ฉ๐ค ๐จ๐ฉ๐๐ง๐ฉ`, '.menu',  m))
}
handler.help = ['registrar | register | reg'].map(v => v + ' *nombre.edad*')
handler.tags = ['xp']
handler.exp = 7

handler.command = /^(registrar|registar|daftar|reg(ister)?)$/i

module.exports = handler
