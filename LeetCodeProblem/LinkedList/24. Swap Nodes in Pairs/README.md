# 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.
For example.
Your algorithm should use only constant space. **You may not modify the values in the list, only nodes itself can be changed** .

```
 Given 1->2->3->4, you should return the list as 2->1->4->3.

```

## Thoughts

1. 題目要求不能改變節點裡面的值，所以 node.val 這種寫法應該是不行的
2. 首先先弄一個不動的首節點 firstNode，後面節點移來移去時才不會受影響
3. 以[1,2,3,4]，一開始要交換的為[1.2]，因此需要先儲存[3,4]稍後再處理
4. 儲存後將 list 要處理的部分[1,2]跟不處理的部分[3,4]切開 ，切開的同時讓[2]的 next 指向[1]
5. 將前一個節點 prev 的 next 指向[2]，因為[2]的 next 已經指向[1]，因此這邊已經完成[1,2] -> [2,1]的步驟
6. 接下來把之前儲存的[3,4]接到[1]後面，就可以繼續處理[3,4]
