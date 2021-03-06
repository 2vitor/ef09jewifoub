const prototypeRegister = require('./prototypeRegister');

class prototypeExec extends prototypeRegister {
  /**
     * @param {Array} [paths] all prototype subfolders
     */
  constructor(paths) {
    super();
    for (let h = 0; h < paths.length; h++) {
      this.loadDir(paths[h]);
    }
    for (let i = 0; i < this.prototypes.length; i++) {
      // eslint-disable-next-line no-unused-expressions
      this.prototypes[i].f;
    }
  }
}

module.exports = prototypeExec;
