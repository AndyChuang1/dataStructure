/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const len = s.length - 1;
  let result = 0;
  for (let i = len; i >= 0; i--) {
    //拿到該數字的val
    //A.charCodeAt() = 65 ,so need to minues 64
    const strVal = s[len - i].charCodeAt() - 64;
    result += Math.pow(26, i) * strVal;
  }
  console.log(result);
  return result;
};
titleToNumber('ABA');
