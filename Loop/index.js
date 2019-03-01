let i = 1;
for (i; i <= 10; i++) {
  console.log(`nomor urut: ${i}`);
}

// perulangan dengan nilai ganjil
let j = 1
for (j; j <= 20; j= j+2) {
  console.log(`nomor urut: ${j}`);
}

// perulangan dengan nilai genap
let k = 0
for (k; k <= 20; k = k+2) {
  console.log(`nomor urut: ${k}`);
}

let l = 100;
for (l; l >= 0; l = l - 5) {
  console.log(l*5);
}

let m = 1;
for (m; m >= 10; m++) {
  if (m === 5) {
    break;
  }
  console.log(`hello ${m + 1} `);
}

// perulangan pada array

let person = ['aceng', 25, 'single'];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}