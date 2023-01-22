const Leader = require("../lib/Leader");

describe("Leader", () => {
  describe("Initialization", () => {
    it("should create a new leader instance with name, id, character class", () => {
      const name = "Sam";
      const id = 1;
      const charClass = "Rogue";
      const newCharacter = new Leader(name, id, charClass);

      expect(newCharacter instanceof Leader).toBe(true);
      expect(newCharacter.name).toEqual("Sam");
      expect(newCharacter.id).toEqual(1);
      expect(newCharacter.charClass).toEqual("Rogue");
    });
  });
});
