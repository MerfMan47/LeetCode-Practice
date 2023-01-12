/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0
    let end = 0
    let lStr = ''

    function reverse(str){
        return str.split('').reverse().join('')
    }


   while(end < s.length){
        if(s.substring(start,end)!=reverse(s.substring(start,end))){
            
            start++
        }else{
            
            end++
        }
        
        if(s.substring(start,end).length>lStr.length){
            lStr = s.substring(start,end)
        }
    }
    console.log(lStr)
    return lStr

    


};