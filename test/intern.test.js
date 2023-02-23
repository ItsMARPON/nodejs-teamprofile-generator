const Intern = require("../lib/intern");
const fs = require("fs");

jest.mock("fs");

// gets name from getName()
describe("Intern", () => {
  describe("Initialization", () => {
    test("should obtain intern name", () => {
      const intern = new Intern("Mary", 1234, "mary@gmail.com");

      expect(intern.name).toEqual(
        expect.stringContaining(intern.name.toString())
      );
    });
  });
});

test("should obtain intern Id", () => {
  const intern = new Intern("Mary", 1234, "mary@gmail.com");

  expect(intern.id).toEqual(expect.any(Number));
});

// gets email from getEmail()
test("should obtain intern email", () => {
  const intern = new Intern("Mary", 1234, "mary@gmail.com");

  expect(intern.email).toEqual(
    expect.stringContaining(intern.email.toString())
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
