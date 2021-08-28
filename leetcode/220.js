/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 *
 * https://leetcode.com/problems/contains-duplicate-iii/submissions/
 *
 * 220. Contains Duplicate III
 *
 * Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
 *
 * Input: nums = [1,0,1,1], k = 1, t = 2
 *
 * Output: true
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k === 0) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));
