/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    } else {
        if (digits.every(digit => digit === 9)) {
            digits.fill(0);
            digits.unshift(1);
            return digits;
        } else {
            for (let i = digits.length - 1; i >= 0; i--) {
                if (digits[i] !== 9) {
                    digits[i]++;
                    digits.fill(0, i + 1);
                    return digits;
                }
            }
        }
        return digits;
    }
};