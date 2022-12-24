/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let end = 0
    const set = new Set()
    let maxLength = 0

    while(end < s.length){
        if(set.has(s[end])){
            set.delete(s[start])
            start++
        }else{
            set.add(s[end])
            end++
        }
        maxLength = Math.max(maxLength, end-start)      
    }
    return maxLength
};