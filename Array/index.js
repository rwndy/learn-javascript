let fruits = ['orange', 'grape', 'banana', 'melon'];
console.log(fruits); //membuat array yang diisi nilainya dengan string

let urutan = [1, 2, 3, 4, 5, 6];
console.log(urutan); // membuat array yang diisi nilainya dengan number
urutan[4] = 10; //mengubah element array

//menampilkan panjang dari isi array
console.log(fruits.length);
console.log(urutan.length);

let mix = [false, 'string', 22, ['array lagi', 33, true]]; //membuat array campuran dan didalam array ada array lagi
console.log(mix);
console.log(mix.length);

mix.push('material'); //method push untuk menambahkan nilai pada array di belakang
console.log(mix);
mix.push(223);
console.log(mix);

mix.unshift('depan'); // mengisi nilai array dari depan.
console.log(mix);

console.log(`index no: ${mix.indexOf(22)}`);

console.log(mix.shift()); //menghapus nilai array yang di depan
console.log(mix);

// array dua dimensi
let matched = [['laki-laki', 'perempuan'], ['Bulan', 'matahari'], ['Aku', 'kamu']];
console.log(matched);
console.log(matched[0][1]); //index pertama mencari posisi element array & index kedua mencari posisi element array didalam array



