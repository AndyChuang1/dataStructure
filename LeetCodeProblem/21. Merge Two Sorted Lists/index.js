/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //儲存結果的ListNode
  var head = new ListNode(null);
  // 目前Node位置
  var current = head;

  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  while (l1 && l2) {
    //較小的數字插進 head
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  //將l1,l2剩下的Node加到head
  current.next = l1 === null ? l2 : l1;
  return head.next;
};
