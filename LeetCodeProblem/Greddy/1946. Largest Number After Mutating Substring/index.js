/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
  let strArr = num.split('');
  // record num have been replaced
  let flag = false;
  for (let i = 0; i < num.length; i++) {
    const mutateNum = change[num[i]];
    const curNum = strArr[i] - 0;

    if (mutateNum >= curNum) {
      strArr[i] = mutateNum;
      // if num different, means num have been replaced exactly;
      if (curNum != strArr[i]) flag = true;
    } else {
      if (flag) break;
    }
  }

  return strArr.join('');
};

maximumNumber('132', [9, 8, 5, 0, 3, 6, 4, 2, 6, 8]);

maximumNumber('334111', [0, 9, 2, 3, 3, 2, 5, 5, 5, 5]);

/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */

// Failed example, use string.replace will cause bug, because Only the first occurrence will be replaced.
var maximumNumber = function (num, change) {
  let maxNum = num;
  let flag = false;
  for (let i = 0; i < num.length; i++) {
    const mutateNum = change[num[i]];
    const curNum = num[i];
    let replaceNum;

    if (mutateNum >= curNum) {
      replaceNum = maxNum.replace(curNum, mutateNum);
      if (curNum !== replaceNum[i]) flag = true;
      maxNum = replaceNum;
    } else {
      if (flag) break;
    }
  }

  return maxNum;
};

maximumNumber('23', [7, 7, 3, 6, 0, 2, 6, 0, 6, 4]);
