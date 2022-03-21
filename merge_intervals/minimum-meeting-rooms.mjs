import { MinHeap } from '../utils/min-heap.mjs';
import { mapToIntervals } from '../utils/interval.mjs';

console.log(
  minRooms(
    mapToIntervals([
      [1, 4],
      [2, 5],
      [7, 9],
    ])
  )
);

console.log(
  minRooms(
    mapToIntervals([
      [6, 7],
      [2, 4],
      [8, 12],
    ])
  )
);

console.log(
  minRooms(
    mapToIntervals([
      [4, 5],
      [2, 3],
      [2, 4],
      [3, 5],
    ])
  )
);

function minRooms(arr) {
  const heap = new MinHeap('end');
  let numRooms = 0;

  arr.sort((a, b) => a.start - b.start);

  for (let inter of arr) {
    if (heap.size === 0 || heap.viewMin().end > inter.start) {
      heap.insert(inter);
    } else {
      heap.extractMin();
      heap.insert(inter);
    }

    numRooms = Math.max(numRooms, heap.size);
  }

  return numRooms;
}
