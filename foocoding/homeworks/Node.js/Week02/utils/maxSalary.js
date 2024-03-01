function findMaxSalary(users) {
    const maxSalary = Math.max(...users.map(user => user.salary));
    const maxSalaryUsers = users.filter(user => user.salary === maxSalary);
    return maxSalaryUsers.map(user => ({ profession: user.profession, salary: user.salary }));
  }
  
  module.exports = findMaxSalary;
  