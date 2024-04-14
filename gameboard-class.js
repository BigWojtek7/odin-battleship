import Ship from "./ship-class";

export default class Gameboard {
  constructor() {
    this.board = [];
  }

  get getBoard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < columns; j += 1) {
        this.board[i].push(null);
      }
    }
    return this.board;
  }

  dropShip(row, column, shipLength) {
    if (this.board[row][column] === null)
      this.board[row][column] = new Ship(shipLength);
  }
}
const gameboard = new Gameboard
gameboard.dropShip(3, 4, 4);
console.log(gameboard.board[3][4])