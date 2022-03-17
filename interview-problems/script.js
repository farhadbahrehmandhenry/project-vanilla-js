/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

var twoSum = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [];
}

// console.log('result for twoSum: ', twoSum([2, 7, 11, 15], 9));

// prime number => 

var isPrime = (n) => {
  if (n < 1) return false;

  if (n % 2 !== 0 && n % 2 !== 3 && n % 2 !== 5) {
    return true
  }

  return false;
}

// console.log(isPrime(341))

var validAnagram = (str1, str2) => {
  var str1Frequency = {};

  for (var i = 0; i < str1.length; i++) {
    if (str1Frequency[str1[i]]) {
      str1Frequency[str1[i]] = str1Frequency[str1[i]] + 1;
    }
    else {
      str1Frequency[str1[i]] = 1;
    }
  }

  for (var i = 0; i < str2.length; i++) {
    if (str1Frequency[str2[i]]) {
      str1Frequency[str1[i]] = str1Frequency[str1[i]] - 1;
    }
    else {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram('anagram', 'nagaram'))

var maxSubArraySum = (arr, num) => {
  var i = 0;
  var j = 1;
  var max = -999999;

  while (j < arr.length) {
    if (arr[i] + arr[j] > max) {
      max = arr[i] + arr[j];

    }

    i++;
    j++;
  }

  return max;
}

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))

var longestSubstring = (str) => {
  var i = 0;
  var j = 1;
  var lengths = [];
  var length = 1;

  while (j < str.length) {
    if (!str.substring(i, j).includes(str[j])) {
      j++;
      length++;
    }
    else {
      lengths.push(length);
      length = 0;

      if (j - i > 1) i++;
      else {
        i = j;
        j++;
      }
    }
  }


  return Math.max(...lengths);
}

console.log(longestSubstring('hellothere'))


