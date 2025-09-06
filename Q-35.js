/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (target > nums[i] && target <= nums[i + 1]) {
      return i + 1;
      break;
    }
    if (nums[i] > target) {
      return i;
    }
    if (target === nums[i]) {
      return i;
    }
    if (nums[i + 1] === undefined) {
      return i + 1;
    }
  }
};
