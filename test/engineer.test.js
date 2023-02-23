const Engineer = require("../lib/engineer");
const fs = require("fs");


jest.mock("fs");

describe("Engineer", () => {
  describe("Initialization", () => {
    test("should obtain engineer Id", () => {
      const employee = new Employee("Mary", 1234, "mary@gmail.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });
});

// gets email from getEmail()
test("should obtain engineer email", () => {
  const employee = new Employee("Mary", 1234, "mary@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
// gets GitHub Username from getGitHub()
test("should obtain engineer GitHub Username", () => {
  const engineer = new Engineer("Mary", 1234, "mary@gmail.com","itsMARPON");

  expect(engineer.getGitHub()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});