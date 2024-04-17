export default class Player {
  constructor() {
    this.computerUsedNumbers = [];
  }

  // eslint-disable-next-line class-methods-use-this
  attack(object, row, column) {
    return object.receiveAttack(row, column);
  }

  computerAttack(object) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    let includes = this.computerUsedNumbers.some((a) =>
      [row, column].every((v, i) => v === a[i]),
    );
    do {
      row = Math.floor(Math.random() * 10);
      column = Math.floor(Math.random() * 10);
      // eslint-disable-next-line no-loop-func
      includes = this.computerUsedNumbers.some((a) =>
        [row, column].every((v, i) => v === a[i]),
      );
    } while (includes);

    this.computerUsedNumbers.push([row, column]);
    return object.receiveAttack(row, column);
  }
}
