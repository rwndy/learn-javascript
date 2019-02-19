// 1. Calculate the average score for each team

let teamAceng = 'Tim Aceng';
let teamFikri = 'Tim Fikri';

let TotalAcengScore = (89 + 120 + 103) / 3;
let TotalFikriScore = (116 + 94 + 123) / 3;

let scoreAceng = TotalAcengScore;
let scoreFikri = TotalFikriScore;

console.log(`Rata-rata score ${teamAceng} adalah: ${TotalAcengScore}`);
console.log(`Rata-rata score ${teamFikri} adalah: ${TotalFikriScore}`);

// 2. Decide which team wins in average (highest average score), and print the winner to the console.
// also include the average score in the ouput.

if (scoreAceng > scoreFikri) {
  console.log(`Rata-rata score ${teamAceng} adalah: ${TotalAcengScore} selamat! Tim Aceng menang`);
} else if (scoreFikri > scoreAceng) {
  console.log(`Rata-rata score ${teamFikri} adalah: ${TotalFikriScore} selamat! Tim Fikri menang`);
} else {
  console.log('nilai belum diinput');
}

// 3. then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average scores).

let TotalAcengScore2 = (120 + 120 + 120) / 3;
let TotalFikriScore2 = (116 + 94 + 123) / 3;

let scoreAceng2 = TotalAcengScore2;
let scoreFikri2 = TotalFikriScore2;

console.log(`Rata-rata score ${teamAceng} adalah: ${TotalAcengScore2}`);
console.log(`Rata-rata score ${teamFikri} adalah: ${TotalFikriScore2}`);

if (scoreAceng2 > scoreFikri2) {
  console.log(`Rata-rata score ${teamAceng} adalah: ${TotalAcengScore2} selamat! Tim Aceng menang`);
} else if (scoreFikri2 > scoreAceng2) {
  console.log(`Rata-rata score ${teamFikri} adalah: ${TotalFikriScore2} selamat! Tim Fikri menang`);
} else {
  console.log('nilai belum diinput');
}