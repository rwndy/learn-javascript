const AcengTip = (bill) => {
  if (bill <= 50) {
    return (bill * 20) /100;
  } else if (bill >= 50 && bill < 200) {
    return (bill * 15) / 100;
  } else {
    return (bill *10) / 100;
  }
}

console.log(`ini adalah bonus tip dari Aceng sebesar: ${AcengTip(324)}`);