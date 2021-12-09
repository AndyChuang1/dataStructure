/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  function checkValidSpeed(k) {
    let costHour = 0;

    for (let qty of piles) {
      const speed = Math.ceil(qty / k);
      costHour += speed;
    }
    if (costHour <= h) {
      return true;
    } else {
      return false;
    }
  }

  let l = 1;
  let r = Math.max(...piles);

  while (r >= l) {
    const mid = l + ((r - l) >> 1);

    if (checkValidSpeed(mid)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
minEatingSpeed([3, 6, 7, 11], 8);
