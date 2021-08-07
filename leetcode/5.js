/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function (s) {
  let max = 0;
  let x, y;

  for (let k = 0; k < s.length; k++) {
    let i = k + 1;
    let j = k;
    while (s[i - 1] !== undefined && s[i - 1] === s[j + 1]) {
      i--;
      j++;
    }
    if (max < j - i + 1) {
      max = j - i + 1;
      x = i;
      y = j;
    }
    i = k;
    j = k;
    while (s[i - 1] !== undefined && s[i - 1] === s[j + 1]) {
      i--;
      j++;
    }
    if (max < j - i + 1) {
      max = j - i + 1;
      x = i;
      y = j;
    }
  }
  return s.substring(x, y + 1);
};

console.log(longestPalindrome("a"));
