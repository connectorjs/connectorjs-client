#!/usr/bin/env node

const args = require('yargs').argv

if (args.h || args.help) {
  showHelp()
  process.exit(0)
}

if (args.v || args.version) {
  console.log(require('./package.json').version)
  process.exit(0)
}

if(args._.includes('show')){
  showInfo()
  process.exit(0)
}


if(args._.includes('start')){
  require('./connector-client')
  return
}





function showInfo() {
  require('dotenv').config()

  const clientId = process.env.CLIENT_ID || ''
  const clientPass = process.env.CLIENT_PASS || ''


  console.log('clientId   :', clientId)
  console.log('clientPass :', clientPass)
}



function showHelp() {
  let s = `
connectorjs <command> [options]

Usage:

connectorjs start           run connector client
connectorjs show            show clientId and clientPass
connectorjs -v[--version]   version number
connectorjs -h[--help]      help

`
  console.log(s)
}

showHelp()
showInfo()
console.log(`args`,args )