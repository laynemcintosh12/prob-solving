// add whatever parameters you deem necessary
function longestFall(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let longest = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            current++;
        } else {
            longest = Math.max(longest, current);
            current = 0;
        }
    }

    return longest + 1;
}
