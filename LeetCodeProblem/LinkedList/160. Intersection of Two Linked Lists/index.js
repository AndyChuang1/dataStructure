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
var getIntersectionNode_TwoPointer = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;

    if (pointerA === pointerB) {
      return pointerA;
    }
    if (!pointerA) {
      pointerA = headB;
    }
    if (!pointerB) {
      pointerB = headA;
    }
  }
  return pointerA;
};
