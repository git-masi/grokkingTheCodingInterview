console.log(hasPermutation('oidbcaf', 'abc'));
console.log(hasPermutation('xyzlmnop', 'abc'));
console.log(hasPermutation('xyzablabcmnop', 'abc'));

function hasPermutation(s, p) {
  const freq = {};

  for (let char of p) {
    if (!(char in freq)) {
      freq[char] = 0;
    }

    freq[char]++;
  }

  let end = 0;

  while (!(s[end] in freq) && end < s.length) {
    end++;
  }

  let start = end;

  while (end < s.length) {
    const char = s[end];

    if (!(char in freq)) {
      end++;

      while (start < end) {
        const temp = s[start];
        freq[temp]++;
        start++;
      }
    } else {
      freq[char]--;

      if (freq[char] === 0 && end - start + 1 === p.length) {
        return true;
      }

      if (freq[char] >= 0) {
        end++;
        continue;
      }

      end++;

      while (freq[char] < 0) {
        const temp = s[start];
        freq[temp]++;
        start++;
      }
    }
  }

  return false;
}
