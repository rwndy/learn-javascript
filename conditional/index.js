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

