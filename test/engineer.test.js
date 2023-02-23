const Engineer = require("../lib/engineer");
const fs = require("fs");

jest.mock("fs");

// gets name from getName()
describe("Engineer", () => {
  describe("Initialization", () => {
    test("should obtain engineer name", () => {
      const engineer = new Engineer("Mary", 1234, "mary@gmail.com");

      expect(engineer.name).toEqual(
        expect.stringContaining(engineer.name.toString())
      );
    });
  });
});

test("should obtain engineer Id", () => {
  const engineer = new Engineer("Mary", 1234, "mary@gmail.com");

  expect(engineer.id).toEqual(expect.any(Number));
});

// gets email from getEmail()
test("should obtain engineer email", () => {
  const engineer = new Engineer("Mary", 1234, "mary@gmail.com");

  expect(engineer.email).toEqual(
    expect.stringContaining(engineer.email.toString())
  );
});
// gets GitHub Username from getGitHub()
test("should obtain engineer GitHub Username", () => {
  const engineer = new Engineer("Mary", 1234, "mary@gmail.com", "itsMARPON");

  expect(engineer.getGitHub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});
