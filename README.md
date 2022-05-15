# ⚠️ Esta versión de GataBot no esta terminada.

<p align="center">
<img src="https://i.imgur.com/WwxBm8o.jpg" alt="GataBot-MD" width="900"/>
</p>
<p align="center">
<a href="#"><img title="GataBot-MD" src="https://img.shields.io/badge/SI TE AGRADA EL REPOSITORIO APOYAME CON UNA 🌟 ¡GRACIAS! -red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a> 
</p>
<p align="center">
</p>
<a href="#"><img title="GataBot-MD" src="https://img.shields.io/badge/ES NECESARIO QUE LEA TODO EL README-red?colorA=%255ff0000&colorB=%23971920&style=for-the-badge"></a>
</p>
<p align="center">
</p>
<p align="center">
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Followers" src="https://img.shields.io/github/followers/GataNina-Li?color=blue&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Stars" src="https://img.shields.io/github/stars/GataNina-Li/GataBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/GataNina-Li/GataBot-MD?color=red&style=flat-square"></a>
<a href="https://github.com/GataNina-Li/GataBot-MD"><img title="Watching" src="https://img.shields.io/github/watchers/GataNina-Li/GataBot-MD?label=Watchers&color=blue&style=flat-square"></a> 
</p>

---

# GataBot-MD 🐈
> #### 🚀 Versión actual: 1.0.12
> 
## ❇️ Información
> SE ESTÁ USANDO WHATSAPP CON UNA BIBLIOTECA DE BAILEYS.
> SI ENCUENTRA UN ERROR PERDONE POR EL MOMENTO.
>
> • ESTE REPOSITORIO NO PUEDE HACER SESIONES EN TERMUX, POR LO QUE SI BUSCAS CREAR UNA SESIÓN, PRIMERO DEBE DE UTILIZAR OTRO REPOSITORIO PARA OBTENER EL ARCHIVO session.data.json
>  
> • REPOSITORIO RECONMENDADO PARA CREAR LA SESIÓN: [GataBot-GD-MD](https://github.com/GataNina-Li/GataBot-GD-MD)
>
> • ASEGÚRESE DE TENER UNA RED ESTABLE, Y CUMPLIR CON LOS REQUISITOS PARA UNA ÓPTIMA INSTALACIÓN. 
> 
> • SI USA TERMUX PUEDE TARDAR EN RESPONDER O DAR ERROR, RECOMIENDO QUE CUANDO YA TENGA EL ARCHIVO session.data.json EN ESTE REPOSITORIO, LO EJECUTE EN HEROKU O EN UN HOSTS.
> 

#### 🟣 ACTIVAR EN HEROKU
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Misaelsharkbot/GataBot-MDp2)

----
## ⚡️ PARA USUARIOS DE HEROKU
### 👇 Añada lo siguente al Buildpack:
```
heroku/nodejs
```
```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```
```
https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
```
🟣 Resultado:
----

<p align="letf">
<img src="https://i.imgur.com/u01zQtU.jpg" alt="GataBot-MD" width="500"/>
</p>

----
## 📲 PARA USUARIOS DE TERMUX
```bash
RECUERDE QUE ANTES DE HACER LA INSTALACIÓN, DEBE DE CONTAR CON UNA SESIÓN.

termux-setup-storage
pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
pkg install yarn
git clone https://github.com/GataNina-Li/GataBot-MD
cd GataBot-MD
yarn
npm install
ls
npm update
npm start
```
----
## 💻 PARA USUARIOS DE WINDOWS/VPS/RDP (Opcional)

* Descargar e instalar Git [`Klik Disini`](https://git-scm.com/downloads)
* Descargar e instalar NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Descargar e instalar FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instalar ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/GataNina-Li/GataBot-MD
cd GataBot-MD
npm install
npm update
npm index
```

## 💻 Instalación de FFmpeg para Windows 
* Descarga cualquiera de las versiones de FFmpeg disponibles haciendo clic en [FFmpeg](https://www.gyan.dev/ffmpeg/builds/).
* Extraer archivos a `C:\` path.
* Cambie el nombre de la carpeta extraída a `ffmpeg`.
* Ejecute el símbolo del sistema como administrador.
* Ejecute el siguiente comando:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Si tiene éxito, le dará un mensaje como: `SUCCESS: specified value was saved`.
* Ahora que tiene FFmpeg instalado, verifique que funcionó ejecutando este comando para ver la versión:
```cmd
> ffmpeg -version
```
----
## ⚙ Configuracion de la visualización del menú.
----
### Visualización del menú GIF
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Visualización del menú con imagen
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elyas.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Visualización del menú con ubicación
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/elyas.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Visualización del menú con vídeo
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
### 🌟 CREADORA 

[![GataNina-Li](https://github.com/GataNina-Li.png?size=100)](https://github.com/GataNina-Li)

### 🌟 AGRADECIMIENTOS

[![GataNina-Li](https://github.com/Hyzerr.png?size=100)](https://github.com/Hyzerr)
[![GataNina-Li](https://github.com/ilmanhdyt.png?size=100)](https://github.com/ilmanhdyt)
[![GataNina-Li](https://github.com/Paquito1923.png?size=100)](https://github.com/Paquito1923)
[![GataNina-Li](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

### 🌟 CONTRIBUYENTES 
 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
 [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) 
 [![F](https://github.com/Alfarqun.png?size=100)](https://github.com/Alfarqun) 
