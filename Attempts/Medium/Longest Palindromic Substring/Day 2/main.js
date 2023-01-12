/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let lStr = ''

    function reverse(str){
        return str.split('').reverse().join('')
    }

    if(s.length==1){
        return s
    }

    for(let i=0; i<=s.length; i++){
        for(let j=i; j<=s.length; j++){
            
            if(reverse(s.substring(i,j))==s.substring(i,j)&&s.substring(i,j).length>lStr.length){
                lStr=s.substring(i,j)
            }
        }
    }
    return lStr
};