/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let hashmap = {}
    let length = 0
    let count = 0
    console.log(s)

    // for(const char of s){
    //     count++
    //     if(hashmap[char]){
    //         if(count-hashmap[char]>length) length = count-hashmap[char]
    //         hashmap['pass']=true
    //     }
    //     hashmap[char]=count 
    // }


    for(const char of s){
        count++
        if(hashmap[char]){
            if(hashmap[char]>length) length = hashmap[char]
            hashmap[char]=0
        }
        hashmap[char]=0
        hashmap[char]++
    }
    
    console.log(Object.values(hashmap))

    if(!hashmap['pass']) return s.length
    console.log(length)
    return length


};