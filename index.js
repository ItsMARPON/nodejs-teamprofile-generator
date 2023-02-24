// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// const helperHTML = require("./src/helperHTML");

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
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.office
      );
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
        createHtml();
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

const createHtml = () => {
  employeeData.forEach(function (data) {
    fs.writeFile(
      "./dist/index.html",
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="../assets/css/style.css" />
          <title>Nodejs Team Profile Generator</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"
          />
        </head>
    
        <body>
          <main>
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Employee: ${data.name}</h5>
                <p class="card-text">
                  We make a great team!
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Emp ID: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}<a href="mailto:${data.email}"></a></li>
                <li class="list-group-item">Role: ${data.role}</li>
              </ul>
            </div>
          </main>
    
          <footer></footer>
    
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
            integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>`,
      (err) => {
        err ? console.error(err) : console.log("Success!");
      }
    );
  });
};
