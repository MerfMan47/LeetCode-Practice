/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashmap = {}
    for(const num of nums){
        if(hashmap[num]){
            return true
        }else{
            hashmap[num]=true
        }
    }
    return false
};