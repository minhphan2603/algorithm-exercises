/** https://leetcode.com/problems/pascals-triangle/?envType=daily-question&envId=2025-08-01 */
function generate(numRows: number): number[][] {
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = [1];
    for (let j = 0; j < result[i - 1].length; j++) {
      row.push(result[i - 1][j] + (result[i - 1][j + 1] || 0));
    }
    result.push(row);
  }
  return result;
}
