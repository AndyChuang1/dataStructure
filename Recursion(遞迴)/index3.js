function rec(a, b) {
  if (a == b || b == 0) {
    return 1;
  }
  return rec(a - 1, b) + rec(a - 1, b - 1);
}

console.log(rec(5, 3));
