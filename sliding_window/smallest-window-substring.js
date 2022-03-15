console.log(smWindow('aabdec', 'abc'));
console.log(smWindow('aabdec', 'abac'));
console.log(smWindow('adcad', 'abc'));

function smWindow(s, p) {
  let sub = { length: Infinity };
  let freq = create(p);
  let start = 0;
  let end = 0;

  while (start <= s.length - p.length && end < s.length) {
    const char = s[end];

    if (!(char in freq)) {
      end++;
      continue;
    }

    freq[char]--;

    if (freq[char] <= 0 && end - start + 1 >= p.length) {
      const valid = allZero(freq);

      if (valid) {
        const rangeLen = end - start + 1;

        if (rangeLen < sub.length) {
          sub = s.substring(start, end + 1);
        }
      }
    }

    let temp = s[start];

    // check if we can decrease the range size
    while (freq[temp] < 0) {
      freq[temp]++;
      start++;
      temp = s[start];
    }

    end++;
  }

  return sub.length < Infinity ? sub : '';

  function create(s) {
    const result = {};

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (!(char in result)) {
        result[char] = 0;
      }

      result[char]++;
    }

    return result;
  }

  function allZero(obj) {
    return Object.values(obj).every((val) => val <= 0);
  }
}
