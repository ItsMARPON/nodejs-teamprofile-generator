const Manager = require("../lib/manager");
const fs = require("fs");

jest.mock("fs");

// gets name from getName()
describe("Manager", () => {
  describe("Initialization", () => {
    test("should obtain manager name", () => {
      const manager = new Manager("Mary", 1234, "mary@gmail.com");

      expect(manager.name).toEqual(
        expect.stringContaining(manager.name.toString())
      );
    });
  });
});

test("should obtain manager Id", () => {
  const manager = new Manager("Mary", 1234, "mary@gmail.com");

  expect(manager.id).toEqual(expect.any(Number));
});

// gets email from getEmail()
test("should obtain manager email", () => {
  const manager = new Manager("Mary", 1234, "mary@gmail.com");

  expect(manager.email).toEqual(
    expect.stringContaining(manager.email.toString())
  );
});
// gets office number from getOfficeNumber()
test("should obtain Manager's office number", () => {
  const manager = new Manager("Mary", 1234, "mary@gmail.com", "L-1234");

  expect(manager.getOfficeNumber()).toEqual(
    expect.stringContaining(manager.office.toString())
  );
});
