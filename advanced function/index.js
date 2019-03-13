// Callback function adalah function yang dibuat dan dieksekusi didalam function lain

// function callBack ini dijadikan function callback
function callBack(name) {
  console.log (`hallo ${name} apa kabar??`);
}

function inputan(first_name, last_name, CallBack) {
  let name = first_name + " " + last_name;
  if (typeof CallBack == 'function') {
    CallBack(name)
  } else {
    console.log('move on mas');
    
  }
}

inputan('hartika', 'yusman', callBack);

// contoh lain callback function

let years = [1990, 1996, 2000, 2004];

function calc(arr, fn) {
  let arrResult = []; // variabel ini akan diisi nantinya untuk menghitung panjang array
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculacAge(e) {
  return 2019 - e;
}

let ages = calc(years, calculacAge);
console.log(`hasil umur yang dikalkulasikan ${ages}`);
