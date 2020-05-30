/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  const stack = [];
  let result = '';

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (stack.length > 0) {
        result += '(';
      }

      stack.push('(');
    } else {
      if (stack.length > 1) {
        result += ')';
      }
      stack.pop();
    }
  }
  console.log(result);
  return result;
};

removeOuterParentheses;
