/**
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/617/week-5-august-29th-august-31st/3958/
 *
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 *
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 *
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 */
var findMin = function (nums) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    let k = Math.floor((i + j) / 2);
    if (i === k) {
      return Math.min(nums[i], nums[j]);
    } else if (nums[i] < nums[k] && nums[k] < nums[j]) {
      return nums[i];
    } else if (nums[i] < nums[k] && nums[k] > nums[j]) {
      i = k;
    } else {
      j = k;
    }
  }
  return nums[i];
};

let nums = [12, 0, 1];

console.log(findMin(nums));
