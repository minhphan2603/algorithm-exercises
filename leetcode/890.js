/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 * https://leetcode.com/problems/find-and-replace-pattern/
 */
var findAndReplacePattern = function (words, pattern) {
  const checked = {};
  let formattedPattern = "";
  let charCode = 97;
  for (let i = 0; i < pattern.length; i++) {
    if (!checked[pattern[i]]) {
      formattedPattern += String.fromCharCode(charCode);
      checked[pattern[i]] = String.fromCharCode(charCode);
      charCode++;
    } else {
      formattedPattern += checked[pattern[i]];
    }
  }
  return words.filter((word) => {
    const checked = {};
    let charCode = 97;
    let temp = "";
    for (let i = 0; i < word.length; i++) {
      if (!checked[word[i]]) {
        temp += String.fromCharCode(charCode);
        checked[word[i]] = String.fromCharCode(charCode);
        charCode++;
      } else {
        temp += checked[word[i]];
      }
      if (temp[i] !== formattedPattern[i]) {
        return false;
      }
    }
    return true;
  });
};

console.log(findAndReplacePattern(["a", "b", "c"], "a"));
