/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for (let i=1; i<=target/2; i++){
        let decomp = target-i     
        
        if(nums.includes(i) && nums.includes(decomp)){
            return [nums.indexOf(i),nums.indexOf(decomp)]
            
        }
    } 
};



//OPTION 1 DECOMPOSITION OF TARGET
//Find two numbers that add up to desired value
//check values against array
//return index if true

//OPTION 2 BRUTE FORCE
//go through array two by two
//index 0,1 > 0,2 > 0,3 > 1,2 > 1,3 > ETC...
//return index of values that add up to desired number


//ATTEMPTING OPTION 1...
//OPTIMIZING...
//SUCCESS