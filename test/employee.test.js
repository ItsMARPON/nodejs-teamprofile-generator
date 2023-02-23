const Employee = require("../lib/employee");
const fs = require("fs");

jest.mock("fs");

// gets ID from getId()
describe("Employee", () => {
  describe("Initialization", () => {
    test("should obtain employee Id", () => {
      const employee = new Employee("Mary", 1234, "mary@gmail.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });
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
