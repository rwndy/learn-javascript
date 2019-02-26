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




console.log(Aceng.calculate());
console.log(Fikri.calculate());
console.log(Aceng, Fikri);
