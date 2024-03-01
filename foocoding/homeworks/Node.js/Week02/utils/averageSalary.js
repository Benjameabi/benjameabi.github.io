function calculateAverage(users) {
    const totalSalary = users.reduce((total, user) => total + user.salary, 0);
    return totalSalary / users.length;
  }
  
  module.exports = calculateAverage;
  