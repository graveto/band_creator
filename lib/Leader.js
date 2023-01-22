const Character = require('./Character');
class Leader extends Character{
  constructor(name, id, charClass, leadership) {
    super(name, id, charClass);
    this.leadership = leadership;
  }
  getLeadership() {
    return this.leadership;
  }
}

module.exports = Leader;
