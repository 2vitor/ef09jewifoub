/**
     * Modify the string to start with an upper case
     * @param {String} [str] string to get modified
     * @param {Boolean} [start=false] defines whether all words will start with a capital letter (false = no)
     * @returns {String}
     * @example
     * require('codeutil').String.toProperCase('hi abc no') // Hi abc no
     * require('codeutil').String.toProperCase('hi abc no', true) // Hi Abc No
     */
const toProperCase = (str, start = false) => {
  if (typeof str !== 'string') throw new TypeError('Expected type string')
  return start
    ? str.split(' ')
      .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
      .join(' ')
    : str[0].toUpperCase() + str.slice(1).toLowerCase();
};

module.exports = toProperCase;
