var removeElement = function(nums, val) {
    nums = nums.filter(res => res !== val)
    return nums
};
var removeElement1 = function(nums, val) {
    for(let i = 0; i < nums.length;) {
        nums[i] === val ? nums.splice(i,1) : i++
    }
    return nums
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))