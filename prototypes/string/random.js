/**
    * @returns {String}
    */
String.prototype.random = function () {
  return Math.random().toString(36).slice(4);
};
