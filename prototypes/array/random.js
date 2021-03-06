/**
    * @returns [any]
    */
Array.prototype.random = function () {
  const randomNum = ~~(Math.random() * this.length) + 1;
  return this[randomNum] || this[0];
};
