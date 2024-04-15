import Ship from "./ship-class";

export default class Gameboard {
  constructor() {
    this.board = [];
    this.newBoard = this.getBoard();
  }

  getBoard() {
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

  receiveAttack(row, column) {
    if (
      this.board[row][column] !== null &&
      this.board[row][column] !== "miss"
    ) {
      this.board[row][column].hit();
      return true;
    }

    this.board[row][column] = "miss";
    return false;
  }

  isAllSunk() {
    // const ships = this.board.map((row) =>
    //   row.map((cell) => cell !== null || cell !== "miss")
    // );
    // return ships
    return false
  }
}
const gameboard = new Gameboard();
console.log(gameboard.board);
gameboard.dropShip(3, 4, 4);
console.log(gameboard.board[3][4]);


// const array = gameboard.board.filter( row =>
// row.map(cell => cell))
// console.log(1, array)