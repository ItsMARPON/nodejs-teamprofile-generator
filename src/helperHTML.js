const fs = require("fs");

// A function to create the employee team
let html = [];

const employeeTeam = (team) => {
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      let manager = generateManager(team[i]);
      html.push(manager);
    } else if (team[i].getRole() === "Engineer") {
      let engineer = generateEngineer(team[i]);
      html.push(engineer);
    } else if (team[i].getRole() === "Intern") {
      let intern = generateIntern(team[i]);
      html.push(intern);
    } else {
      console.log("There is an error");
    }
  }

  console.log(html);
  htmlframe(html.join(" "));
};

// A function for Manager role to append to HTML file
const generateManager = (manager) => {
  return `
        <div class="card col-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Employee: ${manager.name}</h5>
            <p class="card-text">
              We are a great team!
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Emp ID:${manager.id}</li>
            <li a href="#" class="list-group-item">Email:${
              manager.email
            }</a></li>
            <li class="list-group-item">Role:${manager.getRole()}</li>
            <li class="list-group-item">Office No:${manager.office}</li>
          </ul>
        </div>`;
};
// A function for Engineer role to append to HTML file
const generateEngineer = (engineer) => {
  return `
          <div class="card col-3" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Employee: ${engineer.name}</h5>
              <p class="card-text">
                We are a great team!
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Emp ID:${engineer.id}</li>
              <li a href="#" class="list-group-item">Email:${
                engineer.email
              }</a></li>
              <li class="list-group-item">Role:${engineer.getRole()}</li>
              <li class="list-group-item">GitHub:${engineer.getGitHub()}</li>
            </ul>
          </div>`;
};

// A function for Intern role to append to HTML file
const generateIntern = (intern) => {
  return `
          <div class="card col-3" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Employee: ${intern.name}</h5>
              <p class="card-text">
                We are a great team!
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Emp ID:${intern.id}</li>
              <li a href="#" class="list-group-item">Email:${
                intern.email
              }</a></li>
              <li class="list-group-item">Role:${intern.getRole()}</li>
              <li class="list-group-item">School:${intern.school}</li>
            </ul>
          </div>
          `;
};

// create HTML framework
const htmlframe = (html) => {
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
      <main class="row">
          ${html}
      </main>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossorigin="anonymous"
      ></script>
    </body>

  </html>`,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
};

module.exports = employeeTeam;
