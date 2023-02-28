
module.exports = () => new Promise((resolve, reject) => {
	try {
		require('use-strict')
    require('colors')
    require('dotenv').config()

    global.envSave=require('env-save')

		
		global.fs = require('fs')
		global.path = require('path')
		global.uuid = require('uuid')
		// global.atob = require('atob')
		// global.btoa = require('btoa')
		global.util = require(path.join(__root, 'lib', 'util'))
    global.si=require('systeminformation')

		global.os = require('os')
    
    if(!fs.existsSync(path.join(__root, '.env'))){
      envSave('SOCKET_SERVER_URL','wss://api.connectorjs.com/connector')
      envSave('RECONNECTION_INTERVAL',20000)
      envSave('NODE_ENV','production')
      envSave('CLIENT_ID','')
      envSave('CLIENT_PASS','')
    }

    let package=require(path.join(__root,'package.json'))
		// Application info
		console.log('-'.repeat(70))
		console.log('Application Name:'.padding(25), package.name.toUpperCase().brightYellow)
		console.log('Version:'.padding(25), package.version.brightGreen)
		console.log('Socket Server URI:'.padding(25), (process.env.SOCKET_SERVER_URL || '').cyan)
		console.log('Uptime Started:'.padding(25), new Date().yyyymmddhhmmss().white)
		console.log('Copyright:'.padding(25), `2023-Now (c) ${(package.author || '')}`.green)
    console.log('')
    console.log('CLIENT ID:'.padding(25), (process.env.CLIENT_ID || '').brightMagenta)
		console.log('CLIENT PASS:'.padding(25), (process.env.CLIENT_PASS || '').brightMagenta)

		console.log('-'.repeat(70))


		resolve()
	} catch (err) {
		reject(err)
	}
})