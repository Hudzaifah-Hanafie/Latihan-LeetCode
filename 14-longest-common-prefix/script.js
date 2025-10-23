/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0].length === 0) return "";
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str.startsWith(strs[0].substring(0, i + 1)))) {
            prefix += strs[0].charAt(i);
        } else {
            return prefix;
        }
    }
    return prefix;
};