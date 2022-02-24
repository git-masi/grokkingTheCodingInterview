const a = ['a', 'b', 'b', 'a', 'c'];

console.log(fruitsBasket(a));

function fruitsBasket(arr) {
  let count = 0;
  let start = 0;
  let end = 0;
  let max = 0;
  let freq = {};

  while (end < arr.length) {
    const f = arr[end];

    if (!(f in freq)) {
      freq[f] = 0;
    }

    if (freq[f] === 0) {
      count++;
    }

    freq[f]++;

    while (count > 2) {
      const temp = arr[start];

      freq[temp]--;

      if (freq[temp] === 0) {
        count--;
      }

      start++;
    }

    max = Math.max(max, end - start + 1);

    end++;
  }

  return max;
}
