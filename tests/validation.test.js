const validateForm = require("../src/validation");

test("valid input", () => {
    expect(validateForm("John", "john@mail.com")).toBe("Valid");
});

test("empty fields", () => {
    expect(validateForm("", "")).toBe("All fields required");
});

test("invalid email", () => {
    expect(validateForm("John", "johnmail")).toBe("Invalid email");
});