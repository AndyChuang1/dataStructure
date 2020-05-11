# 171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

Example 1:

```
Input: "A"
Output: 1
```

Example 2:

```
Input: "AB"
Output: 28
```

Example 3:

```
Input: "ZY"
Output: 701
```

## Thoughts

1. Ａ-Z 為 26 個字母
2. "A" = 26<sup>0</sup> \* 1(A) = 1
3. "AB" = 26<sup>1</sup> _ 1(A) + 26<sup>0</sup> _ 2(B) = 28
