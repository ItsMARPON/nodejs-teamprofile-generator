// Include packages needed for this application
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const employeeTeam = require("./src/helperHTML");

// the full team Employee Data
let employeeData = [];

// An array of questions for user input
const questions = () => {
  inquirer
    .prompt([
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
        type: "list",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
        default: ["Manager"],
        name: "role",
      },
    ])
    .then((data) => {
      console.log("-------------------------EMPLOYEE-------------------------");
      const employee = new Employee(data.name, data.id, data.email);
      if (data.role === "Manager") {
        promptManager();
      } else if (data.role === "Engineer") {
        addEngineer();
      } else if (data.role === "Intern") {
        addIntern();
      } else {
        process.exit();
      }
    });
};
// Questions for Manager Role
const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Manager, what is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "Manager, what is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "Manager, what is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "Manager, what is your office number?",
        name: "office",
      },
    ])
    .then((data) => {
      console.log("-------------------------MANAGER-------------------------");
      const manager = new Manager(data.name, data.id, data.email, data.office);
      employeeData.push(manager);
      console.log(employeeData);
      menu();
    });
};
// Menu for next step actions to add employee roles
const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do next?",
        choices: ["Add Engineer", "Add Intern", "exit"],
        name: "choice",
      },
    ])
    .then((data) => {
      if (data.choice === "Add Engineer") {
        addEngineer();
      } else if (data.choice === "Add Intern") {
        addIntern();
      } else {
        employeeTeam(employeeData);
      }
    });
};
// EQuestions for Engineer role
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "github",
      },
    ])
    .then((data) => {
      console.log("-------------------------ENGINEER-------------------------");
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employeeData.push(engineer);
      console.log(employeeData);
      menu();
    });
};
// Question for Intern role
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the name of the Intern's school?",
        name: "school",
      },
    ])
    .then((data) => {
      console.log("-------------------------INTERN-------------------------");
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employeeData.push(intern);
      console.log(employeeData);
      menu();
    });
};

questions();
