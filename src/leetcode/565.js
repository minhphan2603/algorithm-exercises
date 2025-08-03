/**
 * @param {number[]} nums
 * @return {number}
 *
 * You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
 *
 * You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:
 *
 * The first element in s[k] starts with the selection of the element nums[k] of index = k.
 *
 * The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
 *
 * We stop adding right before a duplicate element occurs in s[k].
 *
 * Return the longest length of a set s[k].
 */
var arrayNesting = function (nums) {
  const checked = new Set();

  const getNextItem = (curNum, length) => {
    if (checked.has(nums[curNum])) {
      return length;
    } else {
      checked.add(nums[curNum]);
      return getNextItem(nums[curNum], length + 1);
    }
  };

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!checked.has(nums[i])) {
      checked.add(nums[i]);
      const temp = getNextItem(nums[i], 1);
      if (temp > result) {
        result = temp;
      }
    }
  }
  return result;
};
let nums = new Array(100000).fill(0).map((_, i) => 100000 - i - 1);

console.log(arrayNesting(nums));
