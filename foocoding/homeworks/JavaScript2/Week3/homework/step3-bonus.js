'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
