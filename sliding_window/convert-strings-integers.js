const s = '-321';

const val = strToInt(s);

console.log(val, typeof val);

function strToInt(str) {
  let count = 0;
  let total = 0;
  let op = '+';

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];

    if (char === '-' || char === '+') {
      op = char;
    } else {
      total += char * 10 ** count;
    }

    count++;
  }

  return op === '-' ? -1 * total : total;
}

const int = -321;

const val2 = intToStr(int);

console.log(val2, typeof val2);

function intToStr(int) {
  let str = '';
  let op = int < 0 ? '-' : '';
  let num = Math.abs(int);

  while (num > 0) {
    const mod = num % 10;
    num = Math.floor(num / 10);
    str += mod;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    op += str[i];
  }

  return op;
}
