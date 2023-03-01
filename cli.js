#!/usr/bin/env node


global.__root=__dirname
require('colors')

require('use-strict')
const path = require('path')

global.util = require(path.join(__root, 'lib', 'util'))

const args = require('yargs').argv

if (args.h || args.help) {
  showHelp()
  console.log('\nPress any key to continue.')
  process.stdin.once('data', function () {
    process.exit(0)
  })
  return
}

if (args.v || args.version) {
  console.log(require('./package.json').version)
  console.log('\nPress any key to continue.')
  process.stdin.once('data', function () {
    process.exit(0)
  })
  return
}

if (args._.includes('show')) {
  util.showAppInfo()
  console.log('\nPress any key to continue.')
  process.stdin.once('data', function () {
    process.exit(0)
  })
  return
}


if (args._.includes('start')) {
  require('./connectorjs-client')
  return
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
util.showAppInfo()
console.log('\nPress any key to continue.')
process.stdin.once('data', function () {
  process.exit(0)
})
return