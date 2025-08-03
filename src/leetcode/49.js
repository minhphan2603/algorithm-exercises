/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * https://leetcode.com/problems/group-anagrams/
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3887/
 *
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  const result = strs.reduce((acc, str) => {
    const sortedStr = new Array(...str).sort().join("");
    if (acc[sortedStr]) {
      acc[sortedStr].push(str);
    } else {
      acc[sortedStr] = [str];
    }
    return acc;
  }, {});
  return Object.values(result);
};

console.log(groupAnagrams(["a"]));
