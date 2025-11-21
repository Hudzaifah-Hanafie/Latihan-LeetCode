/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = 0, n = 0;
    let merged = [];

    while (m < nums1.length || n < nums2.length) {
        if (n >= nums2.length || (m < nums1.length && nums1[m] <= nums2[n])) {
            merged.push(nums1[m]);
            m++;
        } else {
            merged.push(nums2[n]);
            n++;
        }
    }

    let len = merged.length;

    if (len % 2 === 1) {
        return merged[Math.floor(len / 2)];
    } else {
        return (merged[len/2 - 1] + merged[len/2]) / 2;
    }
};