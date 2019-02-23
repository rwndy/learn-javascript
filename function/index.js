// ini adalah function deklarasi

function Pagi() {
  return console.log('selamat pagi sayang');
}

Pagi();

function kabar() {
  console.log('kamu, apa kabar?');
  
}

kabar();

function curhat() {
  console.log('aku sehat dan baik-baik juga', 'kamu liat badan aku kurusan banget ya?');
}

curhat();

function curhatLagi() {
  console.log('aku juga gak tau, kenapa badan aku bisa habis kayak gini.', ' tapi, aku seneng liat kamu lagi di RC tahun ini');
  
}

curhatLagi();

// menampung nilai menggunakan return
// return hanya bisa menampung satu nilai saja.

function pagi() {
  return 'selamat pagai, kamu apa kabar?'
}

let salam = pagi;
console.log(salam);


function makan() {
  let buah = ['melon', 'semangka'];
  return buah;
}

console.log(makan());

function umurKamu(TahunLahir) {
  return 2019 - TahunLahir;
}

let umurAceng = umurKamu(1996);
let umurFikri = umurKamu(1994);

console.log(`ini adalah umur Aceng: ${umurAceng} dan umur Fikri: ${umurFikri}`);

function Sore() {
  let AllSore = ['afternoon', 'petang', 'peuting'];
  return AllSore;
}

let Salam = Sore();
for (let value of Salam) {
  console.log(value);
  
}