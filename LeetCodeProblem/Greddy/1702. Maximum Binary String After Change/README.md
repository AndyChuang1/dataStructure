# 1702. Maximum Binary String After Change

You are given a binary string binary consisting of only 0's or 1's. You can apply each of the following operations any number of times:

Operation 1: If the number contains the substring "00", you can replace it with "10".
For example, "00010" -> "10010"
Operation 2: If the number contains the substring "10", you can replace it with "01".
For example, "00010" -> "00001"
Return the maximum binary string you can obtain after any number of operations. Binary string x is greater than binary string y if x's decimal representation is greater than y's decimal representation.

# Thought

1.  依據操作 我們可以把 0 都往左邊移，成為 00，此操作可能會導致超時

```
00010
00001
10101
10011
11011
```

2.  可以觀察到 根據操作，最多都會有一個 0

```
0000
1010
1001
1110
```

```
10010
10001
10101
10011
11011
```

3. 最後發現 0 有 n 個 就可以把它轉換成 n-1 個 1, 用 str.repeat 可組成答案來，只要紀錄有幾個 0, 發現 第一個 0 的位置(因為如果前面是 1 我們不需要操作),最後補 1
