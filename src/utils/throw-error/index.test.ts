import { throwError } from ".";

const ERROR_CONSTRUCT = {
  name: "ContextError",
  message: "Sorry, you are out of context",
  options: { engineer: "Mobiauto is good" },
};

describe("throwError", () => {
  it("should throw an error with the specified name, message, and options", () => {
    const errorContext = () =>
      throwError(
        ERROR_CONSTRUCT.name,
        ERROR_CONSTRUCT.message,
        errorContext,
        ERROR_CONSTRUCT.options
      );

    expect(errorContext).toThrowError(ERROR_CONSTRUCT);
  });
});
