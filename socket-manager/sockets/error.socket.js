module.exports = (socket, err) => {
	errorLog(err)
	setTimeout(() => socket.connect(), global.config.socketServer.reconnectionInterval || 5000)
}
