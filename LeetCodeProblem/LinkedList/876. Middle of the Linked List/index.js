/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let cur = head;
  let len = 1;

  while (cur.next) {
    cur = cur.next;
    len++;
  }
  //~~(Number) 無條件捨去,比math.floor效率好
  for (let i = 0; i < ~~(len / 2); i++) {
    head = head.next;
  }
  return head;
};
