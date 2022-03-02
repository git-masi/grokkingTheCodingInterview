console.log(happyNumber(23));
console.log(happyNumber(12));

function happyNumber(num) {
  let fast = num;
  let slow = num;

  do {
    fast = squareSum(squareSum(fast));
    slow = squareSum(slow);

    if (fast === slow) {
      return fast === 1;
    }
  } while (fast !== slow);
}

function squareSum(num) {
  let sum = 0;

  while (num !== 0) {
    let temp = num % 10;
    sum += temp ** 2;
    num = Math.floor(num / 10);
  }

  return sum;
}
