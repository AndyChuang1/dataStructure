/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  const Sstack = [];
  const Tstack = [];

  for (let i = 0; i < S.length; i++) {
    if (Sstack.length > 0 && S[i] == '#') {
      Sstack.pop();
    } else if (S[i] !== '#') {
      Sstack.push(S[i]);
    }
  }

  for (let i = 0; i < T.length; i++) {
    if (Tstack.length > 0 && T[i] == '#') {
      Tstack.pop();
    } else if (T[i] !== '#') {
      Tstack.push(T[i]);
    }
  }

  return JSON.stringify(Sstack) == JSON.stringify(Tstack);
};

backspaceCompare('y#fo##f', 'y#f#o##f');
