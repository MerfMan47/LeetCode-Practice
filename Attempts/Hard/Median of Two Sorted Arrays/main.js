/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // let med1
    // let med2
    // let n1L = nums1.length
    // let n2L = nums2.length
    // let result

    // console.log('n1L: '+n1L)
    // console.log('n2L: '+n2L)

    
    // if(n1L==1){
    //     med1 = nums1[0] 
    //     console.log('case 1.1')
    // }else if(n1L%2==0){
    //     med1 = (nums1[n1L/2] + nums1[(n1L/2)-1])/2
    //     console.log('case 1.2')
    // }else{
    //     med1 = nums1[Math.floor(n1L/2)]
    //     console.log('case 1.3')
    // }


    // if(n2L==1){
    //     med2 = nums2[0]
    //     console.log('case 2.1')
    // }else if(n2L%2==0){
    //     med2 = (nums2[n2L/2] + nums2[(n2L/2)-1])/2
    //     console.log('case 2.2')
    // }else{
    //    med2 = nums2[Math.floor(n2L/2)] 
    //    console.log('case 2.3')
    // }

    // console.log('med1: '+med1)
    // console.log('med2: '+med2)
    
    // if(!n1L){
    //     console.log('pass')
    //     result = med2
    // }else if(!n2L){
    //     result = med1
    // }else{
    //     result = (med1+med2)/2
    // }
    
    // console.log(result)
    // return result



    let arr = nums1.concat(nums2).sort()

    if(n1L==1){
        med1 = nums1[0] 
        console.log('case 1.1')
    }else if(n1L%2==0){
        med1 = (nums1[n1L/2] + nums1[(n1L/2)-1])/2
        console.log('case 1.2')
    }else{
        med1 = nums1[Math.floor(n1L/2)]
        console.log('case 1.3')
    }

    //THis is a sorting challange, concat the arrays SORT using some method, then the divide and finde center thging


};