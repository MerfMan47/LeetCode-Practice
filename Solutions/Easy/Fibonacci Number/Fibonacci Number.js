// Readable
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    const x = 1/Math.sqrt(5)
    
    const y = ((1+Math.sqrt(5))/2)
    
    return Math.round(x*Math.pow(y,n))
};

// One Liner
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {   
    return Math.round((1/Math.sqrt(5))*Math.pow(((1+Math.sqrt(5))/2),n))
};