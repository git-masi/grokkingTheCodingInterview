export class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toArray() {
    return [this.start, this.end];
  }

  log() {
    console.log(`${this.toArray()}`);
  }
}
