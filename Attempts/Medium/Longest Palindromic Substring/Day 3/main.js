/**
 * @param {string} s
 * @return {string}
 */

let ansStr = ''
let arr
const letterSet = new Set()
let ansArr = []

function reverse(str){
    return str.split('').reverse().join('')
}

// function verification(subStr){
//     if(subStr == reverse(subStr)){
//         if(subStr.length > ansStr){
//             ansStr = subStr
//         }
//     }
// }

function verify(array){
    return array.reduce((longestPalStr, subStr) => {
        if((subStr.length > longestPalStr)&&(subStr == reverse(subStr))){
            return subStr
        }else{
            return longestPalStr
        }
    }, '')
}

function longest(array){
    return array.reduce((longestStr, str) => {
        if(str.length > longestStr){
            return str
        }else{
            return longestStr
        }
    }, '')
}

function indexLetters(str){
    for (let char of str){
        letterSet.add(char)
    }
}

function replaceEmpty(array, char){
    //loop through array, count empty, replace all empty in sepction with current char. add char to start and end of each item sans first and last ANSWER WILL NEVER BE FIRST OR LAST ARRAY ENTRY MAYBE CAN REMOVE THEM
    

    

}



var longestPalindrome = function(s) {
    indexLetters(s)
    
    console.log(s)
    console.log(letterSet)
    for(const item of letterSet){
        arr = s.split(item)

        // arr = s.substring()

        console.log('split: ' + item)
        console.log(arr)
        console.log(verify(arr))
        //for empties
        console.log(arr.length - arr.filter(String).length+1)

        // arr = replaceEmpty(arr, item)


        ansArr.push(verify(arr))

        console.log(ansArr)
        console.log(longest(ansArr))

        return longest(ansArr)
    }
};