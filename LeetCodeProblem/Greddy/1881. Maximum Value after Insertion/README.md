# 1881. Maximum Value after Insertion

You are given a very large integer n, represented as a string,​​​​​​ and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number.

You want to maximize n's numerical value by inserting x anywhere in the decimal representation of n​​​​​​. You cannot insert x to the left of the negative sign.

For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making n = 763.
If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.
Return a string representing the maximum value of n​​​​​​ after the insertion.

Example 1:

```
Input: n = "99", x = 9
Output: "999"
Explanation: The result is the same regardless of where you insert 9.
```

Example 2:

```
Input: n = "-13", x = 2
Output: "-123"
Explanation: You can make n one of {-213, -123, -132}, and the largest of those three is -123.
```

Constraints:

- 1 <= n.length <= 105
- 1 <= x <= 9
- The digits in n​​​ are in the range [1, 9].
- n is a valid representation of an integer.
- In the case of a negative n,​​​​​​ it will begin with '-'.

## Thoughts

1. For loop insert x before s[i] every time, and compare previous result.

```
question : -13  2
-213
-123  compare -213
-132  compare -123
```

2. If negtive, `s[i]>x` insert s[i] before,otherwise `s[i]<x` insert s[i] before

```
question : -13  2
s[1]<2 -213
s[2]>2 -123 ✔
```

```
question : 13  2
s[1]<2 213  ✔
s[2]>2 123
```

## Learning point

1. Take a look at constrains, extract number will be overflowed
2. we can use str.slice instead of arr.splice
