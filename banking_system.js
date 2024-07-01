class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  addBalance(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0) {
          this.balance += amount;
          resolve(`Saldo baru Anda adalah: ${this.balance}`);
        } else {
          reject("Masukan tidak valid. Silakan coba lagi.");
        }
      }, 2000); // Simulasi delay 2 detik
    });
  }

  subtractBalance(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0) {
          if (this.balance - amount < 0) {
            reject("Saldo tidak mencukupi. Tidak bisa mengurangi lebih dari saldo yang ada.");
          } else {
            this.balance -= amount;
            resolve(`Saldo baru Anda adalah: ${this.balance}`);
          }
        } else {
          reject("Masukan tidak valid. Silakan coba lagi.");
        }
      }, 2000); // Simulasi delay 2 detik
    });
  }

  getBalance() {
    return this.balance;
  }
}

// Inisialisasi objek BankAccount
const account = new BankAccount();

// Fungsi untuk menambah saldo
function Deposit() {
  const amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan", ""));
  alert("Memproses transaksi...");
  account.addBalance(amount)
    .then(message => alert(message))
    .catch(error => alert(error));
}

// Fungsi untuk mengurangi saldo
function Withdraw() {
  const amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:", ""));
  alert("Memproses transaksi...");
  account.subtractBalance(amount)
    .then(message => alert(message))
    .catch(error => alert(error));
}

// Jalankan kode saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  // Tambahkan pendengar acara ke tombol untuk memanggil fungsi tambahSaldo
  document.getElementById("Deposit").addEventListener("click", Deposit);
  // Tambahkan pendengar acara ke tombol untuk memanggil fungsi kurangiSaldo
  document.getElementById("Withdraw").addEventListener("click", Withdraw);
});