/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var twice;
    var found = {};
    for (var i = 0; i < nums.length; i++) {
        if (found[nums[i]] === undefined) {
            found[nums[i]] = 1;
        } else {
            found[nums[i]]++;
        }
    }
    
    for(var key in found) {
        if (found[key] === 1) {
            twice = key;
        }
    }
    
    return parseInt(twice);
};

// other techniques
// sort first then compare
// bit manipulation with ^=