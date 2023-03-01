#!/bin/bash

sudo apt-get install node wget -y
sudo npm install -g pm2 -y
sudo wget https://github.com/connectorjs/connector-client/archive/refs/heads/main.zip -O /tmp/cc.zip
sudo unzip /tmp/cc.zip -d /opt/
sudo mv /opt/connector-client-main /opt/connectorjs
sudo rm /tmp/cc.zip
cd /opt/connectorjs
sudo npm install
sudo pm2 start connector-client.js
sudo pm2 startup
sudo pm2 save

echo "Connectorjs installed"
echo ""
echo "Run \"node cli.js show\" , learn your \"clientId\" and \"clientPass\" "
