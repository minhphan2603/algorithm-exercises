/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 *
 * Constraints:
 *
 * 1 <= nums1.length, nums2.length <= 1000
 *
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *
 * Output: [4,9]
 *
 * Explanation: [9,4] is also accepted.
 */
var intersect = function (nums1, nums2) {
  const stats = {};
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!stats[nums1[i]]) {
      stats[nums1[i]] = 1;
    } else {
      stats[nums1[i]]++;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (stats[nums2[i]]) {
      result.push(nums2[i]);
      stats[nums2[i]]--;
    }
  }
  return result;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
