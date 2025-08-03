/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const l = [];
  l[-1] = new Array(text2.length).fill(0);
  l[-1][-1] = 0;
  let result = 0;
  for (let i = 0; i < text1.length; i++) {
    l.push([]);
    l[i][-1] = 0;
    for (let j = 0; j < text2.length; j++) {
      l[i].push(0);
      if (text1[i] === text2[j]) {
        l[i][j] = l[i - 1][j - 1] + 1;
      } else {
        l[i][j] = Math.max(l[i - 1][j], l[i][j - 1]);
      }
      if (result < l[i][j]) {
        result = l[i][j];
      }
    }
  }
  return result;
};

let text1 = "abc",
  text2 = "def";

console.log(longestCommonSubsequence(text1, text2));
