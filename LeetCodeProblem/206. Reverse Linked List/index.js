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

function reverseList(head) {
  if (!head) return;
  if (!head.next) {
    return head;
  }

  let current = head;
  let temp;
  let prev = null;

  while (current) {
    temp = current;
    current = current.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
}

var reverseListRecursively = function (head, prev = null) {
  if (!head) return prev;
  let temp = head.next;
  head.next = prev;
  return reverseList(temp, head);
};
