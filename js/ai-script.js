const apiKey = "proces.env.OPENAI_API_KEY"; // Ganti dengan API key milikmu
const submitBtn = document.getElementById("submitBtn");
const inputText = document.getElementById("inputText");
const outputBox = document.getElementById("outputBox");
const toolSelect = document.getElementById("toolSelect");

submitBtn.addEventListener("click", async () => {
  const tool = toolSelect.value;
  const input = inputText.value.trim();
  if (!input) return alert("Tolong isi teks terlebih dahulu.");

  let prompt = "";

  switch (tool) {
    case "chat":
      prompt = `Tanggapi sebagai asisten pintar: ${input}`;
      break;
    case "translate":
      prompt = `Terjemahkan ke bahasa Inggris:\n\n${input}`;
      break;
    case "cv":
      prompt = `Buat CV profesional dengan deskripsi berikut:\n\n${input}`;
      break;
    case "grammar":
      prompt = `Periksa dan perbaiki grammar dalam kalimat ini:\n\n${input}`;
      break;
    case "article":
      prompt = `Tulis artikel sekitar 300 kata dengan topik:\n\n${input}`;
      break;
    case "caption":
      prompt = `Buatkan caption menarik untuk media sosial tentang:\n\n${input}`;
      break;
    case "code":
      prompt = `Tolong bantu analisa atau tuliskan kode berikut:\n\n${input}`;
      break;
    default:
      prompt = input;
  }

  outputBox.textContent = "⏳ Sedang memproses...";
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    outputBox.textContent = data.choices?.[0]?.message?.content || "Gagal mendapatkan jawaban.";
  } catch (error) {
    outputBox.textContent = "❌ Error: " + error.message;
  }
});
