
import Player from "./player-class";
// import screenHandler from "./screen-handler";
import Gameboard from "./gameboard-class";

// export default function gameControl() {
//   // const p1 = new Player();
//   // const p2 = new Player();

//   const boardP1 = new Gameboard();
//   const boardP2 = new Gameboard();

//   boardP1.dropShip(3, 4, 4);
//   boardP1.dropShip(3, 5, 4);
//   boardP1.dropShip(3, 6, 4);
//   boardP1.dropShip(3, 7, 4);

//   boardP1.dropShip(5, 4, 3);
//   boardP1.dropShip(6, 4, 3);
//   boardP1.dropShip(7, 4, 3);

//   boardP2.dropShip(3, 4, 4);
//   boardP2.dropShip(3, 5, 4);
//   boardP2.dropShip(3, 6, 4);
//   boardP2.dropShip(3, 7, 4);

//   boardP2.dropShip(5, 4, 3);
//   boardP2.dropShip(6, 4, 3);
//   boardP2.dropShip(7, 4, 3);

//   console.log(boardP1.board)
//   console.log(boardP2.board)

// }

export default class GameControl {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.activePlayer = this.player1;
    this.activeBoard = this.boardPlayer2;

    this.boardPlayer1 = new Gameboard();
    this.boardPlayer2 = new Gameboard();
  }

  switchTurns() {
    this.activePlayer =
      this.activePlayer === this.player1 ? this.player2 : this.player1;

    this.activeBoard =
      this.activeBoard === this.boardPlayer2
        ? this.boardPlayer1
        : this.boardPlayer2;
  }

  playRound(row, column) {
    this.activePlayer.attack(this.activeBoard, row, column);
    this.switchTurns();
  }
}
