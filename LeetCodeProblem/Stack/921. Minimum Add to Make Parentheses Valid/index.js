/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(S[i]);
    }

    if (S[i] === ')') {
      if (stack.length === 0) {
        result += 1;
      } else {
        stack.pop();
      }
    }
  }

  return result + stack.length;
};
