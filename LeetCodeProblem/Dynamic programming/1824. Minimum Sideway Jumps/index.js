/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  //
  let r1 = 1;
  let r2 = 0;
  let r3 = 1;
  const INFI = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= obstacles.length; ++i) {
    const tempR1 = r1;
    const tempR2 = r2;
    const tempR3 = r3;
    const Obstacles = obstacles[i];

    if (Obstacles === 1) {
      r1 = INFI;
      r2 = Math.min(tempR2, tempR3 + 1);
      r3 = Math.min(tempR3, tempR2 + 1);
    } else if (Obstacles === 2) {
      r1 = Math.min(tempR1, tempR3 + 1);
      r2 = INFI;
      r3 = Math.min(tempR3, tempR1 + 1);
    } else if (Obstacles === 3) {
      r1 = Math.min(tempR1, tempR2 + 1);
      r2 = Math.min(tempR2, tempR1 + 1);
      r3 = INFI;
    } else {
      r1 = Math.min(tempR1, tempR2 + 1, tempR3 + 1);
      r2 = Math.min(tempR2, tempR1 + 1, tempR3 + 1);
      r3 = Math.min(tempR3, tempR2 + 1, tempR1 + 1);
    }
  }

  return Math.min(r1, r2, r3);
};
