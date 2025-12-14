/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let Total = 0;
  let Arr = [];
  for (i of s) {
    Arr.push(i);
  }
  for (i = 0; i <= Arr.length; i++) {
    if (Arr[i] == "I") {
      if (Arr[i + 1] == "V") {
        Total += 4;
        i = i + 1;
      } else if (Arr[i + 1] == "X") {
        Total += 9;
        i = i + 1;
      } else {
        Total += 1;
      }
    } else if (Arr[i] == "V") {
      Total += 5;
    } else if (Arr[i] == "X") {
      if (Arr[i + 1] == "L") {
        Total += 40;
        i = i + 1;
      } else if (Arr[i + 1] == "C") {
        Total += 90;
        i = i + 1;
      } else {
        Total += 10;
      }
    } else if (Arr[i] == "L") {
      Total += 50;
    } else if (Arr[i] == "C") {
      if (Arr[i + 1] == "D") {
        Total += 400;
        i = i + 1;
      } else if (Arr[i + 1] == "M") {
        Total += 900;
        i = i + 1;
      } else {
        Total += 100;
      }
    } else if (Arr[i] == "D") {
      Total += 500;
    } else if (Arr[i] == "M") {
      Total += 1000;
    }
  }
  return Total;
};
