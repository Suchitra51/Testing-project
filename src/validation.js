function validateForm(name, email) {
    if (!name || !email) {
        return "All fields required";
    }
    if (!email.includes("@")) {
        return "Invalid email";
    }
    return "Valid";
}

module.exports = validateForm;