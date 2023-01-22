var searchInsert = function(nums, target) {
        let min = 0
        let high = nums.length - 1 //3
        while(min <= high) {
            let mid = Math.floor((min + high)/2) //2
            let midValue = nums[mid] //3
            if(midValue < target) {
                min = mid + 1
            }else {
                high = mid - 1
            }
    };
    return min
};

console.log(searchInsert([1,2,3,5,6], 0))