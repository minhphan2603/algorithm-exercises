/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * https://leetcode.com/problems/add-strings/
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3875/
 *
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 *
 * Input: num1 = "11", num2 = "123"
 *
 * Output: "134"
 */
var addStrings = function (num1, num2) {
  if (num1.length !== num2.length) {
    const zeroString = new Array(Math.abs(num1.length - num2.length))
      .fill(0)
      .join("");
    if (num1.length < num2.length) {
      num1 = zeroString + num1;
    } else {
      num2 = zeroString + num2;
    }
  }
  let result = "";
  let spare = 0;
  let i = num1.length - 1;
  while (i >= 0) {
    const temp = Number(num1[i]) + Number(num2[i]) + spare;
    result = (temp % 10) + result;
    spare = Math.floor(temp / 10);
    i--;
  }
  if (spare) {
    result = spare + result;
  }
  return result == 0 ? "0" : result;
};

console.log(addStrings("0", "0"));
