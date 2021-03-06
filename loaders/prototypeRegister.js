const { readdirSync } = require('fs');

class prototypeRegister {
  constructor() {
    this.prototypes = [];
  }

  /**
   * @param {String} [subcategory]
   * @example prototypeRegister.loadDir('array')
   */
  loadDir(subcategory) {
    if (!subcategory) throw new TypeError('Subcategory should be defined.');
    const files = readdirSync(`prototypes/${subcategory}`);
    for (let i = 0; i < files.length; i++) {
      // eslint-disable-next-line import/no-dynamic-require
      const prototype = require(`../prototypes/${subcategory}/${files[i]}`);
      this.prototypes.push({ n: files[i].split('.')[0], f: prototype });
    }
  }
}

module.exports = prototypeRegister;
