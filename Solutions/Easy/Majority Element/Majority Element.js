/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort()[Math.round((nums.length-1)/2)]
};