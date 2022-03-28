console.log(anagram('abc', 'abc'));
console.log(anagram('ppqp', 'pq'));
console.log(anagram('abbcabc', 'abc'));

function anagram(s, p) {
  const freq = {};
  const result = [];

  for (let i = 0; i < p.length; i++) {
    const char = p[i];

    if (!(char in freq)) {
      freq[char] = 0;
    }

    freq[char]++;
  }

  let start = 0;
  let end = 0;

  while (start <= s.length - p.length && end < s.length) {
    const char = s[end];

    if (!(char in freq)) {
      while (start < end) {
        const temp = s[start];
        freq[temp]++;
        start++;
      }

      start = end + 1;
      end = start;
      continue;
    }

    freq[char]--;

    if (freq[char] === 0 && end - start + 1 === p.length) {
      result.push(start);
    }

    while (freq[char] < 0) {
      const temp = s[start];
      freq[temp]++;
      start++;

      if (freq[temp] === 0 && end - start + 1 === p.length) {
        result.push(start);
      }
    }

    end++;
  }

  return result;
}
