/** https://leetcode.com/problems/range-product-queries-of-powers/?envType=daily-question&envId=2025-08-11 */
function productQueries(n: number, queries: number[][]): number[] {
  const accBitOnes: number[] = [];
  let temp = n;
  let i = 0;
  while (temp > 0) {
    const bit = temp % 2;
    temp = Math.floor(temp / 2);
    if (bit) {
      accBitOnes.push((accBitOnes[accBitOnes.length - 1] ?? 0) + i);
    }
    i++;
  }

  const modulo = Math.pow(10, 9) + 7;
  const memo: Record<number, number> = {};
  return queries.map(([i, j]) => {
    const exponent = accBitOnes[j] - (accBitOnes[i - 1] ?? 0);
    memo[exponent] = memo[exponent] ?? Math.pow(2, exponent) % modulo;
    return memo[exponent];
  });
}

export default productQueries;
