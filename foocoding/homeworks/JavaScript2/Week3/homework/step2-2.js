'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);

    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  return numbers;
}


function sayThree(number) {
  console.log(`Three: ${number}`);
}

function sayFive(number) {
  console.log(`Five: ${number}`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
