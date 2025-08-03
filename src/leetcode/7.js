/**
 * @param {number} x
 * @return {number}
 *
 * https://leetcode.com/problems/reverse-integer/
 *
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Input: x = -123
 *
 * Output: -321
 */
var reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let result = 0;
  const range = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (sign * result < range[0] || sign * result > range[1]) {
    return 0;
  }
  return sign * result;
};

console.log(reverse(1234567899));
