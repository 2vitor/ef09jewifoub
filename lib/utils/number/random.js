/**
    * return a random number following the max number restriction
    * @param {Number} [max] max number
    * @returns {Number}
    * @example
    * require('123abc').Number.random()
    */
const random = (max) => {
  if (typeof max !== 'number') throw new TypeError('Expected type number')
  return ~~(Math.random() * max + 1);
};

module.exports = random;
