const Character = require('./Character');

class NonLeader extends Character {
  constructor(name, id, charClass, getIndependenceLevel) {
    super(name, id, charClass);
    this.getIndependenceLevel = getIndependenceLevel;
  }

  getIndependenceLevel() {
    return this.getIndependenceLevel;
  }
}

module.exports = NonLeader;
