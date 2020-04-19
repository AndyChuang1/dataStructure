/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// not efficent
var isAnagram = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();
  let result = false;
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === 0 && t.length === 0) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], 1);
    } else {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!tMap.has(t[j])) {
      tMap.set(t[j], 1);
    } else {
      tMap.set(t[j], tMap.get(t[j]) + 1);
    }
  }
  let count = 0;
  sMap.forEach((value, key) => {
    if (tMap.has(key) && tMap.get(key) === value) {
      count++;
    }
  });
  return count === sMap.size ? true : false;
};

console.log(isAnagram('anagtam', 'nbgbram'));
// "anagtam"
// "nbgbram"
// not efficent
