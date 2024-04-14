import Gameboard from "./gameboard-class";
import Ship from "./ship-class";

describe("gameboard", () => {
  const gameboard = new Gameboard();
  // const ship = new Ship(2);

  test("is board exist", () => {
    expect(gameboard.getBoard[1][3]).toBe(null);
  });
  test("is ship placed", () => {
    gameboard.dropShip(3, 4, 4);
    expect(gameboard.board[3][4]).toBe(new Ship(4));
  });
});
