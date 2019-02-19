// if else

let perut = 'laper';

if (perut === 'laper') {
  console.log('makan bang');
  
} else {
  console.log('puasa 10 tahun'); 
}

let umurAceng = 29;
let umurFikri = 28;

if (umurAceng <= umurFikri) {
  console.log('Tua banget lu Fik');
  
} else if (umurAceng >= umurFikri) {
  console.log('tua juga lu ceng');
  
} else {
  console.log('hehehe');
  
}

// if, else if, else

let nilai = 100;
let name = 'Aceng';

if (nilai >= 90 && nilai >= 100) {
  console.log(`selamat ${name}! kamu mendapatkan nilai A`);
  
} else if (nilai >= 70 && nilai < 90) {
  console.log(`selamat ${name}! kamu mendapatkan nilai B`);
  
} else if (nilai >= 60 && nilai < 70 ) {
  console.log(`selamat ${name}! kamu mendapatkan nilai C`);
  
} else if (nilai >= 40 && nilai < 60) {
  console.log(`selamat ${name}! kamu mendapatkan nilai D`);
  
} else {
  console.log(`maaf ${name}, kamu harus ngulang kembali. nilai kamu E`);
  
}

// ternary operator

let umur = 18;

umur >= 17 ? console.log(`selamat ${name} bisa membuat E-KTP`) : console.log(`Maaf ${name} kamu harus nunggu umur 18 tahun dulu`);

let pesanMakan = 'nasi uduk';

let goFood = pesanMakan === 'kelaperan' ? 'mesen burger' : 'nasi goreng';
console.log(goFood);

// ternary operator jamak

let firstCheck = false,
secondCheck = false, 
access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted'; 
console.log(access);

// ternary operator AND dan OR

let JumlahBarang = 500;
let total;

total = JumlahBarang >= 500 ? JumlahBarang * 100 :  JumlahBarang * 150;
console.log(`total barang adalah ${total}`);



// switch
// Struktur switch hanya cocok untuk kondisi sederhana 
// seperti mengecek apakah nilai variabel sama dengan string tertentu.
let job = 'guru';
switch (job) {
  case 'guru':
    console.log(`${name} adalah seorang guru yang mengajari coding kepada anak-anak`);
    break;
  case 'designer':
    console.log(`${name} adalah seorang designer yang mengajari design produk kepada anak-anak`);
    break;
  case 'supir grab':
    console.log(`${name} adalah seorang supir grab`);
    break;
  default:
    console.log(`${name} adalah seorang pengangguran sejati`);
    break;
}