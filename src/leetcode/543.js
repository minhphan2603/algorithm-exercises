/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0;
  const solve = (node, distance) => {
    const leftDistance = node.left ? solve(node.left, distance + 1) : distance;
    const rightDistance = node.right
      ? solve(node.right, distance + 1)
      : distance;
    if (result < leftDistance + rightDistance - 2 * distance) {
      result = leftDistance + rightDistance - 2 * distance;
    }
    return Math.max(leftDistance, rightDistance);
  };
  solve(root, 0);
  return result;
};
