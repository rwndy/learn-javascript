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