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
var addTwoNumbers = function(l1, l2) {

    // converts linked list to aray
        function linkedListToArray(root){
            let res = []
            for (let node = root; node !== null; node = node.next){
                res.unshift(node.val)
            }
            return res
        }
    
    // converts each array to number and adds values
        const num1 = parseInt(linkedListToArray(l1).join(''), 10)
        const num2 = parseInt(linkedListToArray(l2).join(''), 10)
        const sum=(num1+num2)
    
    // converts back to array
        const sumArr = (sum.toString().split(''))
    
    // initializes linked list and adds values
        let result = null
        function makeReturnList(val){
            let node = new ListNode(val)
            node.next = result;
            result = node;
        }
    
    // calls function and returns linked list
        sumArr.forEach(makeReturnList)
        return result  
    };