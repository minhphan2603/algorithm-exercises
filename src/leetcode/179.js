/**
 * @param {number[]} nums
 * @return {string}
 * https://leetcode.com/problems/largest-number/
 */
var largestNumber = function (nums) {
  const result = nums
    .map((num) => num.toString())
    .sort((a, b) => (b + a > a + b ? 1 : -1))
    .join("");
  return result == 0 ? "0" : result;
};

console.log(largestNumber([3, 30, 34, 5, 9]));
