const Manager = require("../lib/manager");
const fs = require("fs");

jest.mock("fs");

describe("Manager", () => {
  describe("Initialization", () => {
    test("should obtain manager Id", () => {
      const employee = new Employee("Mary", 1234, "mary@gmail.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });
});

// gets email from getEmail()
test("should obtain manager email", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
// gets office number from getOfficeNumber()
test("should obtain Manager's office number", () => {
  const manager = new Manager("Mary", 1234, "mary@gmail.com", "L-1234");

  expect(manager.getOfficeNumber()).toEqual(
    expect.stringContaining(manager.office.toString())
  );
});
