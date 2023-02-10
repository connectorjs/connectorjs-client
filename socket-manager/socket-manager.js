const WebSocket = require('ws').WebSocket
var url = 'ws://adam.miastart.net:8080'
var ws = null
const reconnectionInterval=Number(process.env.RECONNECTION_INTERVAL || 5000)
let osInfo = {
  deneme: 'windows 11',
  tarih: new Date()
}

module.exports = () => new Promise((resolve, reject) => {
  try {
    const moduleHolder = socketModuleLoader(path.join(__dirname, 'sockets'), '.socket.js')

    Object.keys(moduleHolder).forEach((key) => {
      console.log(`module`, key )
      // socket.on(key, (...placeholders) => {
      //   try {
      //     moduleHolder[key](...placeholders)
      //   } catch (err) {
      //     errorLog(`[${key}]`.cyan, err)
      //     emitError(err)
      //   }
      // })
    })

    resolve('')
  } catch (e) {
    reject(e)
  }
})

function connectServer() {
  // try {

    ws = new WebSocket(url)
    ws.on('open', () => {
      if(!process.env.CLIENT_ID || !process.env.CLIENT_PASS){
        ws.send(JSON.stringify({ event: 'register', info: osInfo }))
      }else{
        ws.send(JSON.stringify({ event: 'subscribe', clientId: process.env.CLIENT_ID, clientPass:process.env.CLIENT_PASS }))
      }
    })

    ws.on('message', (rawData) => {
      if(rawData){
        let data = JSON.parse(rawData.toString())
        console.log(data)
      }
    })
    ws.on('ping', (msg) => {
      ws.pong()
    })
    ws.on('error', (err) => {
      errorLog(err)
    })

    ws.on('close', () => {
      setTimeout(() => {
        connectServer()
      }, reconnectionInterval)
    })

  // } catch (err) {
  //   console.error(err)
  //   setTimeout(() => {
  //     connectServer()
  //   }, reconnectionInterval)
  // }
}

function socketModuleLoader(folder, suffix) {
  let holder = {}
  try {

    let files = fs.readdirSync(folder)
    files.forEach((e) => {
      let f = path.join(folder, e)
      if (!fs.statSync(f).isDirectory()) {
        let fileName = path.basename(f)
        let apiName = fileName.substr(0, fileName.length - suffix.length)
        if (apiName != '' && (apiName + suffix) == fileName) {
          holder[apiName] = require(f)
        }
      }
    })

  } catch (err) {
    errorLog(`[WebsocketAPI]`.cyan, 'socketModuleLoader'.green, err)
    process.exit(1)
  }
  return holder
}

// global.emitError = (err, callback) => {

//   let error = { name: 'Error', message: '' }
//   if (typeof err == 'string') {
//     error.message = err
//   } else {
//     error.name = err.name || 'Error'
//     if (err.message)
//       error.message = err.message
//     else
//       error.message = err.name || ''
//   }

//   socket.emit(callback || 'error', false, error)
// }

// global.emitResult = (data, callback) => {
//   socket.emit(callback || 'message', true, data)
// }