const Employee = require("../lib/employee");

jest.mock("fs");

// gets name from getName()
describe("Employee", () => {
  describe("Initialization", () => {
    test("should obtain employee name", () => {
      const employee = new Employee("Mary", 1234, "mary@gmail.com");

      expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    });
  });
});

// gets ID from getId()
test("should obtain employee Id", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});


// gets email from getEmail()
test("should obtain employee email", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// gets role from getRole()
test("should obtain employee role", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
