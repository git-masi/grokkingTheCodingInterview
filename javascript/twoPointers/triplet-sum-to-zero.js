console.log(sumZero([-3, 0, 1, 3]));
console.log(sumZero([3, 1, -3, 0]));
console.log(sumZero([4, -4, 3, -3, -2, 2, 1, -1, 0, 5]));
console.log(
  sumZero([-3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3])
);
console.log(
  sumZero([-3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2])
);
console.log(
  sumZero([
    -3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    2,
  ])
);

function sumZero(a) {
  const result = [];

  if (a.length < 3) {
    return result;
  }

  const sort = a.sort((a, b) => a - b);
  let i = 0;

  while (i < sort.length - 2) {
    const curr = sort[i];
    const target = curr * -1;

    // find pair equal to target
    let start = i + 1;
    let end = sort.length - 1;

    while (start < end) {
      const n1 = sort[start];
      const n2 = sort[end];
      const sum = n1 + n2;

      if (sum === target) {
        result.push([curr, n1, n2]);
        do {
          end--;
        } while (sort[end] === n2);
      } else if (sum > target) {
        do {
          end--;
        } while (sort[end] === n2);
      } else if (sum < target) {
        do {
          start++;
        } while (sort[start] === n1);
      }
    }

    do {
      i++;
    } while (sort[i] === curr);
  }

  return result;
}
