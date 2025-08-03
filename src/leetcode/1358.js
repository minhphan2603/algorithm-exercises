/**
 * @param {string} s
 * @return {number}
 *
 * Given a string s consisting only of characters a, b and c.
 *
 * Return the number of substrings containing at least one occurrence of all these characters a, b and c.
 *
 * Input: s = "abcabc"
 *
 * Output: 10
 *
 * Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
 */
var numberOfSubstrings = function (s) {
  let result = 0;
  const count = [];
  let newS = "";
  let sum = 0,
    sumLastABC = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      newS += s[i];
      count.push(1);
    } else {
      count[count.length - 1] += 1;
    }
  }
  if (newS.length < 3) {
    return result;
  }

  for (let i = 0; i < newS.length - 2; i++) {
    sum += count[i];
    const set = new Set([newS[i], newS[i + 1], newS[i + 2]]);
    if (set.size === 3) {
      result += (s.length - sum - count[i + 1]) * (sum - sumLastABC);
      sumLastABC = sum;
    }
  }
  return result;
};

let s = "abc";

console.log(numberOfSubstrings(s));
