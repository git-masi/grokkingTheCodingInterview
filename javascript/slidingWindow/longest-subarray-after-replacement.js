console.log(longest([1, 0, 1, 0, 0, 0, 1, 1, 1], 2));
console.log(longest([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(longest([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));

function longest(arr, k) {
  let c0 = 0;
  let max = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    if (arr[end] === 0) {
      c0++;
    }

    while (c0 > k) {
      if (arr[start] === 0) {
        c0--;
      }
      start++;
    }

    max = Math.max(max, end - start + 1);

    end++;
  }

  return max;
}
