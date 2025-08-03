/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length,
    n = dungeon[0].length;
  const result = [
    [
      {
        minDam: {
          v: Math.min(dungeon[0][0], 0),
          hp: dungeon[0][0],
        },
        maxHP: { v: dungeon[0][0], dam: Math.min(dungeon[0][0], 0) },
      },
    ],
  ];
  for (let i = 1; i < n; i++) {
    result[0][i] = {
      minDam: {
        v: Math.min(
          result[0][i - 1].minDam.v,
          result[0][i - 1].minDam.hp + dungeon[0][i],
          0
        ),
        hp: result[0][i - 1].minDam.hp + dungeon[0][i],
      },
      maxHP: {
        v: result[0][i - 1].maxHP.v + dungeon[0][i],
        dam: Math.min(
          result[0][i - 1].maxHP.dam,
          result[0][i - 1].maxHP.v + dungeon[0][i],
          0
        ),
      },
    };
  }
  for (let i = 1; i < m; i++) {
    result.push([
      {
        minDam: {
          v: Math.min(
            result[i - 1][0].minDam.v,
            result[i - 1][0].minDam.hp + dungeon[i][0],
            0
          ),
          hp: result[i - 1][0].minDam.hp + dungeon[i][0],
        },
        maxHP: {
          v: result[i - 1][0].maxHP.v + dungeon[i][0],
          dam: Math.min(
            result[i - 1][0].maxHP.dam,
            result[i - 1][0].maxHP.v + dungeon[i][0],
            0
          ),
        },
      },
    ]);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (result[i][j - 1].maxHP.v > result[i - 1][j].maxHP.v) {
        result[i][j] = {
          maxHP: {
            v: result[i][j - 1].maxHP.v + dungeon[i][j],
            dam: Math.min(
              result[i][j - 1].maxHP.dam,
              result[i][j - 1].maxHP.v + dungeon[i][j],
              0
            ),
          },
        };
      } else if (result[i][j - 1].maxHP.v === result[i - 1][j].maxHP.v) {
        result[i][j] = {
          maxHP: {
            v: result[i][j - 1].maxHP.v + dungeon[i][j],
            dam: Math.min(
              Math.max(result[i][j - 1].maxHP.dam, result[i - 1][j].maxHP.dam),
              result[i][j - 1].maxHP.v + dungeon[i][j],
              0
            ),
          },
        };
      } else {
        result[i][j] = {
          maxHP: {
            v: result[i - 1][j].maxHP.v + dungeon[i][j],
            dam: Math.min(
              result[i - 1][j].maxHP.dam,
              result[i - 1][j].maxHP.v + dungeon[i][j],
              0
            ),
          },
        };
      }

      const minDam1 = {
        v: Math.min(
          result[i][j - 1].minDam.v,
          result[i][j - 1].minDam.hp + dungeon[i][j],
          0
        ),
        hp: result[i][j - 1].minDam.hp + dungeon[i][j],
      };

      const minDam2 = {
        v: Math.min(
          result[i][j - 1].maxHP.dam,
          result[i][j - 1].maxHP.v + dungeon[i][j],
          0
        ),
        hp: result[i][j - 1].maxHP.v + dungeon[i][j],
      };

      const minDam3 = {
        v: Math.min(
          result[i - 1][j].minDam.v,
          result[i - 1][j].minDam.hp + dungeon[i][j],
          0
        ),
        hp: result[i - 1][j].minDam.hp + dungeon[i][j],
      };

      const minDam4 = {
        v: Math.min(
          result[i - 1][j].maxHP.dam,
          result[i - 1][j].maxHP.v + dungeon[i][j],
          0
        ),
        hp: result[i - 1][j].maxHP.v + dungeon[i][j],
      };

      result[i][j].minDam = [minDam1, minDam2, minDam3, minDam4].reduce(
        (min, item) => {
          if (item.v > min.v) {
            min.v = item.v;
            min.hp = item.hp;
          } else if (item.v === min.v) {
            min.hp = Math.max(min.hp, item.hp);
          }
          return min;
        },
        { v: -Infinity, hp: -Infinity }
      );
    }
  }
  return Math.abs(result[m - 1][n - 1].minDam.v) + 1;
};

let dungeon = [
  [-2, -3, 3],
  [-5, -10, -11],
  [10, 30, -5],
];

console.log(calculateMinimumHP(dungeon));
