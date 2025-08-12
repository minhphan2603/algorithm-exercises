/** https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/?envType=daily-question&envId=2025-08-12 */
function numberOfWays(n: number, x: number): number {
  const modulo = Math.pow(10, 9) + 7;
  const memo: Record<number, Record<number, number>> = {};
  const memoPower: Record<number, number> = {};
  const memoMax: Record<number, number> = {};

  const recursive = (m: number, i: number) => {
    memoMax[m] = memoMax[m] ?? Math.round(Math.pow(m, 1 / x));
    memo[m] = memo[m] ?? {};
    let count = 0;
    for (let j = i + 1; j <= memoMax[m]; j++) {
      memoPower[j] = memoPower[j] ?? Math.pow(j, x);
      const newM = m - memoPower[j];
      if (newM <= 0) {
        if (newM === 0) {
          count++;
        }
        break;
      }

      memo[newM] = memo[newM] ?? {};
      memo[newM][j] = memo[newM][j] ?? recursive(newM, j);
      count += memo[newM][j];
    }
    memo[m][i] = count;
    return count;
  };

  return recursive(n, 0) % modulo;
}

export default numberOfWays;
