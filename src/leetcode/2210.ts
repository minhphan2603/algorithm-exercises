/** https://leetcode.com/problems/count-hills-and-valleys-in-an-array/?envType=daily-question&envId=2025-07-27 */
function countHillValley(nums: number[]): number {
  let result = 0;
  const checkingPoints: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (checkingPoints[checkingPoints.length - 1] === nums[i]) {
      continue;
    }
    checkingPoints.push(nums[i]);
    if (checkingPoints.length === 3) {
      if (
        (checkingPoints[0] > checkingPoints[1] &&
          checkingPoints[1] < checkingPoints[2]) ||
        (checkingPoints[0] < checkingPoints[1] &&
          checkingPoints[1] > checkingPoints[2])
      ) {
        result++;
      }
      checkingPoints.shift();
    }
  }
  return result;
}
