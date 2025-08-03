/** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/?envType=daily-question&envId=2025-07-30 */
function longestSubarray(nums: number[]): number {
  let result = 1;
  let maxAND = nums[0];
  let prevLength = 1;
  let prevMaxAND = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const andIfMount = prevMaxAND & nums[i];
    if (andIfMount >= nums[i]) {
      prevMaxAND = andIfMount;
      prevLength++;
    } else {
      prevMaxAND = nums[i];
      prevLength = 1;
    }
    if (prevMaxAND > maxAND) {
      maxAND = prevMaxAND;
      result = prevLength;
    } else if (prevMaxAND === maxAND) {
      result = Math.max(prevLength, result);
    }
  }

  return result;
}
