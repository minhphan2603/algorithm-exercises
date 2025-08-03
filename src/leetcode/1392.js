/**
 * @param {string} s
 * @return {string}
 *
 * https://leetcode.com/problems/longest-happy-prefix/
 *
 * 1392. Longest Happy Prefix
 *
 * A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding itself).
 *
 * Given a string s, return the longest happy prefix of s. Return an empty string "" if no such prefix exists.
 *
 * Input: s = "ababab"
 *
 * Output: "abab"
 *
 * Explanation: "abab" is the largest prefix which is also suffix. They can overlap in the original string.
 */
var longestPrefix = function (s) {
  let prefix = "";
  let suffix = "";
  let result = "";
  for (let i = 0; i < s.length - 1; i++) {
    prefix = prefix + s[i];
    suffix = s[s.length - 1 - i] + suffix;
    if (
      s[i] === s[s.length - 1] &&
      s[s.length - 1 - i] === s[0] &&
      prefix === suffix
    ) {
      result = prefix;
    }
  }
  return result;
};

// better solution
var longestPrefix2 = function (s) {
  const result = [0];
  for (let i = 1; i < s.length; i++) {
    x = result[i - 1];
    while (s[x] !== s[i]) {
      if (x === 0) {
        x = -1;
        break;
      }
      x = result[x - 1];
    }

    result[i] = x + 1;
  }
  return s.substring(0, result[s.length - 1]);
};

console.log(longestPrefix("ababab"));
