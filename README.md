<p align="center">
<a href="https://connectorjs.com" _target="blank">
<img src="https://github.com/connectorjs/.github/raw/main/images/connectorjs-logo.png"  width="400" />
</a>
</p>

[![](https://img.shields.io/badge/%F0%9F%8C%90%20Powered_by-miajupiter.com-blueviolet?style=flat&labelColor=%23323232)](https://miajupiter.com) ![GitHub followers](https://img.shields.io/github/followers/miajupiter?label=MiaJupiter&logo=github)

# ConnectorJS-Client


Establish easy and secure remote connection to your local databases, files, etc.


## Install

### Npm / yarn

```bash
# npm / yarn install globally
$ npm install connectorjs-client -g

# Usage
$ connectorjs -h

Usage:
connectorjs <command> [options]

connectorjs start           run connector client
connectorjs show            show clientId and clientPass
connectorjs -v[--version]   version number
connectorjs -h[--help]      help

Press any key to continue.
```

### Windows

#### Download for Windows
Extract zip and install setup file [connectorjs-client-setup.zip](https://raw.githubusercontent.com/connectorjs/connector-client/main/installer/win64/connectorjs-client-setup.zip)


#### Screenshots

| <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_1.jpg" target="_blank"><img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_1.jpg" width="223" /></a> | <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_2.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_2.jpg" width="223" />
</a> | <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_3.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_0_3.jpg" width="223" />
</a> | <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_1.jpg" target="_blank"><img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_1.jpg" width="223" /></a> | <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_2.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_2.jpg" width="223" />
</a> | <a href="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_3.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/connectorjs/connector-client/main/docs/screen-shots/Screenshot_3.jpg" width="223" />
</a> |
--










### MacOS X
...soon

or try install via npm/yarn package managers.

### Linux / Ubuntu










- `.env` file

```ini
SOCKET_SERVER_URL=wss://api.connectorjs.com/connector
RECONNECTION_INTERVAL=20000
NODE_ENV={{develoment | production}}
CLIENT_ID={{client_id}}
CLIENT_PASS={{client_pass}}
```
