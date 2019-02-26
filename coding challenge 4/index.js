let Aceng = {
  fullname : 'Aceng Sanusi',
  mass : 70,
  height : 1.78,
  calculate: () => { 
    Aceng.bmi = Aceng.mass / (Aceng.height * Aceng.height); 
    return Aceng.bmi;
  }
};

let Fikri = {
  fullName : 'Fikri Sitohang',
  mass : 65,
  height : 1.75,
  calculate : () => {
    Fikri.bmi = Fikri.mass / (Fikri.height * Fikri.height);
    return Fikri.bmi;
  }
};

if (Aceng.calculate > Fikri.calculate) {
  console.log(`nilai BMI ${Aceng.fullname} lebih tinggi dari ${Fikri.fullName}`);
} else if (Fikri.calculate > Aceng.calculate) {
  console.log(`nilai BMI ${Fikri.fullName} lebih tinggi dari ${Aceng.fullname}`);
} else {
  console.log('nilainya sama');
}




console.log(`ini nilai BMI ${Aceng.fullname} ${Aceng.calculate()}`);
console.log(`ini nilai BMI ${Fikri.fullName} ${Fikri.calculate()}`);
console.log(Aceng, Fikri);
