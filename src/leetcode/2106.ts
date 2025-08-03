function maxTotalFruits(
  fruits: [number, number][],
  startPos: number,
  k: number
): number {
  const findPosition = (distanceInfo: [number, number][], pos: number) => {
    let i = 0,
      j = distanceInfo.length - 1;

    while (i <= j) {
      if (pos < distanceInfo[i][0]) {
        return i - 1;
      }

      if (pos === distanceInfo[i][0]) {
        return i;
      }

      if (pos >= distanceInfo[j][0]) {
        return j;
      }

      const k = Math.floor((i + j) / 2);
      if (i === k) {
        return i;
      }
      if (distanceInfo[k][0] > pos) {
        j = k;
      } else if (distanceInfo[k][0] < pos) {
        i = k;
      } else {
        return k;
      }
    }

    return -1;
  };

  const startIndex = findPosition(fruits, startPos);
  const startAtFruit = fruits[startIndex]?.[0] === startPos;
  let baseAccFruit = startAtFruit ? fruits[startIndex]?.[1] : 0;

  const positiveAxis: [number, number][] = [];
  for (let i = startIndex + 1; i < fruits.length; i++) {
    positiveAxis.push([
      fruits[i][0] - startPos,
      (positiveAxis[positiveAxis.length - 1]?.[1] || 0) + fruits[i][1],
    ]);
  }

  const negativeAxis: [number, number][] = [];
  for (let i = startAtFruit ? startIndex - 1 : startIndex; i >= 0; i--) {
    negativeAxis.push([
      startPos - fruits[i][0],
      (negativeAxis[negativeAxis.length - 1]?.[1] || 0) + fruits[i][1],
    ]);
  }

  const maxRightIndex = findPosition(positiveAxis, k);
  const maxLeftIndex = findPosition(negativeAxis, k);

  let result =
    baseAccFruit +
    Math.max(
      positiveAxis[maxRightIndex]?.[1] || 0,
      negativeAxis[maxLeftIndex]?.[1] || 0
    );

  for (let i = 0; i <= maxRightIndex; i++) {
    const [rightPos, rightAccFruit] = positiveAxis[i];
    const maxLeftPos = Math.max(
      k - rightPos * 2,
      Math.floor((k - rightPos) / 2)
    );
    const leftIndex = findPosition(negativeAxis, maxLeftPos);

    const accFruit =
      baseAccFruit + rightAccFruit + (negativeAxis[leftIndex]?.[1] || 0);

    if (accFruit > result) {
      result = accFruit;
    }
  }

  return result;
}

export default maxTotalFruits;
