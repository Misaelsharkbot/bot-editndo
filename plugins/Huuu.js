let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/f7469d1d38d34c4599d61.png",//patrick huu
 "https://telegra.ph/file/8a9366fcae3c0b8178140.png",//anime yntkts
 "https://telegra.ph/file/304efc382ee4777f07116.png",//windah bocil
 "https://telegra.ph/file/a52e7b298a8c590a2498a.png",//patrick bawa minum
 "https://telegra.ph/file/c85b27286e1bf656356d5.png",//pak polisi pap tt
 "https://telegra.ph/file/616c6d6c63f16829375db.png",//kucing1
 "https://telegra.ph/file/70e5974cdba1932e5c0b4.png",//kacamata
 "https://telegra.ph/file/c5186fa3a0c806f83acff.png",//patrick pembohong
 "https://telegra.ph/file/a7f3128c30bc9d84c6e61.png",//spongebob FBI
 "https://telegra.ph/file/a7f3128c30bc9d84c6e61.png",//mazowski monster inc
 "https://telegra.ph/file/a7f3128c30bc9d84c6e61.png",//wkwk
 "https://telegra.ph/file/f7469d1d38d34c4599d61.png",//kucing2
 "https://telegra.ph/file/a7f3128c30bc9d84c6e61.png",//patrick anak setan
 "https://telegra.ph/file/c5186fa3a0c806f83acff.png",//mazowski 2
 "https://telegra.ph/file/616c6d6c63f16829375db.png",//hengker
 "https://telegra.ph/file/a52e7b298a8c590a2498a.png",//anjing
 "https://telegra.ph/file/304efc382ee4777f07116.png",//bapak bapak lovee
 "https://telegra.ph/file/f7469d1d38d34c4599d61.png",//abang saleh
 "https://telegra.ph/file/c85b27286e1bf656356d5.png"//hengker2
]
