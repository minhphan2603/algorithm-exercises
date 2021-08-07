function arrayManipulation(n, queries = []) {
  // Write your code here
  const arr = [1, n];
  const values = [0];
  const valuesAtPoint = new Array(n + 1).fill(0);
  const findIndex = (a = [], v = 0) => {
    if (v === a[0]) {
      return [0, true];
    }
    if (v === a[a.length - 1]) {
      return [a.length - 1, true];
    }
    let i = 0;
    let j = a.length;
    while (i < j) {
      let k = Math.floor((i + j) / 2);
      if (a[k] === v) {
        return [k, true];
      }
      if (k === i) {
        return [j, false];
      }
      if (a[k] > v) {
        j = k;
      } else {
        i = k;
      }
    }
  };
  return queries.reduce((result, [a, b, k]) => {
    const [aIndex, isAExisted] = findIndex(arr, a);
    if (!isAExisted) {
      arr.splice(aIndex, 0, a);
      values.splice(aIndex, 0, values[aIndex - 1]);
      valuesAtPoint[a] = values[aIndex - 1];
    }
    let i = aIndex;
    while (arr[i] < b) {
      values[i] += k;
      valuesAtPoint[arr[i]] += k;
      if (result < valuesAtPoint[arr[i]]) {
        result = valuesAtPoint[arr[i]];
      }
      i++;
    }
    if (arr[i] > b) {
      arr.splice(i, 0, b);
      values.splice(i, 0, values[i - 1] - k);
      valuesAtPoint[b] = values[i - 1] - k;
    }
    valuesAtPoint[b] += k;
    if (result < valuesAtPoint[b]) {
      result = valuesAtPoint[b];
    }
    return result;
  }, 0);
}

console.log(
  arrayManipulation(10, [
    [1, 10, 40],
    [2, 6, 8],
    [2, 6, 8],
    [3, 5, 7],
    [5, 9, 15],
    [1, 8, 1],
    [5, 6, 10],
  ])
);
