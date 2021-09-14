/**
 * @param {string} text
 * @return {number}
 * 
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * 
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * 
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 * 
 * Constraints:
 * 
 * 1 <= text.length <= 104
 * 
 * text consists of lower case English letters only.
 * 
 * Input: text = "loonbalxballpoon"
 * 
 * Output: 2

 */
var maxNumberOfBalloons = function (text) {
  const stats = {};
  for (let i = 0; i < text.length; i++) {
    if (stats[text[i]]) {
      stats[text[i]] += 1;
    } else {
      stats[text[i]] = 1;
    }
  }
  return Math.floor(
    Math.min(
      stats.b || 0,
      stats.a || 0,
      (stats.l || 0) / 2,
      (stats.o || 0) / 2,
      stats.n || 0
    )
  );
};

let text = "nlaebolko";

console.log(maxNumberOfBalloons(text));
