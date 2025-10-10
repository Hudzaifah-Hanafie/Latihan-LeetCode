/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("") ? true : false;
};

const x = 121;
isPalindrome(x);