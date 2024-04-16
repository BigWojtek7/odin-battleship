// import "./style.css";
import Player from "./player-class";
import Gameboard from "./gameboard-class";

export default function gameControl() {
  const p1 = new Player();
  const p2 = new Player();

  const boardP1 = new Gameboard();
  const boardP2 = new Gameboard();

  boardP1.dropShip(3, 4, 4);
  boardP1.dropShip(3, 5, 4);
  boardP1.dropShip(3, 6, 4);
  boardP1.dropShip(3, 7, 4);


  boardP1.dropShip(5, 4, 3);
  boardP1.dropShip(4, 4, 3);
  boardP1.dropShip(3, 4, 3);


  boardP2.dropShip(3, 4, 4);
  boardP2.dropShip(3, 5, 4);
  boardP2.dropShip(3, 6, 4);
  boardP2.dropShip(3, 7, 4);


  boardP2.dropShip(5, 4, 3);
  boardP2.dropShip(4, 4, 3);
  boardP2.dropShip(3, 4, 3);

  console.log(boardP1)
  console.log(boardP2)

}
gameControl()
