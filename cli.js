#!/usr/bin/env node

const args = require('yargs').argv

if(args.h || args.help){
  // --start               start the connector client
  // --stop                stop the connector client

  let s=`
  Usage: connectorjs-cli [options]
  
  Options:
  connectorjs-cli       show clientId and clientPass

  -v, --version         output the version number
  -h, --help            output usage information
`
  console.log(s)
  process.exit(0)
}

if(args.v || args.version){
  console.log(require('./package.json').version)
  process.exit(0)
}

require('dotenv').config()

const clientId= process.env.CLIENT_ID || ''
const clientPass= process.env.CLIENT_PASS || ''

console.log('clientId   :', clientId)
console.log('clientPass :', clientPass)
