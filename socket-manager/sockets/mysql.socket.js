let mysql = require('mysql')
module.exports = (socket, params, callback) => {
	try {
		let con = mysql.createConnection(params.config)
		con.connect(err => {
			if (!err) {
				if (params.query) {
					con.query(params.query, function (err, result, fields) {
						if (!err)
							emitResult(result, callback)
						else
							emitError(err, callback)
					})
				} else {
					emitResult(true, callback)
				}
			} else {
				emitError(err, callback)
			}
		})
	} catch (err) {
		emitError(err, callback)
	}
}
