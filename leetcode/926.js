/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3876/
 *
 * https://leetcode.com/problems/flip-string-to-monotone-increasing/
 *
 * Flip String to Monotone Increasing
 *
 * A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).
 *
 * You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
 *
 * Return the minimum number of flips to make s monotone increasing.
 *
 * Input: s = "00110"
 *
 * Output: 1
 *
 * Explanation: We flip the last digit to get 00111.
 */
var minFlipsMonoIncr = function (s) {
  let bitOneAmount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      bitOneAmount++;
    }
  }
  let result = s.length - bitOneAmount;
  let bitZeroAmount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      bitOneAmount--;
    } else {
      bitZeroAmount++;
    }
    const temp = s.length - bitZeroAmount - bitOneAmount;
    if (result > temp) {
      result = temp;
      if (!temp) {
        return 0;
      }
    }
  }
  return result;
};

console.log(minFlipsMonoIncr("00111"));
