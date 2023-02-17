// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officenumber",
  },
];

// A function to write HTML file
inquirer.prompt(questions).then((data) => {
  fs.writeFile("./dist/index.html", JSON.stringify(data, null, "\n"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});
