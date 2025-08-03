function arrayManipulation(n, queries = []) {
  // Write your code here
  const values = new Array(n + 2).fill(0);
  queries.forEach(([a, b, k]) => {
    (values[a] += k), (values[b + 1] -= k);
  });
  let result = 0;
  let x = 0;
  for (let i = 1; i <= n; i++) {
    x += values[i];
    if (x > result) {
      result = x;
    }
  }
  return result;
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
