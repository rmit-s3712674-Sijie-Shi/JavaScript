var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= target) {
            for(let a = i + 1; a < nums.length; a++) {   
                console.log(nums[i])
                console.log(nums[a])  
                if(nums[i] + nums[a] === target) {
                    result.push(i, a)
                    return result
                }
            }
        }
    } 
};