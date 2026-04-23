jest.mock("../src/api");

const handleSubmit = require("../src/app");
const submitForm = require("../src/api");

test("integration test", async () => {
    submitForm.mockResolvedValue({ message: "Submitted" });

    const result = await handleSubmit("John", "john@mail.com");
    expect(result).toBe("Submitted");
});