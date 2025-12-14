/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

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
