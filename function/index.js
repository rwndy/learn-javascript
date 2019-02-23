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

// function Statement dan expression

// ini adalah function expression.
let penjumlahan = function(a, b) {
  return a+b;
}

console.log(`ini adalah penjumlahan 10 + 20 hasilnya ${penjumlahan(10, 20)}`);

const pengurangan = function(a, b) {
  return a-b;
}

console.log(`ini adalah pengurangan 20 - 10 dan hasilnya: ${pengurangan(20,10)}`);


const activity = function(job, name) {
  switch (job) {
    case 'teacher':
      return `${name} adalah seorang guru`;
    
    case 'designer':
      return `${name} adalah seorang designer`;
  
    default:
      return `${name} pengangguran sejati`;
  }
}

console.log(activity('teacher', 'Aceng'));

const nilai = function(...penilaian) {
  console.log(penilaian[0]);
  console.log(penilaian[1]);
  console.log(penilaian[2]);
  console.log(penilaian[3]);
  console.log(penilaian[4]);
}

console.log(nilai(1, 2, 3, 4, 5));





