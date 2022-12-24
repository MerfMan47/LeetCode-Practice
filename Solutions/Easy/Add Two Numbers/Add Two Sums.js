/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      
    let decomp2
 
    for (let i=0; nums.length-1; i++){
        decomp2 = target - nums[i]    

        if(nums.includes(decomp2) && i!==nums.indexOf(decomp2)){
            return [i,nums.indexOf(decomp2)]
        }
    }
}