/** https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/?envType=daily-question&envId=2025-07-29 */
function smallestSubarrays(nums: number[]): number[] {
  const result: number[] = [];
  let accOR = 0;
  let distinctORsMap = new Map<number, number>();
  for (let i = nums.length - 1; i >= 0; i--) {
    accOR = accOR | nums[i];
    const tempDistinctORsMap = new Map<number, number>();
    tempDistinctORsMap.set(nums[i], i);
    for (const [distinctOR, distinctORLastIndex] of distinctORsMap) {
      const newDistinctORs = distinctOR | nums[i];
      if (tempDistinctORsMap.get(newDistinctORs) != null) {
        continue;
      }
      tempDistinctORsMap.set(newDistinctORs, distinctORLastIndex);
    }
    result[i] = (tempDistinctORsMap.get(accOR) ?? 0) - i + 1;
    distinctORsMap = tempDistinctORsMap;
  }

  return result;
}
