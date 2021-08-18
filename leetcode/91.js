/**
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/problems/decode-ways/
 *
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 *
 * 'A' -> "1"
 *
 * 'B' -> "2"
 *
 * ...
 *
 * 'Z' -> "26"
 *
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
 *
 * "AAJF" with the grouping (1 1 10 6)
 *
 * "KJF" with the grouping (11 10 6)
 *
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 *
 * The answer is guaranteed to fit in a 32-bit integer.
 *
 *
 * Input: s = "226"
 *
 * Output: 3
 *
 * Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let result = 1;
  let prev1 = 1,
    prev2 = 1;
  for (let i = 1; i < s.length; i++) {
    prev2 = prev1;
    prev1 = result;
    result =
      (Number(s[i]) > 0 ? prev1 : 0) +
      (s[i - 1] !== "0" &&
      0 < Number(s[i - 1] + s[i]) &&
      Number(s[i - 1] + s[i]) <= 26
        ? prev2
        : 0);
    if (result === 0) return 0;
  }
  return result;
};

console.log(numDecodings("600"));
