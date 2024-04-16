import Gameboard from "./gameboard-class";
// import Ship from "./ship-class";

describe("gameboard", () => {
  const gameboard = new Gameboard();
  // const ship = new Ship(2);

  test(" board exist", () => {
    expect(gameboard.board[1][3]).toBe(null);
  });
  test("ship placement", () => {
    gameboard.dropShip(3, 4, 4);
    expect(gameboard.board[3][4]).toMatchObject({ length: 4, numberOfHits: 0 });
  });

  test("miss hit", () => {
    expect(gameboard.receiveAttack(2, 3)).toBe(false);
  });
  test("receive hit", () => {
    expect(gameboard.receiveAttack(3, 4)).toBe(true);
  });
  test("all sunk", () => {
    gameboard.dropShip(1, 2, 3);
    expect(gameboard.isAllSunk()).toBe(false);
  });
});
