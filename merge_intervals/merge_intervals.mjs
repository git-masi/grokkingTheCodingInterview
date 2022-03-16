import { Interval } from '../utils/interval.mjs';

const a = [new Interval(1, 4), new Interval(7, 9), new Interval(2, 5)];

// a.sort((a, b) => a.start - b.start).forEach((i) => i.log());

console.log(merge(a));

function merge(arr) {
  arr.sort((a, b) => a.start - b.start);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    const b = arr[i + 1];

    // no overlap
    if (!b || a.end < b.start) {
      result.push(arr[i]);
      continue;
    }

    // b is contained within a
    if (a.start > b.start && a.end > b.end) {
      result.push(arr[i]);
    } else {
      result.push(new Interval(a.start, b.end));
      i++;
    }
  }

  return result;
}
