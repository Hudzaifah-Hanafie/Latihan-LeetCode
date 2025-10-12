/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    const romanArray = s.split("").reverse();
    for (let i = 0; i < s.length; i++) {
        if (romanMap[romanArray[i]] < romanMap[romanArray[i - 1]]) {
            num -= romanMap[romanArray[i]];
        } else {
            num += romanMap[romanArray[i]];
        }
    }
    return num;
};