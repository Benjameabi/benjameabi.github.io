function findMaxAge(users) {
    const maxAge = Math.max(...users.map(user => user.age));
    return maxAge;
  }
  
  module.exports = findMaxAge;
  