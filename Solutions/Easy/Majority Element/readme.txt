==================Notes==================
I could see a way for this to be done
with a hashmap but it is better completed
without one due to the stipulation of the
most common element appearing MORE THEN
n/2 times with n being the length of the
array. Thus the length of an array
becomes much less of a factor in terms of
time complexity.
==================Notes==================
169. Majority Element
Easy
13K
417
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
Accepted
1.5M
Submissions
2.4M
Acceptance Rate
63.9%
Seen this question in a real interview before?
1/4
Yes
No