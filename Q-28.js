/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let found = false;
  let output = -1;
  for (i = 0; i < haystack.length; i++) {
    if (found === false) {
      if (haystack[i] === needle[0]) {
        for (j = 0; j < needle.length; j++) {
          if (haystack[i + j] === needle[j]) {
            if (j === needle.length - 1) {
              found = true;
              output = i;
              break;
            }
          } else {
            break;
          }
        }
      }
    }
  }
  return output;
};
