console.log(hasCycle([1, 2, -1, 2, 2]));

console.log(hasCycle([2, 2, -1, 2]));

console.log(hasCycle([2, 1, -1, -2]));

console.log(hasCycle([1])); // false (one element)

console.log(hasCycle([1, -1]));

function hasCycle(arr) {
  if (arr.length < 2) return false;

  let fast = 0;
  let slow = 0;

  do {
    fast = move(arr[fast], fast);
    fast = move(arr[fast], fast);
    slow = move(arr[slow], slow);
  } while (fast !== slow);

  let anchor = fast;
  let isPos = arr[anchor] > 0;

  do {
    slow = move(arr[slow], slow);

    if (arr[slow] > 0 !== isPos) {
      return false;
    }
  } while (slow !== anchor);

  return true;

  function move(steps, pointer) {
    while (steps !== 0) {
      if (steps < 0) {
        pointer = pointer === 0 ? arr.length - 1 : pointer - 1;
        steps++;
      } else if (steps > 0) {
        pointer = pointer === arr.length - 1 ? 0 : pointer + 1;
        steps--;
      }
    }

    return pointer;
  }
}
