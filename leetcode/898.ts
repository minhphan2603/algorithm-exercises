/** https://leetcode.com/problems/bitwise-ors-of-subarrays/?envType=daily-question&envId=2025-07-31 */
function subarrayBitwiseORs(arr: number[]): number {
  const bitwiseORs = new Set<number>();
  let accBitwiseORs = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    const temp = new Set<number>();
    temp.add(arr[i]);
    bitwiseORs.add(arr[i]);
    for (const acc of accBitwiseORs) {
      const bitwiseOR = acc | arr[i];
      temp.add(bitwiseOR);
      bitwiseORs.add(bitwiseOR);
    }
    accBitwiseORs = temp;
  }
  return bitwiseORs.size;
}
