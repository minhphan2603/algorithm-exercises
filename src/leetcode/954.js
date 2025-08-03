/**
 * @param {number[]} arr
 * @return {boolean}
 *
 * https://leetcode.com/problems/array-of-doubled-pairs/
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3877/
 *
 * Array of Doubled Pairs
 *
 * Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.
 *
 * Input: arr = [4,-2,2,-4]
 *
 * Output: true
 *
 * Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
 */
var canReorderDoubled = function (arr) {
  const notSure = new Set();
  const existed = new Map();
  const sortedArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let ok = false;
    if (existed.get(arr[i] / 2)) {
      ok = true;
      if (notSure.has(arr[i] / 2)) {
        notSure.delete(arr[i] / 2);
      }
    }
    if (existed.get(arr[i] * 2)) {
      ok = true;
      if (notSure.has(arr[i] * 2)) {
        notSure.delete(arr[i] * 2);
      }
    }
    if (!ok) {
      notSure.add(arr[i]);
    }
    if (existed.get(arr[i])) {
      existed.set(arr[i], existed.get(arr[i]) + 1);
    } else {
      if (arr[i]) {
        sortedArr.push(arr[i]);
      }
      existed.set(arr[i], 1);
    }
  }
  if (
    notSure.size ||
    sum % 3 !== 0 ||
    (existed.get(0) && existed.get(0) % 2 !== 0)
  ) {
    return false;
  }
  sortedArr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    const x = sortedArr[i] > 0 ? 2 : 0.5;
    if (existed.get(sortedArr[i]) > 0) {
      if (
        !existed.has(sortedArr[i] * x) ||
        existed.get(sortedArr[i] * x) - existed.get(sortedArr[i]) < 0
      ) {
        return false;
      } else {
        existed.set(
          sortedArr[i] * x,
          existed.get(sortedArr[i] * x) - existed.get(sortedArr[i])
        );
      }
      existed.set(sortedArr[i], 0);
    }
  }
  return true;
};

console.log(canReorderDoubled([12, 1, 2, 3, 6, 6]));
