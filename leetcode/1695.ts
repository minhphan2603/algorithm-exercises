/** https://leetcode.com/problems/maximum-erasure-value */
function maximumUniqueSubarray(nums: number[]): number {
  let prevScore = nums[0];
  let prevMap = new Map([[nums[0], 0]]);
  let result = prevScore;

  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    const prevIndex = prevMap.get(curNum);
    if (prevIndex == null) {
      prevScore += curNum;
    } else {
      if (prevIndex < i - prevMap.size / 2) {
        const startIndex = i - prevMap.size;
        for (let j = prevIndex - 1; j >= startIndex; j--) {
          const checkingNum = nums[j];
          prevScore -= checkingNum;
          prevMap.delete(checkingNum);
        }
      } else {
        prevScore = 0;
        prevMap = new Map([]);
        for (let j = i; j > prevIndex; j--) {
          const checkingNum = nums[j];
          prevScore += checkingNum;
          prevMap.set(checkingNum, j);
        }
      }
    }

    prevMap.set(curNum, i);
    result = Math.max(prevScore, result);
  }

  return result;
}
