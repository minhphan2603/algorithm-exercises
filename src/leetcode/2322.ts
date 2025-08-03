/**
 * https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/?envType=daily-question&envId=2025-07-24
 */
function minimumScore(nums: number[], edges: [number, number][]): number {
  const childNodesMap: Map<number, Set<number>> = new Map();
  for (const edge of edges) {
    let childNodes = childNodesMap.get(edge[0]) || new Set();
    childNodes.add(edge[1]);
    childNodesMap.set(edge[0], childNodes);
    childNodes = childNodesMap.get(edge[1]) || new Set();
    childNodes.add(edge[0]);
    childNodesMap.set(edge[1], childNodes);
  }

  const parentNodesMap: Map<number, Set<number>> = new Map();
  const xorAtNode: Record<number, number> = {};
  const travelTreeToCalculateXORAtNode = (node: number) => {
    xorAtNode[node] = nums[node];
    const childNodes = childNodesMap.get(node);
    if (childNodes) {
      for (const chidNode of childNodes) {
        childNodesMap.get(chidNode)?.delete(node);
        const parentNodes = new Set(parentNodesMap.get(node));
        parentNodes.add(node);
        parentNodesMap.set(chidNode, parentNodes);
        travelTreeToCalculateXORAtNode(chidNode);
        xorAtNode[node] = xorAtNode[node] ^ xorAtNode[chidNode];
      }
    }
  };
  const root0 = 0;
  travelTreeToCalculateXORAtNode(root0);

  const getScore = (...arr: number[]) => {
    let min = Infinity;
    let max = -Infinity;
    for (const num of arr) {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
    return max - min;
  };

  let result = Infinity;
  for (let i = 0; i < edges.length; i++) {
    const root1 = childNodesMap.get(edges[i][0])?.has(edges[i][1])
      ? edges[i][1]
      : edges[i][0];
    for (let j = i + 1; j < edges.length; j++) {
      const root2 = childNodesMap.get(edges[j][0])?.has(edges[j][1])
        ? edges[j][1]
        : edges[j][0];

      if (
        !parentNodesMap.get(root1)?.has(root2) &&
        !parentNodesMap.get(root2)?.has(root1)
      ) {
        const newRoot0 = xorAtNode[root0] ^ xorAtNode[root1] ^ xorAtNode[root2];
        result = Math.min(
          result,
          getScore(newRoot0, xorAtNode[root1], xorAtNode[root2])
        );
      } else if (parentNodesMap.get(root2)?.has(root1)) {
        const newRoot0 = xorAtNode[root0] ^ xorAtNode[root1];
        const newRoot1 = xorAtNode[root1] ^ xorAtNode[root2];
        result = Math.min(
          result,
          getScore(newRoot0, newRoot1, xorAtNode[root2])
        );
      } else {
        const newRoot0 = xorAtNode[root0] ^ xorAtNode[root2];
        const newRoot2 = xorAtNode[root2] ^ xorAtNode[root1];
        result = Math.min(
          result,
          getScore(newRoot0, xorAtNode[root1], newRoot2)
        );
      }
    }
  }

  return result;
}
