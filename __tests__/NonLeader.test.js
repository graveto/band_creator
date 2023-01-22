const NonLeader = require('../lib/NonLeader');

describe('NonLeader', () => {
  describe('Initialization', () => {
    it('should create a new member instance with name, id, character class', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Rogue';
      const newCharacter = new NonLeader(name, id, charClass);

      expect(newCharacter instanceof NonLeader).toBe(true);
      expect(newCharacter.name).toEqual('Sam');
      expect(newCharacter.id).toEqual(1);
      expect(newCharacter.charClass).toEqual('Rogue');
    });
  });
});
