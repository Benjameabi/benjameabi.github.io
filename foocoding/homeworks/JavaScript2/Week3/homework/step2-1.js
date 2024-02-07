'use strict';

function foo(func) {
  // Call the provided function
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
