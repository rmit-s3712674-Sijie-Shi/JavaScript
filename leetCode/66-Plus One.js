var plusOne = function(digits) {
    let sum = BigInt(digits.join('')) + 1n //JS supports 16 length of number, above that using bigInt. 十进制后加1n变
    return sum.toString().split('')
 };

 console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))