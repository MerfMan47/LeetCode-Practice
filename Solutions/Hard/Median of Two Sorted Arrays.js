/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  
    let med
    let arr = nums1.concat(nums2).sort((a,b) => a-b)
    let aL = arr.length

    if(arr==1){
        med = arr[0] 
    }else if(aL%2==0){
        med = (arr[aL/2] + arr[(aL/2)-1])/2
    }else{
        med = arr[Math.floor(aL/2)]
    }

    return med
};