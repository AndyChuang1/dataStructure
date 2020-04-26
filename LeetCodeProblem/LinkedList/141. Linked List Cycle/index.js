/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let set = new Set();
  let node = head;

  while (node.next) {
    if (set.has(node)) {
      return true;
    }
    set.add(node);
    node = node.next;
  }
  return false;
};
var hasCycle_twoPointer = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }

  return false;
};
