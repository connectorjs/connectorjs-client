module.exports = (socket, params, callback) => {
	try {
		// emitResult((new Date()).toISOString(),callback)
		emitResult(new Date(),callback)

	} catch (err) {
		emitError(err, callback)
	}
}
