var longestCommonPrefix = strs => {
  if (!strs.length || !strs[0]) return '';
  let prefix = '',
    i = 0;
  while (strs[0][i] && strs.every(x => x[i] === strs[0][i])) {
    prefix += strs[0][i];
    i++;
  }
  return prefix;
};

console.log(longestCommonPrefix(['aa', 'aa', 'aa', 'aa']));
