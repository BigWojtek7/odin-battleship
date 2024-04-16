export default class Player {
  constructor() {
    this.computerUsedNumbers = [];
  }

  attack(object, row, column) {
    return object.receiveAttack(row, column);
  }

  computerAttack(object) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    while (this.computerUsedNumbers.includes(`${row}${column}`)) {
      row = Math.floor(Math.random() * 10);
      column = Math.floor(Math.random() * 10);
    }
    this.computerUsedNumbers.push(`${row}${column}`);
    console.log(this.computerUsedNumbers);
    return object.receiveAttack(row, column);
  }
}
