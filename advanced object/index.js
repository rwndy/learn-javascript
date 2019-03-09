class binatang {
  constructor() {
    this.zebra = 'hewan belang';
    this.kudanil = ' hewan yang suka nguap';
  }
}

const mamalia = new binatang(); //membuat object baru dengan menggunakan "new"
console.log(mamalia);
console.log(`zebra adalah ${mamalia.zebra}`);

// cara menulis object dengan cara yang lama

// let mamalia = {
//   zebra : 'hewan belang',
//   kudanil : 'hewan yang suka nguap'
// };

//instatiation
class Person { //class adalah Jinchuriki
  constructor(name, age, job) { //objek adalah biju-nya
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const Aceng = new Person('Aceng', 22, 'Penganggurang');
console.log(Aceng);
console.log(`nama saya adalah ${Aceng.name}`);

const Fikri = new Person('Fikri', 25, 'Designer');
console.log(Fikri);
console.log(`pekerjaan ${Fikri.name} adalah ${Fikri.job}`);

//membuat method pada class

class Motor {
  constructor(merk, bensin) {
    this.merk = merk;
    this.bensin = bensin;
  }

  hidupkan() { return 'kendaraan hidup'; } //membuat method di luar constructor. tapi tetap didalam class
}

const MotorAceng = new Motor('Yamaha', 'Pertamax');
console.log(MotorAceng.hidupkan());


