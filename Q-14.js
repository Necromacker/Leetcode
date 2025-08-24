/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  min = strs[0];
  for (i = 0; i < strs.length; i++) {
    if (min.length > strs[i].length) {
      min = strs[i];
    }
  }

  let prefix = "";
  function pref(alphabet) {
    return prefix + alphabet;
  }

  for (j in min) {
    let k = 0;
    let compair = min[j];
    let matching = true;
    for (k = 0; k < strs.length; k++) {
      if (compair !== strs[k][j]) {
        matching = false;
        break;
      }
    }
    if (matching) {
      prefix = pref(compair);
    }
    if (!matching) {
      break;
    }
  }
  return prefix;
};
