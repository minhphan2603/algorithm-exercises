/** https://leetcode.com/problems/fruits-into-baskets-iii/?envType=daily-question&envId=2025-08-06
 * PASS 739/740 - Must learn segment tree :(
 */
function numOfUnplacedFruits1(fruits: number[], baskets: number[]): number {
  let result = 0;
  const basketIndexesMap: Record<number, Set<number>> = {};
  const distinctBaskets: number[] = [];
  for (let i = 0; i < baskets.length; i++) {
    if (basketIndexesMap[baskets[i]]) {
      basketIndexesMap[baskets[i]].add(i);
    } else {
      distinctBaskets.push(baskets[i]);
      basketIndexesMap[baskets[i]] = new Set([i]);
    }
  }
  distinctBaskets.sort((a, b) => a - b);
  let distinctBasketsStartIndex = 0;
  const findMinBasket = (fruit: number) => {
    let i = distinctBasketsStartIndex,
      j = distinctBaskets.length - 1;

    while (i <= j) {
      if (fruit <= distinctBaskets[i]) {
        return i;
      }

      if (fruit > distinctBaskets[j]) {
        return -1;
      }

      const k = Math.floor((i + j) / 2);
      if (i === k) {
        return j;
      }
      if (distinctBaskets[k] >= fruit) {
        j = k;
      } else if (distinctBaskets[k] < fruit) {
        i = k;
      }
    }

    return -1;
  };

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let foundBasketIndex = findMinBasket(fruit);
    if (foundBasketIndex < 0) {
      result++;
      continue;
    }

    let minIndex = baskets.length;
    let minDistinctBasketIndex = foundBasketIndex;
    for (let j = foundBasketIndex; j < distinctBaskets.length; j++) {
      const basket = distinctBaskets[j];
      for (const index of basketIndexesMap[basket]) {
        if (minIndex > index) {
          minIndex = index;
          minDistinctBasketIndex = j;
        }
        break;
      }
    }
    if (minIndex >= baskets.length) {
      result++;
    } else {
      basketIndexesMap[baskets[minIndex]].delete(minIndex);
      if (basketIndexesMap[baskets[minIndex]].size === 0) {
        if (minDistinctBasketIndex > distinctBaskets.length / 2) {
          for (
            let j = minDistinctBasketIndex;
            j < distinctBaskets.length;
            j++
          ) {
            distinctBaskets[j] = distinctBaskets[j + 1];
          }
          distinctBaskets.pop();
        } else {
          for (
            let j = minDistinctBasketIndex;
            j > distinctBasketsStartIndex;
            j--
          ) {
            distinctBaskets[j] = distinctBaskets[j - 1];
          }
          distinctBaskets[0] = 0;
          distinctBasketsStartIndex++;
        }
      }
    }
  }
  return result;
}

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const basketCapacities = new Set<number>();
  const trackedBasketCapacitiesIndices: Record<number, Set<number>> = {};
  let distinctBasketCapacity: number[] = [];
  let maxBasketCapacity = 0;
  let isAsc = true;
  let maxFruit = 0;
  let isDescFruit = true;
  let isAscFruit = true;
  for (let i = 0; i < baskets.length; i++) {
    const basketCapacity = baskets[i];
    if (basketCapacities.has(baskets[i])) {
      trackedBasketCapacitiesIndices[basketCapacity].add(i);
    } else {
      isAsc =
        isAsc &&
        basketCapacity >=
          (distinctBasketCapacity[distinctBasketCapacity.length - 1] ?? 0);
      distinctBasketCapacity.push(basketCapacity);
      basketCapacities.add(basketCapacity);
      trackedBasketCapacitiesIndices[basketCapacity] = new Set([i]);
      if (maxBasketCapacity < basketCapacity) {
        maxBasketCapacity = basketCapacity;
      }
    }
    maxFruit = Math.max(maxFruit, fruits[i]);
    isDescFruit = isDescFruit && fruits[i] < (fruits[i - 1] ?? Infinity);
    isAscFruit = isAscFruit && fruits[i] > (fruits[i - 1] ?? 0);
  }

  if (distinctBasketCapacity.length === 1 && maxFruit <= maxBasketCapacity) {
    return 0;
  }

  if (
    (isDescFruit || isAscFruit) &&
    isAsc &&
    distinctBasketCapacity.length === fruits.length &&
    fruits.every((fruit, i) => fruit <= distinctBasketCapacity[i])
  ) {
    return 0;
  }

  const getFirstElement = (set: Set<number>) => {
    for (const ele of set) {
      return ele;
    }
  };

  const findMinBasket = (fruit: number) => {
    let i = 0,
      j = distinctBasketCapacity.length - 1;

    while (i <= j) {
      if (fruit <= distinctBasketCapacity[i]) {
        return i;
      }

      if (fruit > distinctBasketCapacity[j]) {
        return -1;
      }

      const k = Math.floor((i + j) / 2);
      if (i === k) {
        return j;
      }
      if (distinctBasketCapacity[k] >= fruit) {
        j = k;
      } else if (distinctBasketCapacity[k] < fruit) {
        i = k;
      }
    }

    return -1;
  };

  let result = 0;
  for (const fruit of fruits) {
    console.log(maxBasketCapacity, fruit, distinctBasketCapacity);
    if (maxBasketCapacity < fruit) {
      result++;
    } else {
      let i = isAsc ? findMinBasket(fruit) : 0;
      let tempMaxBasketCapacity = distinctBasketCapacity[i - 1] ?? 0;
      for (i; i < distinctBasketCapacity.length; i++) {
        const basketCapacity = distinctBasketCapacity[i];
        if (basketCapacity >= fruit) {
          const placedBasketIndex = getFirstElement(
            trackedBasketCapacitiesIndices[basketCapacity]
          ) as number;
          trackedBasketCapacitiesIndices[basketCapacity].delete(
            placedBasketIndex
          );
          if (trackedBasketCapacitiesIndices[basketCapacity].size === 0) {
            for (let j = i; j < distinctBasketCapacity.length - 1; j++) {
              distinctBasketCapacity[j] = distinctBasketCapacity[j + 1];
              if (tempMaxBasketCapacity < distinctBasketCapacity[j]) {
                tempMaxBasketCapacity = distinctBasketCapacity[j];
              }
            }
            distinctBasketCapacity.pop();
            maxBasketCapacity = tempMaxBasketCapacity;
          } else {
            for (let j = i; j < distinctBasketCapacity.length - 1; j++) {
              const newIndex = getFirstElement(
                trackedBasketCapacitiesIndices[basketCapacity]
              ) as number;
              const nextIndex = getFirstElement(
                trackedBasketCapacitiesIndices[distinctBasketCapacity[j + 1]]
              ) as number;
              if (newIndex > nextIndex) {
                distinctBasketCapacity[j] = distinctBasketCapacity[j + 1];
                distinctBasketCapacity[j + 1] = basketCapacity;
              } else {
                break;
              }
            }
          }
          break;
        }
        if (tempMaxBasketCapacity < basketCapacity) {
          tempMaxBasketCapacity = basketCapacity;
        }
      }
    }
  }
  return result;
}

export default numOfUnplacedFruits;
