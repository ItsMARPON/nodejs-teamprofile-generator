const Intern = require("../lib/intern");
const fs = require("fs");

jest.mock("fs");

describe("Intern", () => {
  describe("Initialization", () => {
    test("should obtain intern Id", () => {
      const employee = new Employee("Mary", 1234, "mary@gmail.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });
});

// gets email from getEmail()
test("should obtain intern email", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
// gets school name from getSchool()
test("should obtain intern's School name", () => {
  const intern = new Intern(
    "Mary",
    1234,
    "mary@gmail.com",
    "University of Minnesota"
  );

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});
