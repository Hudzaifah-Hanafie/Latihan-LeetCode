/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strArray = s.split(" ");
    let i = strArray.length - 1;
    while (i >= 0) {
        if (strArray[i] !== '') {
            return strArray[i].length;
        }
        i--;
    }
};