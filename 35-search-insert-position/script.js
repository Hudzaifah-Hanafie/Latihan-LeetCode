/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return nums.indexOf(target < 0) ? nums.findLastIndex((obj) => obj < target) + 1 : nums.indexOf(target);
};