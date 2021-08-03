You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

Example 2:

```
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
[]
```

Step1

```
i=0
dp=[2]
Max(2)
```

Step2

```
i=1
dp=[2,7]
Max(2,7)
```

Step3

```
i=2
dp[i]= Max(2+9,7) = Max(nums[i]+nums[i-2], nums[i-1])
dp=[2,7,11]

```

Step4

```
i=3

dp[i]= Max(3+7,3) =Max(nums[i]+nums[i-2], nums[i-1])
dp= [2,7,11,10] X 這公式不對
Max(nums[i]+dp[i-2], dp[i-1])
Max(3+7, 11)
dp= [2,7,11,11] 想要的結果

因為現在的數字nums[i]加上前面算出的累加結果，但是因為不能相鄰所以 加上dp[i-2]的, 與前面一格做比大小, 如果前面一格比較大代表偶數的累加會比較大
```

Step5

```
i=4
dp =[2,7,11,11]
dp[i]= Max(1+11, 11)
dp =[2,7,11,11,12]
```

return dp[nums.length-1]

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
