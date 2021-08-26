/**
 * @param {number} n
 * @return {number}
 *
 * https://leetcode.com/problems/nth-digit/
 *
 * 400. Nth Digit
 *
 * Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].
 *
 * Input: n = 11
 *
 * Output: 0
 *
 * Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 */
var findNthDigit = function (n) {
  let numberInRange = 9;
  let numberOfDigit = 1;

  while (n - numberInRange * numberOfDigit > 0) {
    n -= numberInRange * numberOfDigit;
    numberInRange *= 10;
    numberOfDigit++;
  }
  let x = Math.floor((n - 1) / numberOfDigit);
  let y = (n - 1) % numberOfDigit;

  return (Math.pow(10, numberOfDigit - 1) + x).toString()[y];
};

console.log(findNthDigit(191));
