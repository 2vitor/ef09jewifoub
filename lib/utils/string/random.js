/**
    * will return a random string
    * @returns {String}
    * @example
    * require('123abc').String.random()
    */
const random = () => {
  return Math.random().toString(36).slice(4);
};

module.exports = random;
