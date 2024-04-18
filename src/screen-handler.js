import GameControl from "./game-control-class";

import "./style.css";

function screenHandler() {
  const game = new GameControl();

  const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board1");
  const boardDiv2 = document.querySelector(".board2");

  game.boardPlayer2.dropShip(
    [[3, 4],[3, 5],[3, 6],[3, 7],], 4,
  );
  game.boardPlayer2.dropShip(
    [[5, 4],[6, 4],[7, 4],], 3,
  );
  
  game.boardPlayer2.dropShip(
    [[0, 4],[0, 5],[0, 6],], 3,
  );
  
  game.boardPlayer2.dropShip(
    [[9, 3],[9, 4],], 2,
  );
  game.boardPlayer2.dropShip(
    [[4,1],[4, 2],], 2,
  );
  game.boardPlayer2.dropShip(
    [[9,7],[9, 8],], 2,
  );
  
  game.boardPlayer1.dropShip(
    [[3, 4],[3, 5],[3, 6],[3, 7],], 4,
  );
  game.boardPlayer1.dropShip(
    [[5, 4],[6, 4],[7, 4],], 3,
  );
  
  game.boardPlayer1.dropShip(
    [[0, 4],[0, 5],[0, 6],], 3,
  );
  
  game.boardPlayer1.dropShip(
    [[9, 3],[9, 4],], 2,
  );
  game.boardPlayer1.dropShip(
    [[4,1],[4, 2],], 2,
  );

  game.boardPlayer1.dropShip(
    [[9,7],[9, 8],], 2,
  );

  // const getCoordinates = () => {
  //   const dialog = document.getElementById("welcome-dialog");
  //   const dialogBoard = document.getElementById("dialog-board");


  // };

  const updateDisplay = () => {
    boardDiv.textContent = "";

    game.boardPlayer2.board.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");

        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        boardDiv.appendChild(cellButton);
      });
    });

    game.boardPlayer1.board.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell2");

        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        boardDiv2.appendChild(cellButton);
      });
    });
  };

  function clickHandlerBoard(e) {
    const buttonRow = e.target.dataset.row;
    const buttonColumn = e.target.dataset.column;

    if (!buttonRow) return;
    if (!buttonColumn) return;
    game.playRound(buttonRow, buttonColumn);

    if (game.activeBoard.board[buttonRow][buttonColumn] === 0) {
      e.target.style.background = "red";
    } else {
      e.target.style.background = "green";
    }
    e.target.disabled = true;
    if (game.activeBoard.isAllSunk()) {
      playerTurnDiv.textContent = `Player 1 won`;
    }

    game.switchTurns();
    game.activePlayer.computerAttack(game.activeBoard);

    game.activePlayer.computerUsedNumbers.forEach((arr) => {
      const cell = document.querySelector(
        `.cell2[data-row="${arr[0]}"][data-column="${arr[1]}"]`,
      );
      if (game.activeBoard.board[arr[0]][arr[1]] === 0) {
        cell.style.background = "red";
      } else {
        cell.style.background = "green";
      }
    });

    if (game.activeBoard.isAllSunk()) {
      playerTurnDiv.textContent = `Player 2 won`;
    }
    game.switchTurns();
  }

  boardDiv.addEventListener("click", clickHandlerBoard);

  updateDisplay();
}
screenHandler();
