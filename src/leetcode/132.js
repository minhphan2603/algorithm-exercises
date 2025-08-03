/**
 * @param {string} s
 * @return {number}
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/613/week-1-august-1st-august-7th/3872/
 */
var minCut = function (s) {
  const isPalindrome = new Map();

  let result = new Array(s.length).fill(Infinity);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (
        s[j] === s[i] &&
        (j + 1 >= i - 1 || isPalindrome.has(`${j + 1},${i - 1}`))
      ) {
        isPalindrome.set(`${j},${i}`, true);
        const temp = j - 1 >= 0 ? result[j - 1] + 1 : 0;
        if (result[i] > temp) {
          result[i] = temp;
        }
      }
    }
  }
  return result[s.length - 1];
};

console.log(minCut("abccb"));
