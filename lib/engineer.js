const Employee = require("./employee");


class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email);
    this.github = github;
    if (typeof github !== "string" || !github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
  }
  getGitHub(){
    return this.github
  }
  getRole(){
    return "Engineer"
  }
}


module.exports = Engineer;
