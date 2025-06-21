document.getElementById('characterForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const element = document.getElementById('element').value.trim();
  const trait = document.getElementById('trait').value.trim();
  const output = document.getElementById('result');
  output.textContent = "⏳ Membuat karakter AI...";
  try {
    const response = await fetch('/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, element, trait })
    });
    const data = await response.json();
    output.textContent = data.result;
  } catch (error) {
    output.textContent = "❌ Gagal membuat karakter. Coba lagi nanti.";
  }
});