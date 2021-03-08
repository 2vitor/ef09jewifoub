/**
    * @param {Number} [max] max number
    * @returns {Number}
    * @description will return a random number following the max number restriction
    * @example
    * require('123abc').Number.random()
    */
module.exports = (max) => {
  if (typeof max !== 'number') throw new TypeError('Expected type number')
  return ~~(Math.random() * max + 1);
};
