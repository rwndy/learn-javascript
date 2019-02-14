// learn variable
// variabel adalah wadah untuk menyimpan suatu nilai. bisa di tulis var, let, dan juga const.
// contoh : var namaPertama = 'Aceng';
//  namaPertama adalah nama variable dan 'Aceng' adalah nilai dalam bentuk tipe string.

var namaPertama = 'Aceng';
var namaBelakang = 'Fikri';

var namaLengkap = namaPertama + ' ' + namaBelakang;
console.log(namaPertama);
console.log(namaBelakang);
console.log(namaLengkap);

// kita juga bisa menggabungkan nilai dari kedua variable tersebut dengan +
// var juga bisa diisi dengan berbagai macam nilai seperti integer (angka), boolean (true atau false), array, dan juga object
// contoh

var umur = 23; //ini integer
var statusPernikahan = false; //ini boolean
var hobi = ['main game', 'main game di handphone', 'main game di consol', 'main game di PC']; // ini array
var pendidikan = {
  SD: 'Sukem1',
  SMP: 'SMP2',
  SMA: 'SMKN 1 Kabtang'
} // ini object

console.log(umur);
console.log(statusPernikahan);
console.log(hobi);
console.log(pendidikan);
