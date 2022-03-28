console.log(minWindow([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(minWindow([1, 3, 2, 0, -1, 7, 10]));
console.log(minWindow([1, 2, 3]));
console.log(minWindow([3, 2, 1]));
console.log(minWindow([1, 2, 4, 5, 3, -1, 6, 9, 8, 7]));

function minWindow(arr) {
  let start = Infinity;
  let end = -Infinity;
  let p1 = arr.length - 1;

  while (p1 > 0) {
    let curr = arr[p1];
    let next = arr[p1 - 1];

    while (next && curr >= next) {
      p1--;
      curr = arr[p1];
      next = arr[p1 - 1];
    }

    if (p1 === 0) {
      break;
    }

    end = Math.max(end, p1);

    while (next && curr < next) {
      p1--;
      next = arr[p1 - 1];
    }

    start = p1;
    p1--;
  }

  return start === Infinity || end === -Infinity ? 0 : end - start + 1;
}
