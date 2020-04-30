var firstUniqChar = function (s) {
  const length = s.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  console.log(Array.from(map.values()));

  for (let i = 0; i < length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));
