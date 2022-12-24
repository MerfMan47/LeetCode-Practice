/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    // converts linked list to aray
    function linkedListToArray(root) {
        let res = []
        for (let node = root; node !== null; node = node.next) {
            res.push(node.val)
        }
        return res
    }

    const n1 = linkedListToArray(l1)
    const n2 = linkedListToArray(l2)

    // adds the arrays with the carry method
    let sumArr = []
    let index = 0
    let carry = 0
    while (n1.length > index || n2.length > index) {
        let sum = carry
        if (n1[index]) {
            sum += n1[index]
        }
        if (n2[index]) {
            sum += n2[index]
        }
        carry = sum >= 10 ? 1 : 0
        sumArr.push(sum % 10)
        index++
    }
    // accounts for final remainder
    if (carry) {
        sumArr.push(carry)
    }

    // initializes linked list and adds values
    let result = null
    function makeReturnList(val) {
        let node = new ListNode(val)
        node.next = result;
        result = node;
    }

    // calls function and returns linked list
    sumArr.reverse().forEach(makeReturnList)
    return result
};