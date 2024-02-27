// add whatever parameters you deem necessary
function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const avg = (nums[left] + nums[right]) / 2;
        if (avg === targetAvg) {
            return true;
        } else if (avg < targetAvg) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
