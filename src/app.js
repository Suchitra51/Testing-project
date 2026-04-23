const validateForm = require("./validation");
const submitForm = require("./api");

async function handleSubmit(name, email) {
    const validation = validateForm(name, email);
    
    if (validation !== "Valid") {
        return validation;
    }

    const result = await submitForm({ name, email });
    return result.message;
}

module.exports = handleSubmit;