/**
    * Return a random array item.
    * @param {Array} [a] Array to get a random item
    * @returns [any]
    * @example
    * require('123abc').Array.random(['abc', '123'])
    */
const random = (a) => {
	if (!Array.isArray(a)) throw new TypeError('Expected type array');
  const randomNum = ~~(Math.random() * a.length) + 1;
  return a[randomNum] || a[0];
};

module.exports = random;
