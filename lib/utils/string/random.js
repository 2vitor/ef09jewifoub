/**
    * Will return a random string
    * @returns {String}
    * @example
    * require('codeutil').String.random()
    */
const random = () => {
  return Math.random().toString(36).slice(4);
};

module.exports = random;
