/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 *
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3968/
 *
 * You are given a string s of lowercase English letters and an integer array shifts of the same length.
 *
 * Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
 *
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 *
 * Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
 *
 * Return the final string after all such shifts to s are applied.
 *
 * Constraints:
 *
 * 1 <= s.length <= 105
 *
 * s consists of lowercase English letters.
 *
 * shifts.length == s.length
 *
 * 0 <= shifts[i] <= 109
 *
 * Input: s = "abc", shifts = [3,5,9]
 *
 * Output: "rpl"
 *
 * Explanation: We start with "abc".
 *
 * After shifting the first 1 letters of s by 3, we have "dbc".
 *
 * After shifting the first 2 letters of s by 5, we have "igc".
 *
 * After shifting the first 3 letters of s by 9, we have "rpl", the answer.
 */
var shiftingLetters = function (s, shifts) {
  let result = "";
  let shift = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    shift = (shifts[i] + shift) % 26;
    result =
      String.fromCharCode(((s.charCodeAt(i) - 97 + shift) % 26) + 97) + result;
  }
  return result;
};

let s = "aaa",
  shifts = [1, 2, 3];

console.log(shiftingLetters(s, shifts));
