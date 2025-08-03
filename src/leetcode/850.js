/**
 * @param {number[][]} rectangles
 * @return {number}
 *
 * https://leetcode.com/problems/rectangle-area-ii/
 *
 * 850. Rectangle Area II
 *
 * We are given a list of (axis-aligned) rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] , where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner of the ith rectangle.
 *
 * Find the total area covered by all rectangles in the plane. Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * Input: rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
 *
 * Output: 6
 */
var rectangleArea = function (rectangles) {
  const xSet = new Set();
  const ySet = new Set();
  rectangles.forEach((rect) => {
    xSet.add(rect[0]);
    xSet.add(rect[2]);
    ySet.add(rect[1]);
    ySet.add(rect[3]);
  });
  const xArr = new Array(...xSet).sort((a, b) => a - b);
  const yArr = new Array(...ySet).sort((a, b) => a - b);
  const xIndexesMap = xArr.reduce((acc, x, i) => {
    acc[x] = i;
    return acc;
  }, {});
  const yIndexesMap = yArr.reduce((acc, y, i) => {
    acc[y] = i;
    return acc;
  }, {});
  let result = 0;
  const checkedArea = {};
  rectangles.forEach((rect) => {
    for (let i = xIndexesMap[rect[0]]; i < xIndexesMap[rect[2]]; i++) {
      for (let j = yIndexesMap[rect[1]]; j < yIndexesMap[rect[3]]; j++) {
        if (!checkedArea[`${i},${j},${i + 1},${j + 1}`]) {
          result =
            (result + (xArr[i + 1] - xArr[i]) * (yArr[j + 1] - yArr[j])) %
            (Math.pow(10, 9) + 7);
          checkedArea[`${i},${j},${i + 1},${j + 1}`] = true;
        }
      }
    }
  });
  return result;
};

let rectangles = [
  [224386961, 128668997, 546647847, 318900555],
  [852286866, 238086790, 992627088, 949888275],
  [160239672, 137108804, 398130330, 944807066],
  [431047948, 462092719, 870611028, 856851714],
  [736895365, 511285772, 906155231, 721626624],
  [289309389, 607009433, 558359552, 883664714],
  [780746435, 397872372, 931219192, 863727103],
  [573523994, 124874359, 889018012, 471879750],
  [619886375, 149607927, 727026507, 446976526],
  [51739879, 716225241, 115331335, 785850603],
  [171077223, 267051983, 548436248, 349498903],
  [314437215, 169054168, 950814572, 481179241],
  [64126215, 646689712, 595562376, 829164135],
  [926011655, 481539702, 982179297, 832455610],
  [40370235, 231510218, 770233582, 851797196],
  [292546319, 45032676, 413358795, 783606009],
  [424366277, 369838051, 453541063, 777456024],
  [211837048, 142665527, 217366958, 952362711],
  [228416869, 402115549, 672143142, 644930626],
  [755018294, 194555696, 846854520, 939022548],
  [192890972, 586071668, 992336688, 759060552],
  [127869582, 392855032, 338983665, 954245205],
  [665603955, 208757599, 767586006, 276627875],
  [260384651, 10960359, 736299693, 761411808],
  [46440611, 559601039, 911666265, 904518674],
  [54013763, 90331595, 332153447, 106222561],
  [73093292, 378586103, 423488105, 826750366],
  [327100855, 516514806, 676134763, 653520887],
  [930781786, 407609872, 960671631, 510621750],
  [35479655, 449171431, 931212840, 617916927],
];

console.log(rectangleArea(rectangles));
