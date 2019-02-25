const AcengTip = (bill) => {
  if (bill <= 50) {
    return (bill * 20) /100;
  } else if (bill >= 50 && bill < 200) {
    return (bill * 15) / 100;
  } else {
    return (bill *10) / 100;
  }
}

console.log(`ini adalah bonus tip dari Aceng sebesar: ${AcengTip(250)}`);

let bills = [124, 48, 268];
let tips = [AcengTip(bills[0]), AcengTip(bills[1]), AcengTip(bills[2])];
let bonus = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]]
console.log(tips);
console.log(bonus);

