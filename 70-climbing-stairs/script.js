/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let j = 1;
    let prevJ = 0;
    let temp = 0;
    for (let i = 1; i <= n; i++) {
        temp = j;
        j = j + prevJ;
        prevJ = temp;
    }
    return j;
};