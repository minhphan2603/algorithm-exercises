/** https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/?envType=daily-question&envId=2025-08-07 */
function maxCollectedFruits(fruits: number[][]): number {
  let result = 0;
  const n = fruits.length;
  const steps = n - 2;
  const midSteps = steps / 2;
  let row: number[] = [];
  let column: number[] = [];
  for (let i = 0; i <= steps; i++) {
    result += fruits[i][i];
    const tempRow = [];
    const tempColumn = [];
    const maxAsideSteps = i < midSteps ? i : steps - i;
    for (let asideStep = 0; asideStep <= maxAsideSteps; asideStep++) {
      const j = n - 1 - asideStep;
      let maxPrev = Math.max(
        row[asideStep - 1] ?? 0,
        row[asideStep] ?? 0,
        row[asideStep + 1] ?? 0
      );
      tempRow[asideStep] = maxPrev + fruits[i][j];

      maxPrev = Math.max(
        column[asideStep - 1] ?? 0,
        column[asideStep] ?? 0,
        column[asideStep + 1] ?? 0
      );
      tempColumn[asideStep] = maxPrev + fruits[j][i];
    }
    row = tempRow;
    column = tempColumn;
  }

  return result + row[0] + column[0] + fruits[n - 1][n - 1];
}

export default maxCollectedFruits;
