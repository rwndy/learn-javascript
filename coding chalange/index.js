let massAceng = 70;
let massFikri = 65;

let heightAceng = 1.78;
let heightFikri = 1.75;

let bmiAceng = massAceng / (heightAceng**2);
let bmiFikri = massFikri / (heightFikri**2);

let heigher = bmiAceng > bmiFikri;

// console
console.log(`berat mang Aceng: ${massAceng}`);
console.log(`berat mang Fikri ${massFikri}`);
console.log(`tinggi mang Aceng: ${heightAceng}`);
console.log(`tinggi mang Fikri: ${heightFikri}`);
console.log(`BMI mang aceng: ${bmiAceng}`);
console.log(`BMI mang Fikri: ${bmiFikri}`);

console.log(`Is Aceng's BMI higher than Fikri's true? ${heigher}`);






