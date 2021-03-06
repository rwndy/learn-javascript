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

// function returning function

function interviewQuestion(job) {
  if (job === 'designer') {
   return function(name) {
      console.log(`${name}, can you explain what UX design is?`);
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log(`what subject do you teach ${name}?`);
    }
  } else {
    return function(name) {
      console.log(`hello, ${name}, what do you do?`);
    }
  }
}

interviewQuestion('designer') ('Aceng');
interviewQuestion('teacher') ('Fikri');
interviewQuestion('pengangguran') ('Joni');

//Immediately Invoked Function Expressions (IIFE)
// membuat function anonym menjadi ekpresi dan langsung menjalankan fungsinya.
// "()" itu menjadikan function deklarasi menjadi function ekspresi
(function() {
  let hi = 'hello world';
  console.log(hi);
}) ();

//IIFE menggunakan argument

(function(a, b) {
  let penjumlahan = a+b;
  return console.log(penjumlahan);
}(10, 20));