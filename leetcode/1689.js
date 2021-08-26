/**
 * @param {string} n
 * @return {number}
 *
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 *
 * 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 *
 * A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
 *
 * Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
 *
 * Input: n = "27346209830709182346"
 *
 * Output: 9
 */
var minPartitions = function (n) {
  return Math.max(...n);
};

var minPartitions2 = function (n) {
  let result = "0";
  for (let i = 0; i < n.length; i++) {
    if (n[i] > result) {
      result = n[i];
    }
    if (result === "9") {
      return 9;
    }
  }
  return Number(result);
};

console.log(minPartitions2("123123123435364767"));
