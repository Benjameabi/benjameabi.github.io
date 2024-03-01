function calculateTotal(users) {
    return users.reduce((total, user) => total + user.salary, 0);
  }
  
  module.exports = calculateTotal;
  