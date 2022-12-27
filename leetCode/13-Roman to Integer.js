/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let arr = s.split('')
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        if(numbers[arr[i]] < numbers[arr[i + 1]]) {
            result = result + numbers[arr[i + 1]] - numbers[arr[i]]
            i++
        } else {
            result += numbers[arr[i]]
        }
    }
    return result
};

let numbers = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}