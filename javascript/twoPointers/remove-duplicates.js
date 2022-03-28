console.log(removeDuplicates([]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 4, 4]));

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let start = 0;
  let num = arr[start];

  for (let i = 1; i < arr.length; i++) {
    const currNum = arr[i];

    if (num !== currNum) {
      start++;
      num = currNum;
    }
  }

  return start + 1;
}
