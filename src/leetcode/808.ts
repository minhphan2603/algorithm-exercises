/** https://leetcode.com/problems/soup-servings/description/?envType=daily-question&envId=2025-08-08 */
function soupServings(n: number): number {
  if (n >= 4800) {
    return 1;
  }

  const servings = [
    [100, 0],
    [75, 25],
    [50, 50],
    [25, 75],
  ];

  const memo: Record<number, Record<number, number>> = {};
  const recursive = (a: number, b: number): number => {
    if (a <= 0 && b <= 0) {
      return 0.5;
    } else if (a <= 0) {
      return 1;
    } else if (b <= 0) {
      return 0;
    }
    const total = servings.reduce((acc, serving) => {
      const a1 = a - serving[0];
      const b1 = b - serving[1];
      memo[a1] = memo[a1] ?? {};
      memo[a1][b1] = memo[a1][b1] ?? recursive(a1, b1);
      return acc + memo[a1][b1];
    }, 0);
    return total * 0.25;
  };

  return recursive(n, n);
}

export default soupServings;
