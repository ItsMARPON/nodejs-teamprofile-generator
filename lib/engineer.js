const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(role, github) {
        this.role = role;
        this.github = github;

        getRole(){
            console.log(this.role);
        }

        getGitHub() {
            console.log(this.github);
        }


    }
}

const engineerQuestion = [
{
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
}
];


// A function to append to HTML file
inquirer.prompt(questions).then((data) => {
    fs.appendFile("./dist/index.html", JSON.stringify(data, null, "\n"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });


module.exports = 