/**
    * @returns {String}
    * @description will return a random string
    * @example
    * require('123abc').String.random()
    */
module.exports = () => {
  return Math.random().toString(36).slice(4);
};
