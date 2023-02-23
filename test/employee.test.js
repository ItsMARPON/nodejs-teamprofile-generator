const Employee = require("../lib/employee");
const fs = require("fs");

jest.mock("fs");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should ", () => {
      const employee = new Employee();
      const file = "test.html";
      let data;

      fs.readFileSync.mockReturnValue("Hello World!");
      data = employee.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });
});
