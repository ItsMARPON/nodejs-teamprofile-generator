const Employee = require("./employee"); 
const inquirer = require("inquirer");
const fs = require("fs");

class Intern extends Employee {
    constructor(role, school) {
        this.role = role;
        this.school = school;

    }
}
const Intern = new Intern("Intern",() => {
    const internQuestion = [
        {
            type: "input",
            message: "What is the name of your school?",
            name: "school",
        }
        ];
        
        
        // A function to append to HTML file
        inquirer.prompt(internQuestion).then((data) => {
            fs.appendFile("./dist/index.html", `      <main>
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Employee Name${data.name}</h5>
                <p class="card-text">
                  Some quick example text 
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Emp ID:${data.id}</li>
                <li a href="#" class="list-group-item">Email:${data.email}</a></li>
                <li class="list-group-item">Role:${data.role}</li>
                <li class="list-group-item">School:${data.school}</li>
              </ul>
            </div>
          </main>`, (err) =>
              err ? console.log(err) : console.log("Success!")
            );
          });
})





module.exports = 