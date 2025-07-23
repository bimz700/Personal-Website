require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

console.log("API key kamu adalah:", apiKey);

const axios = require('axios');

async function callOpenAI() {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "Halo, siapa kamu?" }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error("Gagal menghubungi OpenAI:", error.response?.data || error.message);
    }
}

callOpenAI();