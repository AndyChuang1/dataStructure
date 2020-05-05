# 121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

```
Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

## Thoughts1

1. 一開始想法是兩個 for 找出每一天的 profit 存進到一個陣列裡找最大值
   以 Example1 為例 第一天 7 塊買進的話
   依序天賣出的 profit「-6,-2,-4,-1,-4」最大值是-1 在存進**結果**的陣列「-1,」,第二天買進 1 塊的話依序天賣出的 profit「4,2,5,3」 最大值是 4 存進**結果**的陣列「-1,4」 以次類推
2. 最後 return **結果**的陣列，如果小 0 return 0 否則 return 結果陣列的最大值
3. 因為跑兩個迴圈 時間複雜度是 Big(n<sup>2</sup>)

## Thoughts2

1. 參考別人解法,發現可以先找最小值 先從第一天當作預設最小值 預設 Ｍ axProfit = 0
2. 然後當前值有比最小值小 更新最小值，否則 當下值減最小值拿到當前 profit
3. Ｍ axProfit = 當前 profit 與Ｍ axProfit 的最大值
