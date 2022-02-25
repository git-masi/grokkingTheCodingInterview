const s = 'aabac';
// start     ^
// end         ^

console.log(longest(s));

function longest(str) {
  const freq = {};
  let start = 0;
  let end = 0;
  let max = 0;

  while (end < str.length) {
    const char = str[end];

    if (!(char in freq)) {
      freq[char] = 0;
    }

    freq[char]++;

    while (freq[char] > 1) {
      const temp = str[start];

      freq[temp]--;

      start++;
    }

    max = Math.max(max, end - start + 1);

    end++;
  }

  return max;
}
