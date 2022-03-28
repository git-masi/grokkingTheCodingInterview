import { Interval } from '../utils/interval.mjs';

console.log(
  insert(
    [new Interval(1, 3), new Interval(4, 6), new Interval(10, 12)],
    new Interval(7, 11)
  )
);

// Grokking solution
function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}

// function insert(arr, interval) {
//   arr.push(interval);

//   let idx = arr.length - 1;

//   // move new interval into correct position
//   while (idx >= 0 && arr[idx].start < arr[idx - 1].start) {
//     swap(arr, idx, idx - 1);
//   }

//   const result = [];
//   let merged = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (!merged) {
//       const a = arr[i]
//       const b = arr[i + 1]

//       if (a.end < b.start) {
//         result.push
//       }
//     }

//   }

//   return result;

//   function swap(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }
// }
