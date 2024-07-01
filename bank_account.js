// Deklarasikan saldo awal
let saldo = 0;

// Function to add money to the account
function tambahSaldo() {
  let amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan", ""));
  if (!isNaN(amount)) {
    saldo += amount;
    alert(`Saldo baru Anda adalah: ${saldo}`);
  } else {
    alert("Masukan tidak valid. Silakan coba lagi.");
  }
}

function kurangiSaldo() {
  let amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:", ""));
  if (!isNaN(amount)) {
    if (saldo - amount < 0) {
      alert("Saldo tidak mencukupi. Tidak bisa mengurangi lebih dari saldo yang ada.");
    } else {
      saldo -= amount;
      alert(`Saldo baru Anda adalah: ${saldo}`);
    }
  } else {
    alert("Masukan tidak valid. Silakan coba lagi.");
  }
}

// Run the code when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the button to call the function tambahSaldo
  document.getElementById("tambah-saldo").addEventListener("click", tambahSaldo);
  // Add event listener to the button to call the function kurangiSaldo
  document.getElementById("kurangi-saldo").addEventListener("click", kurangiSaldo);
});
