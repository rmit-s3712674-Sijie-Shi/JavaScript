var removeDuplicates = function(nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set.values())
    return nums;
};

let nums = [1,1,2]

console.log(removeDuplicates(nums))