# 70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

Example 2:

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

Constraints:

`1 <= n <= 45`

## THoughts

1. 仔細觀察可發現是費式數列

```
n = 1 : [1]  output = 1
n = 2 : [1+1,2] output = 2
n = 3 : [1+1+1,2+1 ,1+2] output = 3
n = 4 : [1+1+1+1,2+2,1+2+1,1+1+2,2+1+1] output = 5
n = 5 :[1+1+1+1+1,2+2+1,1+2+2,2+1+1,1+1+1+2,2+1+1+1,1+2+1+1,1+1+2+1]  output = 8
```

2. 當 n <= 3 output 都是 n , 之後 output 是 f(n-1) + f(n-2)
3. 使用 cache 減少運算 DP
