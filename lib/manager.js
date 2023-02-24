const Employee = require("./employee");


class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
    if (typeof office < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
  }
  getOffice() {
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}


module.exports = Manager;
