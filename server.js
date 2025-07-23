require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/generate', async (req, res) => {
  const { name, element, trait } = req.body;
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Buatkan deskripsi karakter dunia fantasi dengan: 
        Nama: ${name}, Elemen: ${element}, Sifat: ${trait}. 
        Tampilkan dengan gaya cerita, lengkap dengan kekuatan, latar belakang, dan gaya animasi yang cocok.`
      }]
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });
    res.json({ result: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Gagal menghubungi AI.' });
  }
});

app.listen(PORT, () => {
  console.log(`BI AI berjalan di http://localhost:${PORT}`);
});