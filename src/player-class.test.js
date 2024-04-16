import Player from "./player-class";
import Gameboard from "./gameboard-class";

describe("player class", () => {
  const player1 = new Player();
  const gameboard1 = new Gameboard();
  test("if exist", () => {
    expect(player1.attack(gameboard1, 2, 3)).toBe(false);
  });
  test("computer attack", () => {
    expect(player1.computerAttack(gameboard1, 2, 3)).toBe(false);
  });
});
