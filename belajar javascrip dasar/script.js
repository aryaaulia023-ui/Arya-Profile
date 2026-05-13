const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Menambah atau menghapus class .dark-mode pada body
    body.classList.toggle('dark-mode');

    // Mengubah teks tombol
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "Mode Terang";
    } else {
        toggleBtn.innerText = "Mode Gelap";
    }
});