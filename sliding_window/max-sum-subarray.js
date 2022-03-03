const a = [5, 2, 1, 4, 3];

console.log(maxSumSubarray(a, 3));

function maxSumSubarray(arr, size) {
  let max = 0;
  let p1 = 1;
  let p2 = size;

  for (let i = 0; i < size; i++) {
    max += arr[i];
  }

  let temp = max;

  while (p2 < arr.length) {
    temp = temp - arr[p1 - 1] + arr[p2];
    max = Math.max(max, temp);
    p1++;
    p2++;
  }

  return max;
}
