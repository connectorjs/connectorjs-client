String.prototype.padding = function (n, c) {
	var val = this.valueOf()
	if (Math.abs(n) <= val.length) {
		return val
	}
	var m = Math.max((Math.abs(n) - this.length) || 0, 0)
	var pad = Array(m + 1).join(String(c || ' ').charAt(0))
	return (n < 0) ? pad + val : val + pad
}

Number.prototype.toDigit = function (digit) {
	var t = this
	var s = t.toString()
	if (s.length < digit) {
		s = '0'.repeat(digit - s.length) + s
	}
	return s
}



Date.prototype.yyyymmddhhmmss = function (middleChar = ' ', removeTimeOffset = false) {
	let d = new Date(this.valueOf())
	if (removeTimeOffset) {
		d.setMinutes(d.getMinutes() + (new Date()).getTimezoneOffset())
	}

	return `${d.getFullYear()}-${(d.getMonth() + 1).toDigit(2)}-${d.getDate().toDigit(2)}${middleChar}${d.getHours().toDigit(2)}:${d.getMinutes().toDigit(2)}:${d.getSeconds().toDigit(2)}`
}

global.eventLog = function (obj, ...placeholders) {
	console.log(new Date().yyyymmddhhmmss(), obj, ...placeholders)
}

global.errorLog = function (obj, ...placeholders) {
	console.error(new Date().yyyymmddhhmmss().red, obj, ...placeholders)
}

global.warnLog = function (obj, ...placeholders) {
	console.error(new Date().yyyymmddhhmmss().yellow, obj, ...placeholders)
}
