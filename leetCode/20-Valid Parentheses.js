var isValid = function(s) {
    while (s.indexOf("{}") !== -1 || s.indexOf("()") !== -1 || s.indexOf("[]") !== -1){
        s = s.replace(s.indexOf("{}") !== -1 ? "{}" : s.indexOf("()") !== -1 ? "()" : s.indexOf("[]") !== -1 ? "[]" : null, '')
    }    
    return s === ""
};

var isValid1 = function(s) {
    let tempS = s.split('')
    if(tempS.length %2 != 0) return false
    const map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let arr = []
    for(let i of tempS){
        if(map[i]) arr.push(map[i])
        else {
            console.log(arr, i)
            if(arr.pop() !== i) 
            return false
        }
    }
    console.log(arr)
    return arr.length === 0
}

let s = "{(())}(]"

console.log(isValid1(s))