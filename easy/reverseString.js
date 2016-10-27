/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var reverse = ''
    for (var i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
};


// type check for string
// check length at least 2
// use array
// reduce time complexity by only doing half