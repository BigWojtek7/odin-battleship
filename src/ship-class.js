export default class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
  }

  hit() {
    this.numberOfHits += 1;
  }

  isSunk() {
    if (this.length === this.numberOfHits) return true;
    return false;
  }
}
