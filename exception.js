// setTime
function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");


//Error
function bagiDuaAngka(angka1, angka2) {
  try {
    if (isNaN(angka1) || isNaN(angka2)) {
      const errorMessage = "Kedua input harus berupa angka dan tidak boleh kosong.";
      console.error(errorMessage);  
      throw new Error(errorMessage);  
    }

    if (angka1 === '' || angka2 === '') {
      const errorMessage = "Kedua input harus diisi.";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    
    if (angka2 === 0) {
      const errorMessage = "Tidak dapat membagi dengan nol.";
      console.error(errorMessage);  
      throw new Error(errorMessage);  
    }
    
    const hasil = angka1 / angka2;
    document.getElementById("hasil").textContent = "Hasil pembagian: " + hasil;
    console.log("Hasil pembagian: " + hasil);  
    
  } catch (error) {
    document.getElementById("hasil").textContent = "Terjadi kesalahan: " + error.message;
    console.error("Terjadi kesalahan: " + error.message);  
  }
}

function prosesPembagian() {
  const angka1 = document.getElementById("angka1").value.trim();
  const angka2 = document.getElementById("angka2").value.trim();
  
  const angka1Parsed = angka1 ? parseFloat(angka1) : NaN;
  const angka2Parsed = angka2 ? parseFloat(angka2) : NaN;
  
  bagiDuaAngka(angka1Parsed, angka2Parsed);
}
