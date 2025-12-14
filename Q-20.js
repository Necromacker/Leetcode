/**
 * @param {string} s
 * @return {boolean}
 */

// Done Without Using Stack

var isValid = function (s) {
  let b1, b2, b3, c1, c2, c3;
  b1 = b2 = b3 = c1 = c2 = c3 = 0;
  let current_bracket = s[0];
  let output = true;
  function opening_bracket() {
    if (
      current_bracket === ")" ||
      current_bracket === "]" ||
      current_bracket === "}" ||
      current_bracket === undefined
    ) {
      output = false;
    }
    for (i = 0; i < s.length; i++) {
      if (s[i] === ")") {
        c1++;
      }
      if (s[i] === "]") {
        c2++;
      }
      if (s[i] === "}") {
        c3++;
      }
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        current_bracket = s[i];

        if (current_bracket === "(") {
          if (s[i + 1] === "]" || s[i + 1] === "}" || s[i + 1] === undefined) {
            output = false;
          }
          b1++;
        }
        if (current_bracket === "[") {
          if (s[i + 1] === ")" || s[i + 1] === "}" || s[i + 1] === undefined) {
            output = false;
          }
          b2++;
        }
        if (current_bracket === "{") {
          if (s[i + 1] === "]" || s[i + 1] === ")" || s[i + 1] === undefined) {
            output = false;
          }
          b3++;
        }
      }
    }
    if (b1 !== c1 || b2 !== c2 || b3 !== c3) {
      output = false;
      console.log(b1, c1);
    }

    if (s[0] === "[" && s[s.length - 1] !== "]") {
      if (b1 <= 1) {
        output = false;
      }
    }
  }
  opening_bracket();
  return output;
};


if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        current_bracket = s[i];

        if (current_bracket === "(") {
          if (s[i + 1] === "]" || s[i + 1] === "}" || s[i + 1] === undefined) {
            output = false;
          }
          b1++;
        }