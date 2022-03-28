console.log(closeTriplet([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7));
console.log(closeTriplet([2, 0, 1, -2], 2));
console.log(closeTriplet([2, -3, 1, -1], 1));
console.log(closeTriplet([1, 0, 1, 1], 100));

function closeTriplet(a, t) {
  a.sort();
  let smallest = Infinity;
  let diff = Math.abs(smallest - t);
  let i = 0;

  while (i < a.length - 2) {
    let start = i + 1;
    let end = a.length - 1;

    while (start < end) {
      const sum = a[i] + a[start] + a[end];
      const newDiff = Math.abs(sum - t);

      // return early clause
      if (sum === t) {
        return sum;
      }

      // update smallest clause
      if (diff === newDiff) {
        smallest = Math.min(smallest, sum);
      } else if (newDiff < diff) {
        smallest = sum;
        diff = newDiff;
      }

      // increment pointers clause
      if (sum > t) {
        end--;
      } else {
        start++;
      }
    }

    // loop while the num at i + 1 === the num at i
    // takes care of this edge case:
    // [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    if (a[i] === a[i + 1]) {
      while (a[i] === a[i + 1]) {
        i++;
      }
    } else {
      i++;
    }
  }

  return smallest;
}
