const randomArr = require ('./prototypes/array/random');
const randomNum = require('./prototypes/number/random');
const randomStr = require('./prototypes/string/random');
const toProperCase = require('./prototypes/string/toProperCase');

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