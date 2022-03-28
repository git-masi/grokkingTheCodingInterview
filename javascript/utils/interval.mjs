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

/**
 * Takes in a 2d array of ints representing start and end intervals and returns
 * an arry of interval objects
 *
 * @param {[number, number][]} arr [[start, end], [start, end]]
 * @returns {Record<'start': number, 'end': number>[]} Array of Interval objects
 */
export function mapToIntervals(arr) {
  return arr.map(([start, end]) => new Interval(start, end));
}
