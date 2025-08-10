/** https://leetcode.com/problems/reordered-power-of-2/?envType=daily-question&envId=2025-08-10 */
function reorderedPowerOf2(n: number): boolean {
  const getSortedDigits = (m: number) => {
    let temp = m;
    const digits: number[] = [];
    while (temp > 0) {
      digits.push(temp % 10);
      temp = Math.floor(temp / 10);
    }

    digits.sort((a, b) => a - b);
    return digits;
  };

  const isSameArr = (a: number[], b: number[]) => {
    return a.length === b.length && a.every((v, i) => v === b[i]);
  };

  const digits = getSortedDigits(n);

  const minN = digits.reduce((acc, digit, i) => {
    if (acc === 0 && digit !== 0 && i != 0) {
      return digit * Math.pow(10, digits.length - 1);
    }
    return acc + digit * Math.pow(10, digits.length - 1 - i);
  }, 0);
  const maxN = digits.reduce(
    (acc, digit, i) => digit * Math.pow(10, i) + acc,
    0
  );

  const log2MinN = Math.ceil(Math.log2(minN));
  const log2MaxN = Math.floor(Math.log2(maxN));
  for (let i = log2MinN; i <= log2MaxN; i++) {
    if (isSameArr(digits, getSortedDigits(Math.pow(2, i)))) {
      return true;
    }
  }

  return false;
}

export default reorderedPowerOf2;
