/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const stat1 = {};
  const stat2 = {};
  for (let i = 0; i < word1.length; i++) {
    stat1[word1[i]] = stat1[word1[i]] ? stat1[word1[i]] + 1 : 1;
  }
  for (let i = 0; i < word2.length; i++) {
    if (!stat1[word2[i]]) {
      return false;
    }
    stat2[word2[i]] = stat2[word2[i]] ? stat2[word2[i]] + 1 : 1;
  }
  const count1 = Object.values(stat1);
  const count2 = Object.values(stat2);
  if (count1.length !== count2.length) {
    return false;
  }
  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  for (let i = 0; i < count1.length; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
};

console.log(closeStrings("cabbba", "aabbss"));
