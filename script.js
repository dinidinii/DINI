// Script untuk tombol sapa
document.addEventListener("DOMContentLoaded", function () {
  const greetBtn = document.getElementById("greetBtn");
  if (greetBtn) {
    greetBtn.addEventListener("click", function () {
      alert("Halo, terima kasih sudah mengunjungi website saya!");
    });
  }
});
