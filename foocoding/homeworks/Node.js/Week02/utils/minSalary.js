function findMinSalary(users) {
    const minSalary = Math.min(...users.map(user => user.salary));
    const minSalaryUsers = users.filter(user => user.salary === minSalary);
    return minSalaryUsers.map(user => ({ profession: user.profession, salary: user.salary }));
  }
  
  module.exports = findMinSalary;
  