/**
    * @param {Array} [a] Array to get a random item
    * @returns [any]
    * @description will return a random array item
    * @example
    * require('123abc').Array.random(['abc', '123'])
    */
module.exports = (a) => {
	if (!Array.isArray(a)) throw new TypeError('Expected type array');
  const randomNum = ~~(Math.random() * a.length) + 1;
  return a[randomNum] || a[0];
};
