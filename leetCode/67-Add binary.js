var addBinary = function(a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2) //二进制开头加0b
 };
 console.log(addBinary(11,1))