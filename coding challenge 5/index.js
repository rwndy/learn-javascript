let Aceng = {
  bills: [124, 48, 268, 180, 42],
  calculate: () => {
    Aceng.tips = []; //membuat properti tips dengan nilai array 0
    Aceng.total = []; //membuat properti total dengan nilai array 0

    //menghitung panjang element array pada properti bills
    for (let i = 0; i < Aceng.bills.length; i++) { 
      let percentage; //membuat variabel percentage untuk diisi nilai bonus tip
      let bill = Aceng.bills[i]; //membuat variabel dengan nilai array bills untuk dikalkulasikan

      // pengkondisian bonus tip sesuai dengan nilai pada array.
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      //hasil kalkulasi dari tip yang di dapat kan dari bills
      Aceng.tips[i] = bill * percentage;
      //hasil kalkulasi dari total yang akan diberikan
      Aceng.total[i] = bill + (bill * percentage);
    }
  }
};

Aceng.calculate();
console.log(Aceng);