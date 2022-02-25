// From grokking

console.log(length_of_longest_substring('abcbccc', 2));
// console.log(length_of_longest_substring('aabccbb', 2));

function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    // current window size is from windowStart to windowEnd, overall we have a letter
    // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
    //  which has one letter repeating 'maxRepeatLetterCount' times and the remaining
    // letters we should replace. If the remaining letters are more than 'k', it is the
    // time to shrink the window as we are not allowed to replace more than 'k' letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
