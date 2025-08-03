/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 *
 * https://leetcode.com/problems/orderly-queue/
 *
 * You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string..
 *
 * Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.
 *
 * Input: s = "cba", k = 1
 *
 * Output: "acb"
 *
 * Explanation:
 *
 * In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
 *
 * In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".
 */
var orderlyQueue = function (s, k) {
  if (k > 1) {
    return s.split("").sort().join("");
  } else {
    let result = s;
    for (let i = 0; i < s.length; i++) {
      const temp = s.substring(i, s.length) + s.substring(0, i);
      if (temp < result) {
        result = temp;
      }
    }
    return result;
  }
};

let s = "baaca",
  k = 3;
console.log(orderlyQueue(s, k));
