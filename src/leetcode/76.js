/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/615/week-3-august-15th-august-21st/3891/
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 *
 * Output: "BANC"
 *
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */
var minWindow = function (s, t) {
  const checked = new Set();
  const arr = [];
  const store = {};
  for (let i = 0; i < t.length; i++) {
    if (checked.has(t[i])) {
      store[t[i]].count += 1;
    } else {
      checked.add(t[i]);
      arr.push(t[i]);
      store[t[i]] = {
        count: 1,
        list: [],
      };
    }
  }
  let si = 0,
    sj = s.length;
  let firstChar;
  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      store[s[i]].list.push(i);
      if (store[s[i]].list.length >= store[s[i]].count) {
        checked.delete(s[i]);
      }
      if (!checked.size) {
        if (!firstChar || s[i] === firstChar) {
          let tempi = s.length,
            tempj = -1,
            tempFirstChar;
          for (let j = 0; j < arr.length; j++) {
            if (store[arr[j]].list[store[arr[j]].list.length - 1] > tempj) {
              tempj = store[arr[j]].list[store[arr[j]].list.length - 1];
            }
            if (
              store[arr[j]].list[
                store[arr[j]].list.length - store[arr[j]].count
              ] < tempi
            ) {
              tempi =
                store[arr[j]].list[
                  store[arr[j]].list.length - store[arr[j]].count
                ];
              tempFirstChar = arr[i];
            }
          }
          if (tempj - tempi < sj - si) {
            si = tempi;
            sj = tempj;
            firstChar = tempFirstChar;
          }
        }
      }
    }
  }
  if (checked.size) {
    return "";
  }
  return s.substring(si, sj + 1);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
