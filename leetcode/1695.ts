/** https://leetcode.com/problems/maximum-erasure-value */
function maximumUniqueSubarray(nums: number[]): number {
  let prevScore = nums[0];
  let prevSet = new Set([nums[0]]);
  const indexMap: Record<number, number | undefined> = { [nums[0]]: 0 };
  let result = prevScore;

  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    if (!prevSet.has(curNum)) {
      prevScore += curNum;
      prevSet.add(curNum);
    } else {
      const prevIndex = indexMap[curNum];
      if (prevIndex != null && prevIndex < i - prevSet.size / 2) {
        const startIndex = i - prevSet.size;
        for (let j = prevIndex - 1; j >= startIndex; j--) {
          const checkingNum = nums[j];
          prevScore -= checkingNum;
          prevSet.delete(checkingNum);
        }
      } else {
        prevScore = 0;
        prevSet = new Set();
        for (let j = i; j >= 0; j--) {
          const checkingNum = nums[j];
          if (prevSet.has(checkingNum)) {
            break;
          }
          prevScore += checkingNum;
          prevSet.add(checkingNum);
        }
      }
    }
    indexMap[curNum] = i;
    result = Math.max(prevScore, result);
  }

  return result;
}
