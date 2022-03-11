console.log(quad([0, -1, 3, 2, 4, 1], 5)); //[[-1,0,2,4], [-1,1,2,3]]
console.log(quad([4, 1, 2, -1, 1, -3], 1));
console.log(quad([4, 1, 2, -1, 1, 1, 1, 1, 1, 1, 1, 1, -3], 1));

function quad(arr, t) {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let start = j + 1;
      let end = arr.length - 1;
      const tSum = t - arr[i] - arr[j];
      // find pair whose sum == tSum;
      while (start < end) {
        const pSum = arr[start] + arr[end];

        if (pSum === tSum) {
          result.push([arr[i], arr[j], arr[start], arr[end]]);

          // loop to make sure we aren't working with duplicates
          while (arr[end] === arr[end - 1]) {
            end--;
          }

          end--;

          while (arr[start] === arr[start - 1]) {
            start++;
          }

          start++;
        } else if (pSum > tSum) {
          end--;
        } else {
          start++;
        }
      }

      // loop to make sure we aren't working with duplicates
      while (arr[j] === arr[j + 1]) {
        j++;
      }
    }
    // loop to make sure we aren't working with duplicates
    while (arr[i] === arr[i + 1]) {
      i++;
    }
  }

  return result;
}
