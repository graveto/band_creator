const Character = require('../lib/Character');

describe('Character', () => {
  describe('Initialization', () => {
    it('should create a new Character instance with name, id, character class', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Rogue';
      const newCharacter = new Character(name, id, charClass);

      expect(newCharacter instanceof Character).toBe(true);
      expect(newCharacter.name).toEqual('Sam');
      expect(newCharacter.id).toEqual(1);
      expect(newCharacter.charClass).toEqual('Rogue');
    });
  });
  describe('getClass', () => {
    it('should return the class of the character', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Rogue';
      const newCharacter = new Character(name, id, charClass);

      const result = newCharacter.getClass();

      expect(result).toEqual('Rogue');
    });
  });
  describe('getMemberROle', () => {
    it('should return the role of the character', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Leader';
      const newCharacter = new Character(name, id, charClass);

      const result = newCharacter.getMemberRole();

      expect(result).toEqual('Leader');
    });
  });
});
