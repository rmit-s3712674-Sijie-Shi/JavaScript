/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let arr = x.toString().split('')
    let arr1
    let arr2
    if(arr.length % 2 == 0 && x >= 0) {
        arr1 = arr.slice(0,arr.length * 0.5)
        arr2 = arr.slice(arr.length * 0.5, arr.length)
        return arr1.toString() === arr2.reverse().toString()
    } else if ( x >= 0) {
        arr1 = arr.slice(0,arr.length * 0.5)
        arr2 = arr.slice(arr.length * 0.5 + 1, arr.length)
        return arr1.toString() === arr2.reverse().toString()
    } else return false
};