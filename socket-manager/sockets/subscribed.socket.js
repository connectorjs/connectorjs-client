module.exports = (socket, msg) => {
	eventLog('[subscribed]'.cyan, msg.data.uuid, msg.data.message.green)
}
