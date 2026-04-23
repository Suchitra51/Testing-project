const axios = require("axios");

async function submitForm(data) {
    const response = await axios.post("https://fakeapi.com/submit", data);
    return response.data;
}

module.exports = submitForm;