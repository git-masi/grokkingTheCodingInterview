import { Interval } from '../utils/interval.mjs';

console.log(
  intersection(
    [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
    [new Interval(2, 3), new Interval(5, 7)]
  )
);

function intersection(a, b) {
  const result = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < a.length && p2 < b.length) {
    const x = a[p1];
    const y = b[p2];
    const smaller = x.start < y.start ? x : y;
    const larger = smaller === x ? y : x;

    // no merge
    if (smaller.end < larger.start) {
      if (smaller === x) {
        p1++;
      } else {
        p2++;
      }

      continue;
    }

    // smaller contains larger
    if (smaller.end > larger.end) {
      result.push(smaller);
    } else {
      result.push(new Interval(smaller.start, larger.end));
    }

    p1++;
    p2++;
  }

  return result;
}
