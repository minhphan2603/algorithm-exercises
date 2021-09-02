/**
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
 *
 * A split of an integer array is good if:
 *
 * The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
 *
 * The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
 *
 * Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.
 *
 * Input: nums = [1,2,2,2,5,0]
 *
 * Output: 3
 *
 * Explanation: There are three good ways of splitting nums:
 *
 * [1] [2] [2,2,5,0]
 *
 * [1] [2,2] [2,5,0]
 *
 * [1,2] [2,2] [5,0]
 */
var waysToSplit = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  const mod = Math.pow(10, 9) + 7;
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[nums.length - 2] >= 2 * nums[i]) {
      let j;
      let x = i + 1,
        y = nums.length - 2;
      while (x < y) {
        const k = Math.floor((x + y) / 2);
        if (nums[k] >= 2 * nums[i]) {
          y = k;
        } else {
          if (x !== k) {
            x = k;
          } else if (nums[y] >= 2 * nums[i]) {
            x = y;
          } else {
            break;
          }
        }
      }
      if (x === y) {
        j = x;
      } else {
        return result;
      }
      if (nums[x] <= (nums[nums.length - 1] + nums[i]) / 2) {
        y = nums.length - 2;
        while (x < y) {
          const k = Math.floor((x + y) / 2);
          if (nums[k] <= (nums[nums.length - 1] + nums[i]) / 2) {
            if (x !== k) {
              x = k;
            } else if (nums[y] <= (nums[nums.length - 1] + nums[i]) / 2) {
              x = y;
            } else {
              y = x;
            }
          } else {
            y = k;
          }
        }
        if (x === y) {
          result = (result + ((x - j + 1) % mod)) % mod;
        }
      }
    } else {
      return result;
    }
  }
  return result;
};

let nums = [
  8892, 2631, 7212, 1188, 6580, 1690, 5950, 7425, 8787, 4361, 9849, 4063, 9496,
  9140, 9986, 1058, 2734, 6961, 8855, 2567, 7683, 4770, 40, 850, 72, 2285, 9328,
  6794, 8632, 9163, 3928, 6962, 6545, 6920, 926, 8885, 1570, 4454, 6876, 7447,
  8264, 3123, 2980, 7276, 470, 8736, 3153, 3924, 3129, 7136, 1739, 1354, 661,
  1309, 6231, 9890, 58, 4623, 3555, 3100, 3437,
];

console.log(waysToSplit(nums));
