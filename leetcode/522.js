/**
 * @param {string[]} strs
 * @return {number}
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/616/week-4-august-22nd-august-28th/3921/
 */
var findLUSlength = function (strs) {
  const allSubstring = {};
  const getAllSub = (str, sub, i) => {
    if (i === str.length) {
      allSubstring[sub] = (allSubstring[sub] || 0) + 1;
    } else {
      getAllSub(str, sub + str[i], i + 1);
      getAllSub(str, sub, i + 1);
    }
  };
  strs.forEach((str) => getAllSub(str, "", 0));
  let result = -1;
  for (let str in allSubstring) {
    if (allSubstring[str] === 1) {
      if (str.length > result) {
        result = str.length;
      }
    }
  }
  return result;
};

console.log(findLUSlength(["aaa", "aaa", "aa"]));
