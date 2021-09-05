/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */

// Number will be ovelflowed, because of 1 <= n.length <= 10^5
var maxValue = function (n, x) {
  let result = Number.MIN_SAFE_INTEGER;
  let negtive = 0;

  for (let i = 0; i <= n.length; i++) {
    if (n[i] === '-') {
      negtive = 1;
      continue;
    }
    const strArr = n.split('');
    strArr.splice(i, 0, x);
    let changeNum = strArr.join('');
    // if (parseInt(result) <= parseInt(changeNum)) result = changeNum;
    if (negtive) {
      if (result - 0 >= changeNum - 0) result = changeNum;
    } else {
      if (result - 0 <= changeNum - 0) result = changeNum;
    }
  }

  return result.toString();
};

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue2 = function (n, x) {
  let isNegtive = n[0] === '-' ? 1 : 0;
  let nArr = n.split('');

  if (isNegtive) {
    for (let i = 1; i < n.length; ++i) {
      if (n[i] > x) {
        nArr.splice(i, 0, x);
        break;
      }
      if (i === n.length - 1) nArr.splice(i + 1, 0, x);
    }
  } else {
    for (let i = 0; i < n.length; ++i) {
      if (n[i] < x) {
        nArr.splice(i, 0, x);
        break;
      }

      if (i === n.length - 1) nArr.splice(i + 1, 0, x);
    }
  }

  return nArr.join('');
};

// maxValue('99', 9);
// maxValue('-132', 3);
// maxValue('962942516613939', 3);
// maxValue('-2327779885511541', 8);

var maxValue3 = function (n, x) {
  let negtive = 0;
  let i = 0;

  if (n[0] == '-') negtive = 1;

  if (negtive) {
    for (i = 1; i < n.length; ++i) {
      if (n[i] > x) break;
    }
  } else {
    for (i = 0; i < n.length; ++i) {
      if (n[i] < x) break;
    }
  }

  return n.slice(0, i) + x + n.slice(i);
};
maxValue2('99', 8);
