function F(num) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return F(num - 1) + F(num - 2);
  }
}
console.log(F(5)); // 5
