const Employee = require("../lib/employee");
const fs = require("fs");

jest.mock("fs");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should ", () => {
      const fileIO = new FileIO();
      const file = "message.txt";
      let data;

      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });



});
