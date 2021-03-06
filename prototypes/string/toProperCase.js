/**
     * @param {Boolean} [start=false] defines whether all words will start with a capital letter (false = no)
     * @returns {String}
     */
String.prototype.toProperCase = function (start = false) {
  return start
    ? this.split(' ')
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
      .join(' ')
    : this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
