================Notes================
This is my second attempt at this
problem after finding that my prevous
solution did not function with values
exceeding the maximum integer value.
This version accounts for the bug
by manually adding each value and
carrying the remainder to the next
array index.
================Notes================
2. Add Two Numbers
Medium
23.3K
4.5K
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
Accepted
3.3M
Submissions
8.3M
Acceptance Rate
39.9%
Seen this question in a real interview before?
1/4
Yes
No