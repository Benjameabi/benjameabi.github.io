function findMinAge(users) {
    const minAge = Math.min(...users.map(user => user.age));
    return minAge;
  }
  
  module.exports = findMinAge;
  