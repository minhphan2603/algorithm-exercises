/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * https://leetcode.com/problems/jump-game/
 *
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 *
 * 0 <= nums[i] <= 105
 *
 * Input: nums = [2,3,1,1,4]
 *
 * Output: true
 *
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */
var canJump = function (nums) {
  let j = 0;
  for (let i = 0; i <= j; i++) {
    if (j >= nums.length - 1) {
      return true;
    }
    j = Math.max(j, i + nums[i]);
  }
  if (j >= nums.length - 1) {
    return true;
  }
  return false;
};

let nums = [3, 2, 1, 1, 4];

console.log(canJump(nums));
