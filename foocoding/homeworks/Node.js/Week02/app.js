const fs = require("fs");
const totalSalary = require("./utils/totalSalary");
const averageSalary = require("./utils/averageSalary");
const minSalary = require("./utils/minSalary");
const maxSalary = require("./utils/maxSalary");
const minAge = require("./utils/minAge");
const maxAge = require("./utils/maxAge");
const customParser = require("./utils/csv-parser");

const readData = function () {
  const users = [];
  let data = "";

  const readFile = fs.createReadStream(__dirname + "/users-data.csv", "utf8");
  const writeFile = fs.createWriteStream(__dirname + "/results.txt");

  readFile
    .on("data", (chunk) => {
      data += chunk;
    })
    .on("end", () => {
      const getUsers = data.split("\r\n").splice(1);

      getUsers.forEach((user) => {
        const defineUser = customParser(user);
        if (defineUser.length === 9) {
          const userObj = {
            name: defineUser[1],
            age: Number(defineUser[3]),
            profession: defineUser[7],
            salary: Number(defineUser[8]),
          };
          users.push(userObj);
        } else {
          console.log(defineUser);
        }
      });

      try {
        const getTotalSalary = totalSalary(users);
        const getAverageSalary = averageSalary(users).toFixed(2);
        const getMinSalary = minSalary(users);
        const getMaxSalary = maxSalary(users);
        const getMinAge = minAge(users);
        const getMaxAge = maxAge(users);

        const setMinSalary = getMinSalary.map(
          (element) =>
            `${element.profession} have the Minimum Salary: ${element.salary}`
        );

        const setMaxSalary = getMaxSalary.map(
          (element) =>
            `${element.profession} have the Maximum Salary: ${element.salary}`
        );

        const dataToBeWritten = `Total Salary: ${getTotalSalary}\nAverage Salary: ${getAverageSalary}\n\nMinimum Salaries:\n${setMinSalary.join(
          "\n"
        )}\n\nMaximum Salaries:\n${setMaxSalary.join(
          "\n"
        )}\n\nMinimum age: ${getMinAge}\nMaximum age: ${getMaxAge}\n`;

        writeFile.write(dataToBeWritten);
        console.log("Results written successfully to results.txt");
      } catch (error) {
        console.error("Error occurred while processing data:", error);
      }
    })
    .on("error", (err) => {
      console.error("Error reading file:", err);
    });
};

readData();
