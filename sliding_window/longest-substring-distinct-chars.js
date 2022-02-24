// const s = 'abaabc';
const s = 'aaaaaaaaaaaaaa';

console.log(longestSubstr(s, 2));

function longestSubstr(s, k) {
  let max = 0;
  let count = 0;
  let start = 0;
  let end = 0;
  let freq = {};

  while (end < s.length) {
    const char = s[end];

    if (!(char in freq)) {
      freq[char] = 0;
    }

    if (freq[char] === 0) {
      count++;
    }

    freq[char]++;

    while (count > k) {
      let temp = s[start];

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
