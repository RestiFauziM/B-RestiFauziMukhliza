const angka1 = 10;
const angka2 = 5;

let hasilPenjumlahan = angka1 + angka2;

var tombol = document.getElementById("tombolHitung");
tombol.onclick = function() {
    alert("Hasil penjumlahan " + angka1 + " + " + angka2 + " adalah: " + hasilPenjumlahan);
};
