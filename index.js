// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let employeeData = [];

// An array of questions for user input
const questions = async () => {
  const data = await inquirer
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
        message:
          "Start by adding a Manager role, if none, proceed with other options",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then((data) => {
      console.log("-------------------------EMPLOYEE-------------------------");
      console.log(data);
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

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager office number?",
        name: "officenumber",
      },
    ])
    .then((data) => {
      console.log(data);
      console.log("-------------------------MANAGER-------------------------");
      const manager = new Manager(data.name, data.id, data.email, data.office);
      employeeData.push(manager);
      menu();
    });
};

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
        process.exit();
        //  need to add function to compile all employee data
      }
    });
};

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
      console.log(data);
      console.log("-------------------------ENGINEER-------------------------");
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employeeData.push(engineer);
      menu();
    });
};

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
      console.log(data);
      console.log("-------------------------INTERN-------------------------");
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employeeData.push(intern);
      menu();
    });
};

// // A function to write HTML file
// fs.writeFile(
//   "./dist/index.html",
//   `<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="../assets/css/style.css" />
//       <title>Nodejs Team Profile Generator</title>
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//         crossorigin="anonymous"
//       />
//     </head>

//     <body>
//       <main>
//         <div class="card" style="width: 18rem">
//           <div class="card-body">
//             <h5 class="card-title">Employee Name${gatherInfo.name}</h5>
//             <p class="card-text">
//               Some quick example text
//             </p>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">Emp ID:${gatherInfo.id}</li>
//             <li a href="#" class="list-group-item">Email:${gatherInfo.email}</a></li>
//             <li class="list-group-item">Role:${gatherInfo.role}</li>
//           </ul>
//         </div>
//       </main>

//       <footer></footer>

//       <script
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
//         integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
//         crossorigin="anonymous"
//       ></script>
//     </body>
//   </html>`,
//   (err) => (err ? console.log(err) : console.log("Success!"))
// );
