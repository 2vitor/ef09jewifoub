/**
    * @param {Number} [max] max number
    * @returns {Number}
    */
Number.random = function (max) {
  return ~~(Math.random() * max + 1);
};
