import GameControl from "./game-control-class";

describe("game controller", () => {
  const game = new GameControl();
  test("switch turns", () => {
    expect(game.activePlayer).toBe(game.player1);
  });
  test("switch turns", () => {
    game.switchTurns();
    expect(game.activePlayer).toBe(game.player2);
  });

  test("switch boards", () => {
    expect(game.activeBoard).toStrictEqual(game.boardPlayer2);
  });
  test("switch boards", () => {
    game.switchTurns();
    expect(game.activeBoard).toStrictEqual(game.boardPlayer1);
  });
});
