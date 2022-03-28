console.log(wordsConcat('catfoxcat', ['cat', 'fox']));

function wordsConcat(s, w) {
  const result = [];
  const freq = wordFreq(w);
  const wLen = w[0].length;
  const totalLen = wLen * w.length;
  let start = 0;
  let end = start + wLen;
  let rStart = start;
  let rEnd = end;

  while (start <= s.length - wLen && end <= s.length) {
    let word = s.substring(start, end);

    if (!(word in freq)) {
      start = end + 1;
      end = start + wLen;
      rStart = start;
      rEnd = end;

      continue;
    }

    freq[word]--;

    if (freq[word] === 0 && rEnd - rStart === totalLen) {
      result.push(rStart);

      word = s.substring(rStart, wLen);

      if (word) {
        freq[word]++;
      }

      start += wLen;
      end += wLen;
      rStart += wLen;
      rEnd = end;

      continue;
    }

    while (freq[word] < 0) {
      word = s.substring(rStart, wLen);
      freq[word]++;
      rStart += wLen;
    }

    start += wLen;
    end += wLen;
    rEnd = end;
  }

  return result;

  function wordFreq(words) {
    const result = {};

    for (let word of words) {
      if (!(word in result)) {
        result[word] = 0;
      }

      result[word]++;
    }

    return result;
  }
}
