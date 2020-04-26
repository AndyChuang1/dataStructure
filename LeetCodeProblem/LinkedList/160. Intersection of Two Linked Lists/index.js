/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let setA = new Set();

  let curA = headA;
  let curB = headB;

  while (curA) {
    setA.add(curA);
    curA = curA.next;
  }
  while (curB) {
    if (setA.has(curB)) {
      return curB;
    }
    curB = curB.next;
  }
};
