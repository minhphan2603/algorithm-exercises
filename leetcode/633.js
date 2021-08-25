/**
 * @param {number} c
 * @return {boolean}
 *
 * https://leetcode.com/problems/sum-of-square-numbers/
 *
 * Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
 */
var judgeSquareSum = function (c) {
  const max = Math.floor(Math.sqrt(c));
  for (let i = 0; i <= max; i++) {
    const temp = Math.sqrt(c - i * i);
    if (temp - Math.floor(temp) === 0) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(2147483648));
