// Fungsi untuk menampilkan halaman kedua
function showSecondPage() {
    document.querySelector('.text-box').style.display = 'none';
    document.querySelector('.second-page').style.display = 'block';
}

// Fungsi untuk kembali ke halaman pertama
function goBack() {
    document.querySelector('.second-page').style.display = 'none';
    document.querySelector('.text-box').style.display = 'block';
}

// Animasi muncul saat scroll (untuk efek interaktif tambahan)
window.addEventListener("scroll", () => {
    if (window.scrollY > 400 && !localStorage.getItem("scrolled")) {
        alert("Keren ya dunia animasi! Yuk terus eksplor!");
        localStorage.setItem("scrolled", "true");
    }
});

// Fungsi untuk validasi dan simulasi kirim pesan pada contact.html 
function kirimPesan() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama && email && pesan) {
        alert(`Terimakasih, ${nama}! Pesan kamu sudah dikirim.`);
        document.querySelector("form").reset();
    } else {
        alert("Mohon lengkapi semua kolom.");
    }

    return false; // Hindari reload halaman
}

// Navigasi tombol "Hubungi Saya" di index.html 
function bukaKontak() {
    window.location.href = "contact.html";
}
