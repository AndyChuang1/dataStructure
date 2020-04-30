/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let firstNode = new ListNode(0);
  firstNode.next = head;
  let cur = head;
  let pre = firstNode;
  let keepNode;

  while (cur && cur.next) {
    keepNode = cur.next.next;
    //2指向1
    cur.next.next = cur;
    pre.next = cur.next;
    cur.next = keepNode;

    pre = cur;
    cur = cur.next;
  }
  return firstNode.next;
};
