const randomArr = require ('./utils/array/random');
const randomNum = require('./utils/number/random');
const randomStr = require('./utils/string/random');
const toProperCase = require('./utils/string/toProperCase');

module.exports = {
	Array: {
		random: randomArr
	},
	Math: {},
	Number: {
		random: randomNum
	},
	String: {
		random: randomStr,
		toProperCase
	},

};