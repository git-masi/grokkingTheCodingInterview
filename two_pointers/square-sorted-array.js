// [-2, -1, 0, 1]
// [1, -1, 0, 4]
// [0, -1, 1, 4]
// [0, 1, 1, 4]
//  ^
//  ^

const a = [-2, -1, 0, 1];
const a2 = [-3, -1, 0, 1, 2];

squareSorted(a);
squareSorted(a2);

console.log(a);
console.log(a2);

function squareSorted(arr) {
  let end = arr.length - 1;

  while (end >= 0) {
    if (Math.abs(arr[0]) > Math.abs(arr[end])) {
      swap(arr, 0, end);
    }

    arr[end] = arr[end] ** 2;
    end--;
  }
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
