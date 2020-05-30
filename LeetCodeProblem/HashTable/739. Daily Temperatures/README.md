739. Daily Temperatures

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = `[73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

## Thoughts 1

1. 使用 For 與 while 不斷與隔天比較
2. 如果沒比較到就為 0
3. Time complexity :Big(n^2)

## Thoughts 2

1. 使用 stack
2. 產生 Ｔ.length 的陣列 ; new Array.fill(0)
3. 從最後一天往前找，把當天數值放進 stack，與接下來的數值比較，如果找到比自己小代表此 index 可互減
4. 題目[73, 74, 75, 71, 69, 72, 76, 73]，73 推進 stack stack = [73]，下一天溫度為 76
5. 當下溫度 76 與 stack[len-1] 比較發現 76 比較大代表沒有更溫暖的天氣，把 73 pop 出來，76 推進 stack stack = [76]，下個溫度為 72
6. 當下溫度 72 與 stack[len-1] 比較發現 76 比較小代表 76 為更溫暖的天氣，把兩倆 idx 互減得到該等待天數，重複以上 steps 3-6

[Reference](https://www.youtube.com/watch?v=WGm4Kj3lhRI&t=927s)
