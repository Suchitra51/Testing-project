jest.mock("axios");

const axios = require("axios");
const submitForm = require("../src/api");

test("API mock test", async () => {
    axios.post.mockResolvedValue({
        data: { message: "Success" }
    });

    const res = await submitForm({ name: "John" });
    expect(res.message).toBe("Success");
});