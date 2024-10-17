/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let init = numbers[0];
    return numbers.reduce((prev, val) => Math.max(prev, val), init);
}

let a = [3, 7, 2, 9, 1]
console.log(findLargestElement(a))

module.exports = findLargestElement;