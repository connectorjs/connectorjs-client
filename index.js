global.__root = __dirname


require('./lib/initialize')()
  .then(() => {
    if (process.env.NODE_ENV != 'development') {
      process.on('uncaughtException', err => errorLog('Caught exception: ', err))
      process.on('unhandledRejection', reason => errorLog('Caught Rejection: ', reason))
    }
    // let socketManager = require(path.join(__root, 'socket-manager','socket-manager.js'))
    let socketManager = require('./socket-manager/socket-manager.js')
    socketManager()
        .then(() => eventLog(`Application was started properly :-)`.yellow))
        .catch(showError)
  })
  .catch(showError)

function showError(err) {
  console.log('INITIALIZE ERROR:', err)
}
