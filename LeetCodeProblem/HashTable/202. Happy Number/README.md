# 202. Happy Number

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example:

<pre><code>
Input: 19
Output: true
Explanation:
1 <sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1

</code></pre>

## Thoughts

1. 先產生一個 hashTable 這裡使用 set;
2. 先把 number 切割 成 [1,9] 使用 math.pow 達到 1 <sup>2</sup> + 9<sup>2</sup> = 82
3. 算出來的結果 如果 set 裡面不包含此結果就 add， 有的話 就代表搭是一個 cycle return false;
4. 如果結果為 1 就代表 是 happy number
