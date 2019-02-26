// Object

let mahasiswa = {
  Nama : 'Riwandi',
  NIM : 1433482499,
  Jurusan : 'Sistem Komputer'
};

console.log(`Nama: ${mahasiswa.Nama},
NIM: ${mahasiswa.NIM},
Jurusan: ${mahasiswa.Jurusan}`);

// 
let person = {
  nama : 'Riwandi',
  menikah : false,
  umur : 23,
  pendidikan : 'Sarjana Komputer',
  skill : ['html', 'css', 'javascript']
};

person.nama = 'Aceng'; //mengubah nilai properti nama

console.log(`nama: ${person.nama},
pendidikan: ${person.pendidikan},
skill: ${person.skill}`);

console.log(person.sekolah);
console.log(person.skill);

// 
let bmw = {};

bmw.ban = 'GT';
bmw.stir = 'stir mahal'; // bisa menambahkan properti dan nilai seperti mengisi variable

console.log(bmw.ban);

// membuat method pada object

let motor = {
  merk : 'Yamaha',
  tipe : 'Vixion',
  bensin : 'Pertamax',
  hidupkan : () => { return 'mesin menyala'; }
};

console.log(`${motor.hidupkan()} motor siap berangkat`);


let nasiGoreng = {
  telor : '1 butir',
  kecap : '250ml',
  minyak : '250ml',
  sajikan : (rasa) => { return rasa + 'nasi goreng sudah siap di makan'; }
};

console.log(nasiGoreng.sajikan('hmmm '));

// for in untuk menampilkan isi properti dan method object

let spek;

for (spek in motor) {
  console.log(motor[spek]);
}

// membuat object baru
let mieGoreng = new Object();
mieGoreng.telor = '2 butir';
mieGoreng.sayuran = 'cesim';
console.log(mieGoreng);
