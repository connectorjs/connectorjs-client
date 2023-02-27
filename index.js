(async ()=>{

  global.__root = __dirname

  await require('./lib/initialize')()
  
  
  // if (process.env.NODE_ENV != 'development') {
    process.on('uncaughtException', err => errorLog('Caught exception: ', err))
    process.on('unhandledRejection', reason => errorLog('Caught Rejection: ', reason))
  // }

  await require('./socket-manager/socket-manager.js')()
  eventLog(`Application was started properly :-)`.yellow)
})()
