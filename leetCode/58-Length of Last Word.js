var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
 };

 var lengthOfLastWord1 = function(s) {
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

 console.log(lengthOfLastWord('hello world'))