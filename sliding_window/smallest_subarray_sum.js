const a = [3, 4, 7, 2, 5];

console.log(getSmallestSubarraySum(a, 10));

function getSmallestSubarraySum(arr, target) {
  let start = 0;
  let end = 0;
  let sum = arr[0];
  let min = Infinity;

  while (end < arr.length) {
    if (sum >= target) {
      min = Math.min(end - start + 1, min);
    }

    if (start === end) {
      end++;
      sum = sum + arr[end];
    } else if (sum > target) {
      start++;
      sum = sum - arr[start];
    } else if (sum <= target) {
      end++;
      sum = sum + arr[end];
    }
  }

  return min === Infinity ? 0 : min;
}
