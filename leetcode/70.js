/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 0;

  for (let i = 0; i * 2 <= n; i++) {
    const steps = n - i * 2 + i;
    let temp = 1;
    for (let j = 1; j <= i; j++) {
      temp = (temp * (steps - j + 1)) / j;
    }
    result += temp;
  }
  return result;
};

console.log(climbStairs(10));
